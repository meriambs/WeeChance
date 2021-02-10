const express = require('express');
const multipart = require('connect-multiparty')
const router = express.Router();
const videoController = require('../controllers/videos');
const multipartMiddleware = multipart()

router.get('/videos/:jobOffer', videoController.getAll);
router.get('/:id', videoController.streamVideo)

module.exports = router;