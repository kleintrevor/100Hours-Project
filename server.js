const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
// const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require('morgan');
const connectDB = require('./config/database');
const mainRoutes = require('./routes/main');
const pulseCheckRoutes = require('./routes/pulseCheck');
const feedRoutes = require('./routes/feed');
const { response } = require('express');

require('dotenv').config({ path: './config/.env' });

// let db, 
// shorten up variables so less typing (empty)
//     dbConnectionStr = process.env.DB_STRING,  
// look here for the environmental variable connection string
//     dbName = 'MoD' 
// variable assignment

// MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true }) 
// connect to the database using string above
// // unifiedTopology - opt in for a new verison of MongoDB connection (stays active), better performance
// .then(client => {  
// after connecting then do: (function)
//     console.log(`Connected to ${dbName} Database`) 
// let us know we connected correctly
//     db = client.db(dbName)  
// assign the db variable from line 8
// })

// Passport config
require('./config/passport')(passport);

connectDB();


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));


//Use forms for put / delete
app.use(methodOverride("_method"));

// Sessions
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_STRING, }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());
app.use(fileUpload());

app.use('/', mainRoutes);
app.use('/pulseCheck', pulseCheckRoutes);
app.use('/feed', feedRoutes);


app.listen(process.env.PORT, () => {
  console.log('Server is running, you better catch it!');
});
