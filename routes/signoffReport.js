const express = require('express');
const router = express.Router();
const Signoff = require('../models/signoffModel');



router.get('/signoffReport', async(req,res) => {
    try{
        const data = await Signoff.find({}).sort({$natural:-1});

        //The sum aggregate
        let totalSignoff = await Signoff.aggregate([
            {$group:{_id:'$all', totalSignoff:{ $sum: 1}}}
          ]);
        res.render('signedoffCars', {
            signoffs: data,
            total:totalSignoff[0]
        });
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