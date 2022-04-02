const express = require('express');
const router = express.Router();
const Signoff = require('../models/signoffModel');



router.get('/signoffReport', async(req,res) => {
    try{
        const data = await Signoff.find({})
        res.render('signedoffCars', {signoffs: data})
    }

    catch(error){
        return res.status(400).send(
            {
                status: 400,
                message: 'Failed to fetch signoff data',
                error
            }
        );

    }
});

module.exports = router;