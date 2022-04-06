const express = require('express');
const router = express.Router();
const expressValidator = require('express-validator');
const Signoff = require('../models/signoffModel');
router.use(expressValidator());

router.get('/signoff', (req,res) => {
    res.render('signoff');
});


router.post('/signoff', (req,res)=> {
    const name = req.body.name;
    const gender = req.body.gender;
    const usernin = req.body.usernin;
    const phonenumber = req.body.phonenumber;
    const receipt = req.body.receipt;
    const model = req.body.model;
    const date = req.body.date;
    const time = req.body.time;

    let errors = req.validationErrors();
    if(errors){
        res.render('signoff')
    }

    else{
        const newsignOff = new Signoff({
            name: name,
            gender: gender,
            usernin: usernin,
            phonenumber: phonenumber,
            receipt: receipt,
            model: model,
            date: date,
            time: time
        });

        newsignOff.save((err) => {
            if(err){
                console.error(err);
                return;
            }

            else{
                res.redirect('/signoffReport')
            }
        });
    }
});

// DELETE A sign off entry
router.get('/deleteSignoff/:id', async(req, res)=> {
    try{
      await Signoff.deleteOne({_id:req.params.id})
      res.redirect('/signoffReport');
  
    }
   
    catch{
          res.status(400).send('Unable to delete from database');
      
      
        }
    });

module.exports = router;