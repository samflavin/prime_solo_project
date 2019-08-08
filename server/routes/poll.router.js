const express = require('express');

const pool = require('../modules/pool');

const router = express.Router();


//
router.post('/', (req, res) => {
    console.log(req.body)
    const sqlText = `INSERT INTO polls ("question", "options", "eventId") 
      VALUES ($1, $2, $3) RETURNING id`;
    pool.query(sqlText, [req.body.question, req.body.options, req.body.eventId])
        .then((response) => {
            console.log(`Added POLL to the database`, response.rows[0])
            res.send(response.rows[0]);
        })
        .catch((error) => {
            console.log(`Error creating POLL db`, error);
            res.sendStatus(500); // Good server always responds
        })

});

// router.get('/:id', (req, res) => {
//     console.log(req.params)
//     const sqlText = `select event.id from event where "userId"=$1`;
//     pool.query(sqlText, [req.params.id])
//         .then((response) => {
//             console.log(`got event info`, response.rows)
//             res.send(response.rows);
//         })
//         .catch((error) => {
//             console.log(`Error getting events from db`, error);
//             res.sendStatus(500); // Good server always responds
//         })

// });





module.exports = router;