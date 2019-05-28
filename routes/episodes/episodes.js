var express = require('express');
var router = express.Router();

const upload = require('../../config/multer');
const defaultRes = require('../../module/utils');
const statusCode = require('../../module/statusCode');
const resMessage = require('../../module/responseMessage');
const db = require('../../module/pool');

// 에피소드 리스트 조회
router.get('/webtoon/:webtoonIdx', async(req, res) => {
    const {webtoonIdx} = req.params;
    
    const getEpisodeQuery = "SELECT * FROM episode WHERE webtoon_idx = ?";
    const getEpisodeResult = await db.queryParam_Parse(getEpisodeQuery, [webtoonIdx]);

    if (!getEpisodeResult) {
        res.status(200).send(defaultRes.successFalse(statusCode.DB_ERROR, resMessage.BOARD_SELECT_FAIL));
    } else {
        res.status(200).send(defaultRes.successTrue(statusCode.OK, resMessage.BOARD_SELECT_SUCCESS, getEpisodeResult));
    }
});

// 에피소드 상세 조회
router.get('/:episodeIdx', async(req, res) => {
    const {episodeIdx} = req.params;

    let result;
    
    const getEpisodeQuery = "SELECT * FROM episode WHERE episode_idx = ?";
    const getEpisodeResult = await db.queryParam_Parse(getEpisodeQuery, [episodeIdx]);
    result = getEpisodeResult;

    const getCutsQuery = "SELECT img_url FROM cut WHERE episode_idx = ?";
    const getCutsResult = await db.queryParam_Parse(getCutsQuery, [episodeIdx]);
    
    if (!getEpisodeResult) {
        res.status(200).send(defaultRes.successFalse(statusCode.DB_ERROR, resMessage.BOARD_SELECT_FAIL));
    } else {
        if(result.length > 0){
            result[0].cuts = getCutsResult.map(e => e.img_url);
            res.status(200).send(defaultRes.successTrue(statusCode.OK, resMessage.BOARD_SELECT_SUCCESS, result[0]));
        }else{ // 존재하지 않음
            res.status(200).send(defaultRes.successTrue(statusCode.OK, resMessage.BOARD_SELECT_SUCCESS));
        }
    }
});

// 에피소드 생성
router.post('/',  async(req, res) => {
    const {webtoonIdx, title, img, comment} = req.body;
    // const img;
});

// 에피소드 수정
router.put('/:episodeIdx',  async(req, res) => {
    const {episodeIdx} = req.params;
    const {title} = req.body;
    // const img;
});

// 에피소드 삭제
router.delete('/:episodeIdx',  async(req, res) => {
    const {episodeIdx} = req.params;
});

module.exports = router;
