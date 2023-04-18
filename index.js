const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const passport = require('passport');
const flash = require('connect-flash');
const cors = require('cors')
const expressSession = require('express-session')({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
  });

//Defining variables, routes and models
const config = require('./config/database');
const loginPage = require('./routes/loginPage');
const vehicleRegister = require('./routes/vehicleRegist');
const userRegister = require('./routes/register');
const UserRegister = require('./models/userRegist_model');
const homepage = require('./routes/homepage');
const batteryRoute = require('./routes/battery');
const tyreRouter = require('./routes/tyre');
const vehicleReport = require('./routes/vehicleReport');
const signOffReport = require('./routes/signoffReport');
const signoff = require('./routes/signoff');
const batteryReport = require('./routes/batteryReport');
const tyreReport = require('./routes/tyreReport');
const application = express();

//Establishing connection to the database
mongoose.connect(config.database);
const db = mongoose.connection;

//Testing the connection to the database
db.once('open', () => {
    console.log('Successfully connected to the Database');
});

db.on('error', (err) => {
    console.error(err);
});

//Setting the view engine
application.engine('pug', require('pug').__express);
application.set('view engine', 'pug');
application.set('views', path.join(__dirname, 'views') );


//Body parser middle-ware section
application.use(express.urlencoded({extended:false}));
application.use(express.json());
application.use(express.static(path.join(__dirname, "public")));


//These are login methods
application.use(expressSession);
application.use(passport.initialize()); 
application.use(passport.session()); 
application.use(cors());
application.use(flash());

passport.use(UserRegister.createStrategy());
passport.serializeUser(UserRegister.serializeUser()); //This generates a serial number to the user who has logged in
passport.deserializeUser(UserRegister.deserializeUser()); //This terminates the serial number after user logs out

//Routes section
application.use('/', loginPage);
application.use('/', vehicleRegister);
application.use('/', userRegister);
application.use('/', homepage);
application.use('/', batteryRoute);
application.use('/', tyreRouter);
application.use('/', vehicleReport);
application.use('/', signOffReport);
application.use('/', signoff)
application.use('/', batteryReport)
application.use('/', tyreReport);

//Thss is a message just incase a user hits unexistent router instead of crushing
application.get('*', (req, res) => {
    res.status(404).send('This is an invalid URL')
  }); 

//Establishing a port to a connection to the database
application.listen(4000, () => {
    console.log('Listening at port 4000');
});

