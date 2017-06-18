/**
 * Created by USER on 18-Jun-17.
 */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/',express.static(__dirname+"/public_static"));
app.use('/',require('./routes/index'));



app.listen(3000,function () {
    console.log("SERVER UP AND RUNNING");
})