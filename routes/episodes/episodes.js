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
    
});

// 에피소드 상세 조회
router.get('/:episodeIdx', async(req, res) => {
    const {episodeIdx} = req.params;
    
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
