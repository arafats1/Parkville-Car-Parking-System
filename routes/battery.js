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

module.exports = router;