const express = require('express');
const { handleNewCrime } = require('../controllers/reportController');

// handle new crime
const report = express.Router();
report.post("/api/v1/report", handleNewCrime);
module.exports ={report}