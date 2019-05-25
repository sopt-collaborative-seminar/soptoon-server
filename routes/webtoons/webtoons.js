var express = require('express');
var router = express.Router();

const upload = require('../../config/multer');
const defaultRes = require('../../module/utils');
const statusCode = require('../../module/statusCode');
const resMessage = require('../../module/responseMessage');
const encrypt = require('../../module/encrypt');
const db = require('../../module/pool');
const moment = require('moment');

// 인기(1), 신작(2), 완결(3) 웹툰 조회
router.get('/main/:flag', async(req, res) => {
    const {flag} = req.params;

});

// 웹툰 생성
router.post('/',  async(req, res) => {
    const {name, title} = req.body;
    // const thumbnail =
});

// 웹툰 수정
router.put('/:webtoonIdx', async (req, res) => {
    const {webtoonIdx} = req.params;
    const {name, title} = req.body;
    // const thumbnail =
});

// 웹툰 삭제
router.delete('/:webtoonIdx',  async(req, res) => {
    const {webtoonIdx} = req.params;
});


// 좋아요 여부 조회
router.get('/webtoons/:webtoonIdx/like/:userIdx', async(req, res) => {
    const {webtoonIdx, userIdx} = req.params;

});

// 좋아요
router.post('/like',  async(req, res) => {
    const {webtoonIdx, userIdx} = req.body;
});

// 좋아요 취소
router.delete('/like',  async(req, res) => {
    const {webtoonIdx, userIdx} = req.body;
});

module.exports = router;
