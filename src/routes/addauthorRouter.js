const express = require('express');
const addauthorRouter = express.Router();
const Authordata = require('../model/Authordata')
var multer = require('multer')
//image upload
const storage = multer.diskStorage({
    destination: function (request, file, callback) {
        callback(null, './public/images');
    },
    filename: function (request, file, callback) {
        callback(null, file.originalname);
    }
});

const upload = multer({
    storage: storage
});

function router(data){

        addauthorRouter.get('/',function(req,res){
            res.render("addauthors",{
                data,
                title:'Library',
});
});




addauthorRouter.post('/add', upload.single("image"), function (req, res) {
    // console.log(req.file)
    var item = {
        title: req.body.title,   //in get method we use query instead of body
        author: req.body.author,
        genre: req.body.genre,
        image: req.file.filename,
    }
    var author = Authordata(item);
    author.save(); //save to db
    res.redirect('/authors');

});


return addauthorRouter;
}
module.exports=router;