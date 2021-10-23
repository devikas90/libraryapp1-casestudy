const express = require('express');
const signupRouter = express.Router();
const userdata = require('../model/userdata')
function router(data) {

    signupRouter.get('/', function (req, res) {
        res.render("signup", {
                 data,
                title: 'Library',
        });
    });
    signupRouter.post('/add', function (req, res) {
        var item = {

            email: req.body.email,
            password: req.body.password,
            number: req.body.number,

        }

        userdata.findOne({ email: item.email }).then(user => {
            if (user) {
                // alert("Email already registered!");
                res.redirect('/signup');
            }
            else {
                var newuser = userdata(item);
                newuser.save();
                // alert("Signup successful!");
                res.redirect('/signin');
            }
        })

    });

    return signupRouter;
}
module.exports = router;