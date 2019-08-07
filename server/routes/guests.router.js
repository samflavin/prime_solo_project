const express = require('express');

const pool = require('../modules/pool');

const router = express.Router();



//gets all guests
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

module.exports = router;