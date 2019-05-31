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
    
    const getCommentsQuery = "SELECT * FROM comment WHERE episode_idx = ?";
    const getCommentsResult = await db.queryParam_Parse(getCommentsQuery, [episodeIdx]);

    if (!getCommentsResult) {
        res.status(200).send(defaultRes.successFalse(statusCode.INTERNAL_SERVER_ERROR, resMessage.COMMENT_SELECT_ERROR));
    } else {
        res.status(200).send(defaultRes.successTrue(statusCode.OK, resMessage.COMMENT_SELECT_SUCCESS, getCommentsResult));
    }
});

// 댓글 작성
router.post('/', upload.single('img'), (req, res) => {
    const {episodeIdx, userIdx, comment} = req.body;
    const imgUrl = req.file.location;
    const params = [episodeIdx, userIdx, comment, imgUrl];
    
    const getEpisodeQuery = "SELECT * FROM episode WHERE episode_idx = ?";
    const getEpisodeResult = db.queryParam_Parse(getEpisodeQuery, [episodeIdx]);

    getEpisodeResult.then(()=>{
        if(!getEpisodeResult || getEpisodeResult.length < 1){
            res.status(200).send(defaultRes.successFalse(statusCode.BAD_REQUEST, resMessage.EPISODE_SELECT_NOTHING + `: ${episodeIdx}`));
        }
    
        const postCommentsQuery = "INSERT INTO comment(episode_idx, user_idx, comment, img_url) VALUES(?, ?, ?, ?)";
        const postCommentsResult = db.queryParam_Parse(postCommentsQuery, params, function(result){
            if (!result) {
                res.status(200).send(defaultRes.successFalse(statusCode.INTERNAL_SERVER_ERROR, resMessage.COMMENT_INSERT_ERROR));
            } else {
                res.status(201).send(defaultRes.successTrue(statusCode.OK, resMessage.COMMENT_INSERT_SUCCESS));
            }
        });
    });
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
