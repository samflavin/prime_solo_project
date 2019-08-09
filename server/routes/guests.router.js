const express = require('express');

const pool = require('../modules/pool');

const router = express.Router();



//gets all users
router.get('/', (req, res) => {
    const sqlText = `select * from "user"`;
    pool.query(sqlText)
        .then((response) => {
            res.send(response.rows)
        })
        .catch((error) => {
            console.log(`error getting guests`, error);
            res.sendStatus(500)
        })
});


//
router.post('/:id', (req, res) => {
    const sqlText = `INSERT INTO invitees ("user_id", "event_id")
      VALUES ($1, $2)`;
        pool.query(sqlText, [req.params.id, req.body.eventId])
            .then((response) => {
                console.log(`Added guest to the database`, response)
                res.sendStatus(201);
            })
            .catch((error) => {
                console.log(`Error making database query ${sqlText}`, error);
                res.sendStatus(500); // Good server always responds
            })
        
    });

router.delete('/:id', (req, res) => {
    console.log(req.params)
    const sqlText = `DELETE FROM invitees WHERE 
      user_id = $1`;
    pool.query(sqlText, [req.params.id])
        .then((response) => {
            console.log(`removed invitee database`, response)
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error  ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })

});

router.get('/invitees', (req, res) => {
    const sqlText = `select user_id from invitees`;
    pool.query(sqlText)
        .then((response) => {
            console.log(response.rows)
            res.send(response.rows)
        })
        .catch((error) => {
            console.log(`error getting guests`, error);
            res.sendStatus(500)
        })
});


    
  
   



module.exports = router;