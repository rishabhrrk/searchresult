require("dotenv").config();
const express = require('express')
const app = express()
const homeRouter = require('./Routes/home')
const db = require('./Utils/db')

async function initialize(){
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", '*'); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });

    app.use(express.json());

    db.connect();
    
    app.use('/', homeRouter);
      
    app.listen(process.env.PORT, () => {
        console.log(`Yes, I am connected!!! at port ${process.env.PORT}`)
    });
}

initialize();