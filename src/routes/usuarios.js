const express = require('express');
const router = express.Router();

const db = require('../database');


router.get('/add', (req, res) => {
    res.send('./add');
});

module.exports = router;
