const express = require('express');
const router = express.Router();
const Tyre = require('../models/tyreModel');
const expressValidator = require('express-validator');
router.use(expressValidator());


//The get router renders the tyre page with a form
router.get('/tyre', (req, res) => {
    res.render('tyre');
});

//The router uses method post to submit information to the database
router.post('/tyre', (req, res) => {
  try {

    //Capture the input fields into variables
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
      //Creating an instance of Tyre to store the tyre information
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
        //Saving the data to the database
        newTyre.save((err) => {
            if(err){
                console.error(err);
                return;
            }

            else{
                res.redirect('/tyreReport?alert=success')
            }
        });
    }
    
  } catch (error) {
    res.status(400).render('tyre',{alert:'error'});
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
  
  //This router posts back the updated data to the database
  router.post("/tyreupdate", async (req, res) => {
   
      try {
        await Tyre.findOneAndUpdate({ _id: req.query.id }, req.body)
        res.redirect("/tyreReport");
      
      } catch (error) {
        res.status(400).send("unable to update tyre");
      }
  });
  

// DELETE Tyre Data
router.get('/deleteTyre/:id', async(req, res)=> {
    try{
      await Tyre.findById(req.params.id)
      await Tyre.deleteOne({_id:req.params.id})
      res.redirect('/tyreReport');
  
    }
   
    catch{
          res.status(400).send('Unable to delete Vehicle from database');
      
      
        }
    });
  

module.exports = router;