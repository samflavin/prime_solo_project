const express = require('express');

const pool = require('../modules/pool');

const router = express.Router();


//POST route
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


//GET route
router.get('/', (req, res) => {
    console.log(req.params)
    const sqlText = `select * from polls;`;
    pool.query(sqlText)
        .then((response) => {
            console.log(`got event info`, response.data)
            res.send(response.data);
        })
        .catch((error) => {
            console.log(`Error getting events from db`, error);
            res.sendStatus(500); // Good server always responds
        })

});





module.exports = router;