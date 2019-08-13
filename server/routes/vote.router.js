const express = require('express');

const pool = require('../modules/pool');

const router = express.Router();

//Posts messages to the chat board
router.post('/', (req, res) => {
    console.log(req.body)
    const sqlText = `INSERT INTO votes ("user_id", "vote_id", "event_id") 
      VALUES ($1, $2, $3) RETURNING event_id`;
    pool.query(sqlText, [req.body.user_id, req.body.msg, req.body.event_id])
        .then((response) => {
            console.log(`Added Message to the database`, response.rows[0])
            res.send(response);
        })
        .catch((error) => {
            console.log(`Error POSTING message to the db`, error);
            res.sendStatus(500); // Good server always responds
        })


});

//Gets messages by event id
router.get('/:id', (req, res) => {
    console.log('in get messages req body is', req.params.id)
    const sqlText = `select messages, username from messages join "user" 
on messages.user_id = "user".id where event_id =$1 order by entry_date ASC limit 25;`;
    pool.query(sqlText, [req.params.id])
        .then((response) => {
            console.log(`GOT chat messages`, response.rows)

            res.send(response.rows);
        })
        .catch((error) => {
            console.log(`Error getting chat messages db`, error);
            res.sendStatus(500); // Good server always responds
        })

});



module.exports = router;