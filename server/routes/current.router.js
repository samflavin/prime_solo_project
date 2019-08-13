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

//Gets invitation count
router.get('/invitations/:id', (req, res) => {
    console.log(req.params)
    const sqlText = `select count (user_id) from invitees where user_id =$1;`;
    pool.query(sqlText, [req.params.id])
        .then((response) => {
            console.log(`GOT Current invitations for user`, response.rows)

            res.send(response.rows);
        })
        .catch((error) => {
            console.log(`Error getting invitations from db`, error);
            res.sendStatus(500); // Good server always responds
        })

});


//Gets Event names for user
router.get('/list/:id', (req, res) => {
    console.log(req.params)
    const sqlText = `select (event_name), id from event where user_id =$1`;
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


//Gets invited event names for user
router.get('/invitations/list/:id', (req, res) => {
    console.log(req.params)
    const sqlText = `select (event_name), event_id from event join invitees on
    invitees.event_id = event.id where invitees.user_id = $1;`;
    pool.query(sqlText, [req.params.id])
        .then((response) => {
            
            console.log(`GOT invitations List for user`, response.rows)

            res.send(response.rows);
        })
        .catch((error) => {
            console.log(`Error getting Invitation List from db`, error);
            res.sendStatus(500); // Good server always responds
        })

});


module.exports = router;