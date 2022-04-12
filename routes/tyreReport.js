const express = require('express');
const router = express.Router();
const Tyre = require('../models/tyreModel');


//This routers renders the tyre report page
router.get('/tyreReport', async(req,res)=>{
    // to pick data from the 
    try {
       
        const data = await Tyre.find({}).sort({$natural:-1});
       
         //The sum aggregate that takes in total revenue but returns individual totals
         let totalRevenue = await Tyre.aggregate([
          {$group:{_id:'$all',
           totalTyre:{ $sum:'$amount'},
           totalPressure:{ $sum:'$tyrepressure'},
           totalPuncture:{ $sum:'$puncture'},
           totalValves:{ $sum:'$valves'},

          }}
          
        ]);
        console.log('This is our collection', totalRevenue);
        res.render('tyreReport', {
          tyres : data,
          total : totalRevenue[0],
          alert: req.query.alert

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