const express = require('express');
const controllers = require('./bingo.controller');
const router = express.Router();

router.get('/getnumber', controllers.getNumber)

module.exports = router;