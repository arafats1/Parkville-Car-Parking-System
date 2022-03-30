const express = require('express');
const router = express.Router();

router.get('/batteryReport', (req,res) => {
    res.render('batteryReport')
});

module.exports = router;