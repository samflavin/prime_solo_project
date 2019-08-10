const express = require('express');

const pool = require('../modules/pool');

const router = express.Router();

//gets all deescriptions of with event id
// router.get('/description/:id', (req, res) => {
//     console.log(req.params.id)
//     const sqlText = `select description, event_name from "event" where id=$1`;
//     pool.query(sqlText, [req.params.id])
//         .then((response) => {

//             res.send(response.rows[0])
//         })
//         .catch((error) => {
//             console.log(`error getting description`, error);
//             res.sendStatus(500)
//         })
// });


router.get('/:id', (req, res) => {
    console.log(req.params)
    const sqlText = `select option, id from "option" where poll_id=$1`;
    pool.query(sqlText, [req.params.id])
        .then((response) => {
            console.log(`GOT Options data`, response.data)
            console.log(`GOT Options rows at 0`, response.rows[0])

            res.send(response.rows);
        })
        .catch((error) => {
            console.log(`Error getting Options from db`, error);
            res.sendStatus(500); // Good server always responds
        })

});





module.exports = router;