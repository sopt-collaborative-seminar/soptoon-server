var express = require('express');
var router = express.Router();

router.use('/', require('./auth'));
router.use('/jwtTest', require('./jwtTest'));
router.use('/jwtModule', require('./jwtModule'));

module.exports = router;
