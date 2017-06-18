/**
 * Created by USER on 18-Jun-17.
 */
const router = require('express').Router;
const route = router();
const User = require('../db/models').User;
//login route
route.post('/login',function (req,res) {
    User.findOne({
        where:{
            username:req.body.username,
            password:req.body.password
        }
    })
        .then(function (user) {
            if(!user){
                return res.redirect('/login.html');
            }
            res.redirect('/profile');
        })
        .catch(function (err) {
            res.send(err);
        })
});

//signup route
route.post('/signup',function (req,res){
    User.create({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    }).then(function ()  {
        res.redirect('/login.html');
    })

});

//user profile route
route.get('/profile',function(req,res){
    res.send("YOUR PROFILE IS UNDER CONSTRUCTION");
});

//logging out the user
route.post('/logout',function(req,res){

});

module.exports = route;