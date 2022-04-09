const express = require('express');
const router = express.Router();
const Tyre = require('../models/tyreModel');
const expressValidator = require('express-validator');
router.use(expressValidator());


router.get('/tyre', (req, res) => {
    res.render('tyre');
});

router.post('/tyre', (req, res) => {
    const tyre = req.body.tyre;
    const tyresize = req.body.tyresize;
    const carmodel = req.body.carmodel;
    const amount = req.body.amount;
    const tyrepressure = req.body.tyrepressure;
    const puncture = req.body.puncture;
    const valves = req.body.valves;
    const date = req.body.date;

    let errors = req.validationErrors();
    if(errors){
        res.render('tyre');
    }

    else{

        let newTyre = new Tyre({
            tyre:tyre,
            tyresize: tyresize,
            carmodel: carmodel,
            amount:amount,
            tyrepressure: tyrepressure,
            puncture: puncture,
            valves: valves,
            date: date

        });

        newTyre.save((err) => {
            if(err){
                console.error(err);
                return;
            }

            else{
                res.redirect('/tyreReport')
            }
        });
    }
});

//Editing route
router.get("/tyreupdate/:id", async (req, res) => {
    // if (req.session.user) {
      try {
        const updateTyre = await Tyre.findOne({ _id: req.params.id })
        res.render('editTyre', { tyre: updateTyre })
        // res.json(user);
      } catch (error) {
        res.status(400).send("unable to find the user in the database");
      }
  });
  
  router.post("/tyreupdate", async (req, res) => {
    // if (req.session.user) {
      try {
        await Tyre.findOneAndUpdate({ _id: req.query.id }, req.body)
        res.redirect("/tyreReport");
        // console.log(_id);
        // res.redirect("back");
      } catch (error) {
        res.status(400).send("unable to update tyre");
      }
  });
  

// DELETE Tyre Data
router.get('/deleteTyre/:id', async(req, res)=> {
    try{
      await Tyre.deleteOne({_id:req.params.id})
      res.redirect('/tyreReport');
  
    }
   
    catch{
          res.status(400).send('Unable to delete Vehicle from database');
      
      
        }
    });
  

module.exports = router;