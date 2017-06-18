/**
 * Created by USER on 18-Jun-17.
 */
const express = require('express');
const app = express();

app.use('/',express.static(__dirname+"/public_static"));



app.listen(3000,function () {
    console.log("SERVER UP AND RUNNING");
})