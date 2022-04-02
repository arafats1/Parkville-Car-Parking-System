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

// DELETE USER
router.get('/vehicleReport(:id)', function(req, res, next) {
    userModel.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/vehicleReport');
        } else {
            console.log('Failed to Delete user Details: ' + err);
        }
    });
});


// // Delete post
// router.delete('/:id', function(req, res){
//     let query = {_id: req.params.id};
  
//     Register.remove(query, function(err){
//       if(err) {
//         console.error(err);
//         return;
//       } else {
//         req.flash('success', 'Vehicle Deleted')
//         res.send('Success');
//       }
//     });
//   });

module.exports = router;