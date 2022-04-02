const express = require('express');
const router = express.Router();
const Register = require('../models/registerModel');




router.get('/vehicleReport', async(req,res)=>{
    // to pick data from the database
    try {
        // helps return all the members in the collection clients
        const data = await Register.find({});
        // console.log('>>>>>> all registrations',data);
        // let totalPayprice = await Client.aggregate({totalPayprice:{$sum: '$paidprice'}})
        // gives us the file dash and come with the client data or client has same info with data
        res.render('vehicleReport', {registers : data})
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