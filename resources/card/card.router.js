const express = require('express');
const controllers = require('./card.controller');
const router = express.Router();

router.get('/generateCard', controllers.generateCard)

module.exports = router;