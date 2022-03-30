const express = require('express');
const router = express.Router();

router.get('/tyreReport', (req,res) => {
    res.render('tyreReport')
});

module.exports = router;