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

//Posts vote of 2 to db
router.post('/two', (req, res) => {
    console.log(req.body)
    const sqlText = `INSERT INTO votes ("vote_id", "event_id") 
      VALUES ($1, $2) RETURNING "vote_id"`;
    pool.query(sqlText, [req.body.vote_id, req.body.event_id])
        .then((response) => {
            console.log(`Added vote 2 to the database response is`, response)
            res.sendStatus(201);

        })
        .catch((error) => {
            console.log(`Error POSTING vote 2 to the db`, error);
            res.sendStatus(500); // Good server always responds
        })


});


//Posts vote of 3 to db
router.post('/three', (req, res) => {
    console.log(req.body)
    const sqlText = `INSERT INTO votes ("vote_id", "event_id") 
      VALUES ($1, $2) RETURNING "vote_id"`;
    pool.query(sqlText, [req.body.vote_id, req.body.event_id])
        .then((response) => {
            console.log(`Added vote 3 to the database response is`, response)
            res.sendStatus(201);

        })
        .catch((error) => {
            console.log(`Error POSTING vote 3 to the db`, error);
            res.sendStatus(500); // Good server always responds
        })


});

//Posts vote of 4 to db
router.post('/four', (req, res) => {
    console.log(req.body)
    const sqlText = `INSERT INTO votes ("vote_id", "event_id") 
      VALUES ($1, $2) RETURNING "vote_id"`;
    pool.query(sqlText, [req.body.vote_id, req.body.event_id])
        .then((response) => {
            console.log(`Added vote 4 to the database response is`, response)
            res.sendStatus(201);

        })
        .catch((error) => {
            console.log(`Error POSTING vote 4 to the db`, error);
            res.sendStatus(500); // Good server always responds
        })


});







//Gets votes of 1 from db
router.get('/:id', (req, res) => {
    console.log('in get vote 1 req params id is', req.params.id)
    const sqlText = `select Count (vote_id) from votes where vote_id =1 and event_id =$1;`;
    pool.query(sqlText, [req.params.id])
        .then((response) => {
            console.log(`GOT vote 1`, response.rows)

            res.send(response.rows);
        })
        .catch((error) => {
            console.log(`Error getting vote 1 db`, error);
            res.sendStatus(500); // Good server always responds
        })

});

//Gets votes of 2 from db
router.get('/two/:id', (req, res) => {
    console.log('in get vote 2 req params id is', req.params.id)
    const sqlText = `select Count (vote_id) from votes where vote_id =2 and event_id =$1;`;
    pool.query(sqlText, [req.params.id])
        .then((response) => {
            console.log(`GOT vote 2`, response.rows)

            res.send(response.rows);
        })
        .catch((error) => {
            console.log(`Error getting vote 2 db`, error);
            res.sendStatus(500); // Good server always responds
        })

});


//Gets votes of 3 from db
router.get('/three/:id', (req, res) => {
    console.log('in get vote 3 req params id is', req.params.id)
    const sqlText = `select Count (vote_id) from votes where vote_id =3 and event_id =$1;`;
    pool.query(sqlText, [req.params.id])
        .then((response) => {
            console.log(`GOT vote 3`, response.rows)

            res.send(response.rows);
        })
        .catch((error) => {
            console.log(`Error getting vote 3 db`, error);
            res.sendStatus(500); // Good server always responds
        })

});

//Gets votes of 4 from db
router.get('/four/:id', (req, res) => {
    console.log('in get vote 4 req params id is', req.params.id)
    const sqlText = `select Count (vote_id) from votes where vote_id =4 and event_id =$1;`;
    pool.query(sqlText, [req.params.id])
        .then((response) => {
            console.log(`GOT vote 4`, response.rows)

            res.send(response.rows);
        })
        .catch((error) => {
            console.log(`Error getting vote 4 db`, error);
            res.sendStatus(500); // Good server always responds
        })

});




module.exports = router;