const express = require('express');
const router = express.Router();

const houseController = require('../controllers/houseController');
//add house page
router.get('/new/:ownersId', houseController.house_new);
router.post('/new/:ownersId', houseController.house_new_post);

module.exports = router;
