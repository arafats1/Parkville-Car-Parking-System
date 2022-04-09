const express = require('express');
const router = express.Router();
const Battery = require('../models/batteryModel');
const expressValidator = require('express-validator');

router.use(expressValidator());

router.get('/battery', (req, res) => {
    res.render('battery');

});

router.post('/battery', (req, res) => {
    const battery = req.body.battery;
    const date = req.body.date;
    const amount = req.body.amount;

    req.checkBody('battery', 'Enter battery size').notEmpty();
    req.checkBody('date', 'Enter date').notEmpty();
    req.checkBody('amount', 'Enter amount').notEmpty();

    let errors = req.validationErrors();
    if(errors){
        res.render('battery')
    }

    else{



    let newBattery = new Battery({
        battery: battery,
        date: date,
        amount: amount
    });

    newBattery.save((err) => {
        if(err) {
            console.error(err);
            return;
        }

        else{
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
        // res.json(user);
      } catch (error) {
        res.status(400).send("unable to find the user in the database");
      }
  });
  
  router.post("/updatebattery", async (req, res) => {
    // if (req.session.user) {
      try {
        await Battery.findOneAndUpdate({ _id: req.query.id }, req.body)
        res.redirect("/batteryReport");
        // console.log(_id);
        // res.redirect("back");
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