const express = require('express');
const router = express.Router();
const Battery = require('../models/batteryModel');
const expressValidator = require('express-validator');


//Rendering the battery form to the user
router.use(expressValidator());

router.get('/battery', (req, res) => {
    res.render('battery');

});


//Posting data to the database with the form using action=/battery
router.post('/battery', (req, res) => {
    const battery = req.body.battery;
    const date = req.body.date;
    const amount = req.body.amount;

    //Definig errors when trying to post
    let errors = req.validationErrors();
    if(errors){
        res.render('battery')
    }

    else{

      //Creating an instance of Battery that will hold the properties and capture values
    let newBattery = new Battery({
        battery: battery,
        date: date,
        amount: amount
    });

    //Saving the posted data
    newBattery.save((err) => {
        if(err) {
            console.error(err);
            return;
        }

        else{

      //After sucessfully saving, redirect to the report page
            res.redirect('/batteryReport')

        }
    });

}

});

// Editing Batteries
router.get("/updatebattery/:id", async (req, res) => {
    // if (req.session.user) {
      try {
        const updateBattery = await Battery.findOne({ _id: req.params.id })
        res.render('batteryedit', { battery: updateBattery })
      } catch (error) {
        res.status(400).send("unable to find the user in the database");
      }
  });
  
  //After updating, the following method posts the changes to the database
  router.post("/updatebattery", async (req, res) => {
      try {
        await Battery.findOneAndUpdate({ _id: req.query.id }, req.body)
        res.redirect("/batteryReport");
       
      } catch (error) {
        res.status(400).send("unable to update vehicle");
      }
  });

// DELETE Battery
router.get('/deleteBattery/:id', async(req, res)=> {
    try{
      await Battery.deleteOne({_id:req.params.id})
      
      res.redirect('/batteryReport');
  
  
    }
   
    catch{
          res.status(400).send('Unable to delete from database');
      
      
        }
    });

module.exports = router;