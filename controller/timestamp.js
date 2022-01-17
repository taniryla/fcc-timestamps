const Timestamp = require('../models/timestamp');
const app = require('../server');

module.exports = {
    show,
    index
};

let responseObject = {}

function show (req, res) {  
  let date = request.params.date;
  if(date.includes('-')) {
    // Date String
    responseObject['unix'] = new Date(date).getTime();
    responseObject['utc'] = new Date(date).toUTCString();
  } else {
    // Timestamp (working with a String), need to convert to an interger
    date = parseInt(date);
    responseObject['unix'] = new Date(date).getTime(); // get time converts to a unix timestamp
    responseObject['utc'] = new Date(date).toUTCString();
  }
  if(!responseObject['unix'] || !responseObject['utc']) {
    res.json({ error: 'Invalid Date' })
  } 
  res.render('api/timestamp/', { responseObject });
}

function index (req, res) {
  responseObject['unix'] = new Date().getTime();
  responseObject['utc'] = new Date().toUTCString();
  res.render('api/timestamp/', { responseObject });
}

 

