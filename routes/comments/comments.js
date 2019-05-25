var express = require('express');
var router = express.Router();

const upload = require('../../config/multer');
const defaultRes = require('../../module/utils');
const statusCode = require('../../module/statusCode');
const resMessage = require('../../module/responseMessage');
const db = require('../../module/pool');

// 특정 에피소드의 댓글 조회
router.get('/:episodeIdx', async(req, res) => {
    const {episodeIdx} = req.params;
    
});

// 댓글 생성
router.post('/',  async(req, res) => {
    const {episodeIdx, userIdx, comment} = req.body;
    // const img;
});

// 댓글 수정
router.put('/:commentIdx',  async(req, res) => {
    const {commentIdx} = req.params;
    const {userIdx, comment} = req.body;
    // const img;
});

// 댓글 삭제
router.delete('/:commentIdx',  async(req, res) => {
    const {commentIdx} = req.params;
});

module.exports = router;
