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


  
    req.checkBody('vehicle', 'Vehicle type required').notEmpty();
    req.checkBody('numberPlate', 'Number plate required').notEmpty();
    req.checkBody('carModel', 'Car model required').notEmpty();
    req.checkBody('driverName', 'Driver name required').notEmpty();
    req.checkBody('phoneNumber', 'Phone number required').notEmpty();
    req.checkBody('entryDate', 'Entry date required').notEmpty();
    req.checkBody('entryTime', 'Entry time required').notEmpty();
    

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
router.get("/update/:id", async (req, res) => {
  // if (req.session.user) {
    try {
      const updateUser = await Register.findOne({ _id: req.params.id })
      res.render('editVehicle', { register: updateUser })
      // res.json(user);
    } catch (error) {
      res.status(400).send("unable to find the user in the database");
    }
  // } else {
  //   console.log("cant find session");
  //   res.redirect("/");
  // }
});

router.post("/update", async (req, res) => {
  // if (req.session.user) {
    try {
      await Register.findOneAndUpdate({ _id: req.query.id }, req.body)
      res.redirect("/vehicleReport");
      // console.log(_id);
      // res.redirect("back");
    } catch (error) {
      res.status(400).send("unable to update vehicle");
    }
  // } else {
  //   console.log("cant find session");
  //   res.redirect("/login");
  // }
});



//Loading editing form
// router.get('/edit/:id', function(req, res){
//     Register.findById(req.params.id, function(err, newRegister){
//       res.render('editVehicle', {
//         newRegister: newRegister
//       });
//     });
//   });


// // update submit new article 
// router.put('/edit/:id', function(req, res){
//     let newRegister = {};
//     newRegister.drivername = req.body.drivername;
//     newRegister.numberplate = req.body.numberplate;
//     newRegister.parkingtime = req.body.parkingtime;
//     newRegister.carmodel = req.body.carmodel;
//     newRegister.amount = req.body.amount;
    
  
//     let query = {_id: req.params.id};
  
//     Register.update(query, newRegister, function(err){
//       if(err) {
//         console.error(err);
//         return;
//       } else {
//         res.redirect('/vehicleReport');
//       }
//     })
//   });

// Delete post
// router.post('/deleteVehicle', async(req, res)=> {
//   try{
//     //We pick an item using an id
//     const deletedUser =await Register.deleteOne({_id:req.body.id})
//     console.log('This is my deleted user', deletedUser);
//     res.redirect('/vehicleReport');

//   }
//   catch{
//     res.status(400).send('Unable to delete Vehicle from database');


//   }

// });

// DELETE USER
router.get('/deleteVehicle/:id', async(req, res)=> {
  try{
    const register = await Register.findById(req.params.id)
    await Register.deleteOne({_id:req.params.id})
    res.redirect('/vehicleReport');
  }
 
  catch{
        res.status(400).send('Unable to delete Vehicle from database');
      }
  });

  // UPDATE USER
router.post('/editVehicle/:id', async(req, res)=> {
  try{
    await Register.updateOne({_id:req.params.id})
    res.redirect('/vehicleReport');
  }
 
  catch{
        res.status(400).send('Unable to delete Vehicle from database'); 
      }
  });

  
module.exports = router;