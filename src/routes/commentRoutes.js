const express = require('express');
const router = express.Router();

const commentsController = require('../controllers/commentsController');
//add comments page
router.get('/new/:postId', commentsController.new_comment);
router.post('/new/:postId', commentsController.new_comment_post);

module.exports = router;
