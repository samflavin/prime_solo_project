const express = require('express');

const pool = require('../modules/pool');

const router = express.Router();

//gets options by poll id
router.get('/:id', (req, res) => {
    console.log(req.params)
    const sqlText = `select option, id from "option" where poll_id=$1`;
    pool.query(sqlText, [req.params.id])
        .then((response) => {
            console.log(`GOT Options rows`, response.rows)

            res.send(response.rows);
        })
        .catch((error) => {
            console.log(`Error getting Options from db`, error);
            res.sendStatus(500); // Good server always responds
        })

});

//gets options by event id
router.get('/event/:id', (req, res) => {
    console.log(req.params)
    const sqlText = `select option, option.id from "option" join polls
 on polls.id = option.poll_id where event_id =$1;`;
    pool.query(sqlText, [req.params.id])
        .then((response) => {
            console.log(`GOT Options rows`, response.rows)

            res.send(response.rows);
        })
        .catch((error) => {
            console.log(`Error getting Options from db`, error);
            res.sendStatus(500); // Good server always responds
        })

});





module.exports = router;