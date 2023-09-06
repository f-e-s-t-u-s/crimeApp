const express = require('express');
const { sendHotlines } = require('../controllers/sendHotlines');

// send hotline details to frontenf
const hotlines = express.Router();
hotlines.get("/api/v1/hotlines", sendHotlines);

module.exports ={hotlines};