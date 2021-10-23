const express = require('express');
const signinRouter = express.Router();
const userdata = require('../model/userdata')
function router(data) {


    signinRouter.get('/', function (req, res) {
        res.render("usersignin", {
            data,
            title: 'User Signin',

        });
    });
    signinRouter.post('/check', function (req, res) {
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
                    res.redirect('/usersignin')
                }
            })
    });



    return signinRouter;
}

module.exports = router;