const Timestamp = require('../models/timestamp');
const app = require('../server');

module.exports = {
    show,
    index
};

let responseObject = {}

function show (req, res) {  
  let input = request.params.input;
  if(input.includes('-')) {
    // Date String
    responseObject['unix'] = new Date(input).getTime();
    responseObject['utc'] = new Date(input).toUTCSString();
  } else {
    // Timestamp (working with a String), need to convert to an interger
    input = parseInt(input);
    responseObject['unix'] = new Date(input).getTime(); // get time converts to a unix timestamp
    responseObject['utc'] = new Date(input).toUTCSString();
  }
  if(!responseObject['unix'] || !responseObject['utc']) {
    res.json({ error: 'Invalid Date' })
  } 
  res.render('api/timestamp/', { responseObject });
}

function index (req, res) {
  responseObject['unix'] = new Date().getTime();
  responseObject['utc'] = new Date().toUTCSString();
  res.render('api/timestamp/', { responseObject });
}

 

