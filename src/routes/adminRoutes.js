const express = require('express');
const adminRouter = express.Router();
const Bookdata = require('../model/Bookdata')

const Authordata = require('../model/Authordata')




function router(data){

    
        adminRouter.get('/',function(req,res){
            res.render("addbooks",{
                data,
                title:'Library',
})
})
adminRouter.post('/books',function(req,res){
  /*  var item={
    title: req.body.title,
    author:req.body.author,
    genre:req.body.genre,
    image:req.body.image
    }
    var book = Bookdata(item);
    book.save();//saving to db
    res.redirect('/books');
    
});
*/
bookdata.find()
.then(function(books){
    res.render('books',{
       data,
       title: 'Library' ,books
       
    })
})
}) 
adminRouter.get('books/:id',function(req,res){
    const id = req.params.id;

    bookdata.findOne({_id:id})
    .then(function(book){
        res.render('updatebook',{
            data,
            title:'Library',
            book
        })
    })
})

adminRouter.get('books/:id/delete',function(req,res,next){
    const id = req.params.id;
    console.log(id); 

    bookdata.findByIdAndRemove(id)
    .then(function(){
        res.redirect('/admin/books')
    })
})
adminRouter.get('/addBooks',function(req,res){
    res.render('addbooks',{
        data,
        title:'Library',
    })
})


return adminRouter;
}
module.exports=router;