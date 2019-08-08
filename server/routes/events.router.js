const express = require('express');

const pool = require('../modules/pool');

const router = express.Router();



// //gets all users
// router.get('/', (req, res) => {
//     const sqlText = `select * from "user"`;
//     pool.query(sqlText)
//         .then((response) => {
//             res.send(response.rows)
//         })
//         .catch((error) => {
//             console.log(`error getting guests`, error);
//             res.sendStatus(500)
//         })
// });


//
router.post('/:id', (req, res) => {
    console.log(req.params)
    const sqlText = `INSERT INTO event ("userId") 
      VALUES ($1)`;
    pool.query(sqlText, [req.params.id])
        .then((response) => {
            console.log(`Added event to the database`, response)
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error creating event in db`, error);
            res.sendStatus(500); // Good server always responds
        })

});





module.exports = router;