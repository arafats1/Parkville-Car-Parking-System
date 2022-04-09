const express = require('express');
const router = express.Router();
const Register = require('../models/registerModel');




router.get('/vehicleReport', async(req,res)=>{
    // to pick data from the database
    try {
        // helps return all the members in the collection clients
        const data = await Register.find({}).sort({$natural:-1});

        //The sum aggregate
        let totalParking = await Register.aggregate([
          {$group:{_id:'$all', totalParking:{ $sum:'$amount'}}}
        ]);
        
        res.render('vehicleReport', { 
          registers : data,
          total:totalParking[0]
        });
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