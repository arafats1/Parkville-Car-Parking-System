const express = require('express');
const router = express.Router();
const Battery = require('../models/batteryModel');



router.get('/batteryReport', async(req,res)=>{
    // to pick data from the 
    try {
        // helps return all the members in the collection clients
        const data = await Battery.find({}).sort({$natural:-1});
       
         //The sum aggregate
         let totalBattery = await Battery.aggregate([
          {$group:{_id:'$all', totalBattery:{ $sum:'$amount'}}}
        ]);
        res.render('batteryReport', {
          batteries : data,
          total:totalBattery[0]

        })
      } catch(error) {
        return res.status(400).send(
          { 
            status: 400,
            message: 'Oops failed to fetch all registrations',
            error
          });
    }
});

module.exports = router;