const express = require('express');
var bodyParser = require('body-parser')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
var app = express()
const cors = require("cors");
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.set("view engine", "ejs")



app.get("/", (req, res) => {
    
    res.render('index')
})


const connection = require("./config/db");

// Connect to MongoDB database

connection.once('open', () => {
    app.listen(3097, () => {
        console.log("Server has started!")
    })
})
    