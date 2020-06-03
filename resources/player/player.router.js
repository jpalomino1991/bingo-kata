const express = require('express');
const controllers = require('./player.controller');
const router = express.Router();

router.get('/checkplayer', controllers.checkPlayerCard)

module.exports = router;