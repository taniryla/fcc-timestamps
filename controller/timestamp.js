const Timestamp = require('../models/timestamp');
const app = require('../server');

module.exports = {
    show,
    index
};

function show (req, res) {  
  let date1;
  if (/^\d+$/.test(req.params.date)) {
    date1 = new Date(parseInt(req.params.date));
  }
  else {
    date1 = new Date(req.params.date);
  }
  
  if (date1.toString() !== 'Invalid Date') {
    res.json({unix: date1.valueOf(), utc: date1.toGMTString()});
  } else {
    res.json({error: "Invalid Date"});
}
}

function index (req, res) {
  res.json( {unix: new Date().getTime() }),
  { utc: new Date().toUTCString() };
}