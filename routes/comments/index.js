var express = require('express');
var router = express.Router();

router.use('/', require('./comments'));

module.exports = router;
