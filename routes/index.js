var express = require('express');
var router = express.Router();

router.use('/auth', require('./auth'));
router.use('/banners', require('./banners'));
router.use('/webtoons', require('./webtoons'));
router.use('/comments', require('./comments'));
router.use('/episodes', require('./episodes'));

module.exports = router;
