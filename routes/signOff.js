const express = require('express');
const router = express.Router();

router.get('/signoff', (req,res) => {
    res.render('signedOffCars')
});

module.exports = router;