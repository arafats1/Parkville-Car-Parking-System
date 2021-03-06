const express = require('express');
const router = express.Router();
const passport = require('passport');
const expressValidator = require('express-validator');
const Register = require('../models/registerModel');

router.use(expressValidator());

router.get('/vehicleReg', (req,res) => {
    res.render('vehicleRegist');
});

router.post('/vehicleRegister', (req, res) => {
    //const data = req.body;

    
    const vehicle = req.body.vehicle;
    const numberPlate = req.body.numberPlate;
    const carModel = req.body.carModel;
    const carColor = req.body.carColor;
    const driverName = req.body.driverName;
    const driverNin = req.body.driverNin;
    const phoneNumber = req.body.phoneNumber;
    const entryDate = req.body.entryDate;
    const entryTime = req.body.entryTime;
    const parkingtime = req.body.parkingtime;
    const amount = req.body.amount;


    //Incase there are errors
    let errors = req.validationErrors();
    if(errors){
        res.render('vehicleRegist');
    }

    else{
        //let newRegister = new Register(req.body)

        let newRegister = new Register({
            vehicle: vehicle,
            numberplate: numberPlate,
            carmodel: carModel,
            carcolor: carColor,
            drivername: driverName,
            drivernin: driverNin,
            phonenumber: phoneNumber,
            entrydate: entryDate,
            entrytime: entryTime,
            parkingtime: parkingtime,
            amount: amount
        });
        

        newRegister.save((err) => {
            if(err){
                console.error(err);
                return; 
            }
            
            else{  
                console.log('Information posted');
                res.redirect('/vehicleReport')            
            }
        });
    }
});

//Editing route
//The get method renders the edit page with retrieved data
router.get("/update/:id", async (req, res) => {
    try {
      
      const updateUser = await Register.findOne({ _id: req.params.id })
      res.render('editVehicle', { register: updateUser })
     
      //If it fails catch an error
    } catch (error) {
      res.status(400).send("unable to find the user in the database");
    }
});

//This route posts back the edited data
router.post("/update", async (req, res) => {

    try {
      await Register.findOneAndUpdate({ _id: req.query.id }, req.body)
      res.redirect("/vehicleReport");
   
    } catch (error) {
      res.status(400).send("unable to update vehicle");
    }
});



// DELETE USER
router.get('/deleteVehicle/:id', async(req, res)=> {
  try{
    await Register.deleteOne({_id:req.params.id})
    res.redirect('/vehicleReport');
  }
 
  catch{
        res.status(400).send('Unable to delete Vehicle from database');
      }
  });

  
module.exports = router;