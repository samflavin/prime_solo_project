const express = require('express');

const pool = require('../modules/pool');

const router = express.Router();

//Posts messages to the chat board
router.post('/', (req, res) => {
    console.log(req.body)
    const sqlText = `INSERT INTO messages ("user_id", "messages", "event_id" "entry_date") 
      VALUES ($1, $2, $3, $4) RETURNING id`;
    pool.query(sqlText, [req.body.user_id, req.body.msg, req.body.event_id, 'TIMESTAMP'])
        .then((response) => {
            console.log(`Added Message to the database`, response.rows[0])
            res.send(response.rows[0]);
        })
        .catch((error) => {
            console.log(`Error POSTING message to the db`, error);
            res.sendStatus(500); // Good server always responds
        })


});

// //Gets Event names for user
// router.get('/list/:id', (req, res) => {
//     console.log(req.params)
//     const sqlText = `select (event_name), id from event where user_id =$1`;
//     pool.query(sqlText, [req.params.id])
//         .then((response) => {
//             console.log(`GOT Event List for user`, response.rows)

//             res.send(response.rows);
//         })
//         .catch((error) => {
//             console.log(`Error getting Event List from db`, error);
//             res.sendStatus(500); // Good server always responds
//         })

// });



module.exports = router;