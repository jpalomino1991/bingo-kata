const express = require('express');
const controllers = require('./player.controller');
const router = express.Router();

router.get('/generateCard', controllers.checkPlayerCard)

module.exports = router;