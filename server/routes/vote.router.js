const express = require('express');

const pool = require('../modules/pool');

const router = express.Router();

//Posts vote of 1 to db
router.post('/', (req, res) => {
    console.log(req.body)
    const sqlText = `INSERT INTO votes ("vote_id", "event_id") 
      VALUES ($1, $2) RETURNING "vote_id"`;
    pool.query(sqlText, [req.body.vote_id, req.body.event_id])
        .then((response) => {
            console.log(`Added vote to the database response is`, response)
            res.sendStatus(201);
            
        })
        .catch((error) => {
            console.log(`Error POSTING vote to the db`, error);
            res.sendStatus(500); // Good server always responds
        })


});


//Gets votes of 1 from db
router.get('/:id', (req, res) => {
    console.log('in get vote 1 req params id is', req.params.id)
    const sqlText = `select Count (vote_id) from votes where vote_id =1 and event_id =$1;`;
    pool.query(sqlText, [req.params.id])
        .then((response) => {
            console.log(`GOT votes`, response.rows)

            res.send(response.rows);
        })
        .catch((error) => {
            console.log(`Error getting vote 1 db`, error);
            res.sendStatus(500); // Good server always responds
        })

});



module.exports = router;