const express = require('express');

const pool = require('../modules/pool');

const router = express.Router();


//POST route
router.post('/', async (req, res) => {
    const client = await pool.connect();
    try {
        console.log(req.body)
        const {
            question,
            options,
            eventId
        } = req.body;
        await client.query('BEGIN')
        const orderInsertResults = await client.query(`INSERT INTO "polls" ("question", "options", "eventId")
        VALUES ($1, $2, $3)
        RETURNING id;`, [question, options, eventId]);
        const questionId = orderInsertResults.rows[0].id;
        

        await Promise.all(options.map(option=> {
            const insertLineItemText = `INSERT INTO "option" ("option", "poll_id") VALUES ($1, $2) RETURNING poll_id`;
            const insertLineItemValues = [option, questionId ];
            return client.query(insertLineItemText, insertLineItemValues);
        }));

        await client.query('COMMIT')
        res.sendStatus(201);
    } catch (error) {
        await client.query('ROLLBACK')
        console.log('Error POST /api/poll', error);
        res.sendStatus(500);
    } finally {
        client.release()
    }

    // console.log(req.body)
    // const sqlText = `INSERT INTO polls ("question", "options", "eventId") 
    //   VALUES ($1, $2, $3) RETURNING id`;
    // pool.query(sqlText, [req.body.question, req.body.options, req.body.eventId])
    //     .then((response) => {
    //         console.log(`Added POLL to the database`, response.rows[0])
    //         res.send(response.rows[0]);
    //     })
    //     .catch((error) => {
    //         console.log(`Error creating POLL db`, error);
    //         res.sendStatus(500); // Good server always responds
    //     })

});


//GET route
router.get('/:id', (req, res) => {
    console.log(req.params)
    const sqlText = `select * from polls where "eventId" =$1;`;
    pool.query(sqlText,[req.params.id])
        .then((response) => {
            console.log(`got event info`, response.rows, 'req.params.id', req.params.id)
            res.send(response.rows);
        })
        .catch((error) => {
            console.log(`Error getting events from db`, error);
            res.sendStatus(500); // Good server always responds
        })

});





module.exports = router;