const express = require('express');
const router = express.Router();

router.get('/vehicleReport', (req,res) => {
    res.render('vehicleReport');
});

module.exports = router;