const express = require('express');

const pool = require('../modules/pool');

const router = express.Router();

//Gets event count for user
router.get('/:id', (req, res) => {
    console.log(req.params)
    const sqlText = `select count (event_name) from event where user_id =$1`;
    pool.query(sqlText, [req.params.id])
        .then((response) => {
            console.log(`GOT Current Events for user`, response.rows)

            res.send(response.rows);
        })
        .catch((error) => {
            console.log(`Error getting Current events from db`, error);
            res.sendStatus(500); // Good server always responds
        })

});

//Gets Event names for user
router.get('/list/:id', (req, res) => {
    console.log(req.params)
    const sqlText = `select (event_name) from event where user_id =$1`;
    pool.query(sqlText, [req.params.id])
        .then((response) => {
            console.log(`GOT Event List for user`, response.rows)

            res.send(response.rows);
        })
        .catch((error) => {
            console.log(`Error getting Event List from db`, error);
            res.sendStatus(500); // Good server always responds
        })

});



module.exports = router;