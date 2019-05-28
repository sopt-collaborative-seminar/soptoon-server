var express = require('express');
var router = express.Router();

const upload = require('../../config/multer');
const defaultRes = require('../../module/utils');
const statusCode = require('../../module/statusCode');
const resMessage = require('../../module/responseMessage');
const db = require('../../module/pool');

// 메인화면 베너 이미지 조회
router.get('/', async(req, res) => {
    const getBannersQuery = "SELECT * FROM banner";
    const getBannersResult = await db.queryParam_None(getBannersQuery);

    if (!getBannersResult) {
        res.status(200).send(defaultRes.successFalse(statusCode.DB_ERROR, resMessage.MEMBERSHIP_INSERT_FAIL));
    } else {
        res.status(200).send(defaultRes.successTrue(statusCode.OK, resMessage.MEMBERSHIP_INSERT_SUCCESS, getBannersResult));
    }
});

// 메인화면 베너 이미지 생성
router.post('/',  async(req, res) => {
    // const {img} = req.body;
});

// 메인화면 베너 이미지 수정
router.put('/:bannerIdx',  async(req, res) => {
    const {bannerIdx} = req.params;
});

// 메인화면 베너 이미지 삭제
router.delete('/:bannerIdx',  async(req, res) => {
    const {bannerIdx} = req.params;
});

module.exports = router;
