const express = require('express');

const pool = require('../modules/pool');

require('dotenv').config();

const router = express.Router();
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
console.log(accountSid);
console.log(authToken)


//Post event and return id
router.get('/', (req, res) => {
console.log('in send text')
            client.messages
                .create({
                    body: 'Hey youve been invited to an event on MakePlans app!  Login here http://localhost:3000/#/home to see youre invitation!',
                    from: '+12055499527',
                    to: '+16125018776'
                })
                .then(message => console.log(message.sid));
       
});








module.exports = router;