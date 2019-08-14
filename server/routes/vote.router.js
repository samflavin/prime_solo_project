const express = require('express');

const pool = require('../modules/pool');

const router = express.Router();

//Posts messages to the chat board
router.post('/', (req, res) => {
    console.log(req.body)
    const sqlText = `INSERT INTO votes ("vote_id", "event_id", "user_id") 
      VALUES ($1, $2, $3) RETURNING event_id`;
    pool.query(sqlText, [req.body.vote_id, req.body.event_id, req.body.user_id])
        .then((response) => {
            console.log(`Added vote to the database`, response.rows)
            res.send(response.rows);
        })
        .catch((error) => {
            console.log(`Error POSTING vote to the db`, error);
            res.sendStatus(500); // Good server always responds
        })


});


//Gets votes from db based on event id
router.get('/:id', (req, res) => {
    console.log('in get votes req params id is', req.params.id)
    const sqlText = `select vote_id, user_id from "votes" where event_id =$1;
`;
    pool.query(sqlText, [req.params.id])
        .then((response) => {
            console.log(`GOT votes`, response.rows)

            res.send(response.rows);
        })
        .catch((error) => {
            console.log(`Error getting votes db`, error);
            res.sendStatus(500); // Good server always responds
        })

});



module.exports = router;