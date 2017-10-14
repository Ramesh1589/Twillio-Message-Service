'use strict'

const twilio = require('twilio'),
      config = require('./config');

let client = new twilio(config.accountSid, config.authToken);



client.messages.create({
  to: ' ',
  from: '+18582017743', 
  body: 'Nodejs + Express'
}, (err, res) => {

  if (err) {
    console.log(`Failed to send SMS: ${err}`);
  } else {
    console.log(`SMS Send Successfully:${res.dateCreated} Id: ${res.sid}`);
  }

});