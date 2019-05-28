var express = require('express');
var router = express.Router();

const upload = require('../../config/multer');
const defaultRes = require('../../module/utils');
const statusCode = require('../../module/statusCode');
const resMessage = require('../../module/responseMessage');
const encrypt = require('../../module/encrypt');
const db = require('../../module/pool');
const moment = require('moment');

const FLAG_WEBTOON_POPULAR = 1;
const FLAG_WEBTOON_NEW = 2;
const FLAG_WEBTOON_FINISHED = 3;

// 인기(1), 신작(2), 완결(3) 웹툰 조회
router.get('/main/:flag', async (req, res) => {
    const flag = Number(req.params.flag);

    let getWebtoonQuery;
    if (flag === FLAG_WEBTOON_POPULAR) { // 인기 웹툰
        getWebtoonQuery = "SELECT * FROM webtoon WHERE is_finished = 0 ORDER BY likes DESC";
    } else if (flag === FLAG_WEBTOON_NEW) { // 신작 웹툰
        getWebtoonQuery = "SELECT * FROM webtoon WHERE is_finished = 0 ORDER BY webtoon_idx DESC";
    } else { // 완결 웹툰
        getWebtoonQuery = "SELECT * FROM webtoon WHERE is_finished = 1 ORDER BY likes DESC";
    }
    const getWebtoonResult = await db.queryParam_None(getWebtoonQuery);

    //쿼리문의 결과가 실패이면 null을 반환한다
    if (!getWebtoonResult) { //쿼리문이 실패했을 때
        res.status(200).send(defaultRes.successFalse(statusCode.DB_ERROR, resMessage.BOARD_SELECT_FAIL));
    } else { //쿼리문이 성공했을 때
        res.status(200).send(defaultRes.successTrue(statusCode.OK, resMessage.BOARD_SELECT_SUCCESS, getWebtoonResult));
    }
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
    
    const deleteWebtoonQuery = "DELETE FROM webtoon WHERE webtoon_idx = ?";
    console.log(deleteWebtoonQuery);
    const deleteWebtoonResult = await db.queryParam_Parse(deleteWebtoonQuery, [webtoonIdx]);

    if (!deleteWebtoonResult) {
        res.status(200).send(defaultRes.successFalse(statusCode.DB_ERROR, resMessage.BOARD_DELETE_FAIL));
    } else {
        res.status(201).send(defaultRes.successTrue(statusCode.OK, resMessage.BOARD_DELETE_SUCCESS));
    }
});


// 좋아요 여부 조회
router.get('/:webtoonIdx/like/:userIdx', async(req, res) => {
    const {webtoonIdx, userIdx} = req.params;
    const params = [userIdx, webtoonIdx];
    
    const getIsLikedQuery = "SELECT COUNT(*) AS isExist FROM `like` WHERE user_idx = ? AND webtoon_idx = ?";
    const getIsLikedResult = await db.queryParam_Parse(getIsLikedQuery, params);

    if (!getIsLikedResult) {
        res.status(200).send(defaultRes.successFalse(statusCode.DB_ERROR, resMessage.MEMBERSHIP_INSERT_FAIL));
    } else {
        const isExist = getIsLikedResult[0].isExist == 1 ? true : false;
        res.status(201).send(defaultRes.successTrue(statusCode.OK, resMessage.MEMBERSHIP_INSERT_SUCCESS, isExist));
    }
});

// 좋아요
router.post('/like',  async(req, res) => {
    const {webtoonIdx, userIdx} = req.body;
    const params = [userIdx, webtoonIdx];
    
    const postLikeQuery = "INSERT INTO `like`(user_idx, webtoon_idx) VALUES(?, ?)";
    const postLikeResult = await db.queryParam_Parse(postLikeQuery, params);

    if (!postLikeResult) {
        res.status(200).send(defaultRes.successFalse(statusCode.DB_ERROR, resMessage.MEMBERSHIP_INSERT_FAIL));
    } else {
        res.status(201).send(defaultRes.successTrue(statusCode.OK, resMessage.MEMBERSHIP_INSERT_SUCCESS));
    }
});

// 좋아요 취소
router.delete('/:webtoonIdx/like/:userIdx',  async(req, res) => {
    const {webtoonIdx, userIdx} = req.params;
    const params = [userIdx, webtoonIdx];
    
    const deleteLikeQuery = "DELETE FROM `like` WHERE user_idx = ? AND webtoon_idx = ?";
    console.log(deleteLikeQuery);
    const deleteLikeResult = await db.queryParam_Parse(deleteLikeQuery, params);

    if (!deleteLikeResult) {
        res.status(200).send(defaultRes.successFalse(statusCode.DB_ERROR, resMessage.BOARD_DELETE_FAIL));
    } else {
        res.status(201).send(defaultRes.successTrue(statusCode.OK, resMessage.BOARD_DELETE_SUCCESS));
    }
});

module.exports = router;
