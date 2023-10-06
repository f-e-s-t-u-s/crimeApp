const express = require('express');
const { sendHotlines, addNewHotline } = require('../controllers/sendHotlines');

// send hotline details to frontenf
const hotlines = express.Router();
hotlines.get("/api/v1/hotlines", sendHotlines);

const addHotline = express.Router();
addHotline.post("/api/v1/add-hotlines",addNewHotline );


module.exports ={hotlines, addHotline};