const express = require('express');
const router = express.Router();
const Tyre = require('../models/tyreModel');


router.get('/tyreReport', async(req,res)=>{
    // to pick data from the 
    try {
        // helps return all the members in the collection clients
        const data = await Tyre.find({});
        // console.log('>>>>>> all tyres',data);

        res.render('tyreReport', {tyres : data})
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