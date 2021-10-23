const express = require('express');
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');
function router(data){


// var books=[
//     {
//         title:'Tom n Jerry',
//         author:'Joseph Barbera',
//         genre:'Cartoon',
//         img:"book1.jpg"
//     },

//     {
//         title:'Harry Potter',
//         author:'Charles Dickens',
//         genre:'Fantacy',
//         img:"harypotter.jpg"
//     },
//     {
//         title:'Phidil',
//         author:'Muttath Varkey',
//         genre:'travelog',
//         img:"phidil.jpg"
//     },
// ]


booksRouter.get('/',function(req,res){
    Bookdata.find()
    .then(function(books){
       res.render("books",{
          data,
        title:"Library",
        books
    })
     
      })
 })



booksRouter.get('/:id',function(req,res){
    const id=req.params.id;
    Bookdata.findOne({_id: id})
    .then(function(book){
res.render('book',{

    data:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
       data, title:'Library',
        book

});
})
});
return booksRouter;
}
module.exports=router;