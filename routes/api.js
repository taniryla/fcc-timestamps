var express = require('express');
var router = express.Router();
var timestampCtrl = require('../controller/timestamp');

// everything starts at /api

// show GET /api/:date?
router.get('/:date?', timestampCtrl.show);

// show GET /api/

router.get('/', timestampCtrl.index);


module.exports = router;
