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
console.log(req.params)
    const sqlText = `INSERT INTO invitees ("user_id") 
      VALUES ($1)`;
        pool.query(sqlText, [req.params.id])
            .then((response) => {
                console.log(`Added guestto the database`, response)
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
            console.log(`Error uninviting guest`, error);
            res.sendStatus(500); // Good server always responds
        })

});


    
  
   



module.exports = router;