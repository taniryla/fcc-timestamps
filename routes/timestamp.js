var express = require('express');
var router = express.Router();
var timestampCtrl = require('../controller/timestamp');


// all routes starts with "/timestamps"


// show GET /api/timestamp/:input
router.get('/api/timestamp/:input', timestampCtrl.show);

// show GET /api/timestamp/

router.get('/api/timestamp/', timestampCtrl.index);


module.exports = router;
