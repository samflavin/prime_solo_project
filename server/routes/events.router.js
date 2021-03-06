const express = require('express');

const pool = require('../modules/pool');

const router = express.Router();



//gets all deescriptions of with event id
router.get('/description/:id', (req, res) => {
    console.log(req.params.id)
    const sqlText = `select description, event_name, user_id from "event" where id=$1`;
    pool.query(sqlText, [req.params.id])
        .then((response) => {

            res.send(response.rows[0])
        })
        .catch((error) => {
            console.log(`error getting description`, error);
            res.sendStatus(500)
        })
});


//Post event and return id
router.post('/', (req, res) => {
    console.log(req.body)
    const sqlText = `INSERT INTO event ("user_id", "event_name", "description") 
      VALUES ($1, $2, $3) RETURNING id`;
    pool.query(sqlText, [req.body.userId, req.body.event_name, req.body.description])
        .then((response) => {
            console.log(`Added event to the database`, response.rows[0])
            res.send(response.rows[0]);
        })
        .catch((error) => {
            console.log(`Error creating event in db`, error);
            res.sendStatus(500); // Good server always responds
        })

});

router.get('/:id', (req, res) => {
    console.log(req.params)
    const sqlText = `select event.id from event where "user_id"=$1`;
    pool.query(sqlText, [req.params.id])
        .then((response) => {
            console.log(`got event info`, response.rows)
            res.send(response.rows);
        })
        .catch((error) => {
            console.log(`Error getting events from db`, error);
            res.sendStatus(500); // Good server always responds
        })

});

// gets event user id
router.get('/getId', (req, res) => {
    console.log(req.params)
    const sqlText = `select event.id from event where "user_id"=$1`;
    pool.query(sqlText, [req.params.id])
        .then((response) => {
            console.log(`got event info`, response.rows)
            res.send(response.rows);
        })
        .catch((error) => {
            console.log(`Error getting events from db`, error);
            res.sendStatus(500); // Good server always responds
        })

});

//Post event and return id
router.put('/editDescription', (req, res) => {
    console.log(req.body)
    const sqlText = `update event set description =$1 where event.id=$2;`;
    pool.query(sqlText, [req.body.description, req.body.event_id])
        .then((response) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error updating event description in db`, error);
            res.sendStatus(500); // Good server always responds
        })

});






module.exports = router;