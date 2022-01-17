var express = require('express');
var router = express.Router();
var timestampCtrl = require('../controller/timestamp');


// all routes starts with "/timestamps"


// show GET /api/timestamp/:input
router.get('/api/:date?', timestampCtrl.show);

// show GET /api/timestamp/

router.get('/api/', timestampCtrl.index);


module.exports = router;
