const express = require('express');
const adminsigninRouter = express.Router();
const userdata = require('../model/userdata')
function router(data) {


    adminsigninRouter.get('/', function (req, res) {
        res.render("signin", {
            data,
            title: 'Admin Signin',

        });
    });
    adminsigninRouter.post('/check', function (req, res) {
        // var items = {
        //     email: req.body.email,
        //     password: req.body.password
        // }

        userdata.findOne({
            email: req.body.email,
            password: req.body.password
        })
            .then(user => {
                if (user) {
                    // alert("Login successful!");
                    res.redirect('/books');
                }
                else {
                    // alert("Email and Password donot match.");
                    res.redirect('/signin')
                }
            })
    });



    return signinRouter;
}

module.exports = router;