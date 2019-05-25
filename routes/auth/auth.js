var express = require('express');
var router = express.Router();

const upload = require('../../config/multer');
const defaultRes = require('../../module/utils');
const statusCode = require('../../module/statusCode');
const resMessage = require('../../module/responseMessage');
const encrypt = require('../../module/encrypt');
const db = require('../../module/pool');
const moment = require('moment');

router.post('/signin', async(req, res) => {
    const {id, name, password} = req.body;
    
});

router.post('/signup', async(req, res) => {
    const {id, password} = req.body;

});

module.exports = router;