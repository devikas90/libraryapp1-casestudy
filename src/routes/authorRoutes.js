const express = require('express');
const authorsRouter = express.Router();
const Authordata = require('../model/Authordata');
function router(data) {


    // var authors=[
    //     {
    //         title:'Joseph Barbera',
    //         impwork:'Tom n Jerry',
    //         catagory:'Animator',
    //         img:"jbarbera.jpg"
    //     },

    //     {
    //         title:'Charles Dickens',
    //         impwork:'Harry Potter',
    //         catagory:'English Writer',
    //         img:"charlesdick.jpg"
    //     },
    //     {
    //         title:'Muttath Varkey',
    //         impwork:'Phidil',
    //         catagory:'Indian Novelist',
    //         img:"mvarkey.jpg"
    //     },
    // ]



    authorsRouter.get('/', function (req, res) {
        Authordata.find()
            .then(function (authors) {
                res.render("authors", {


                    data, title: 'Library', authors
                })





            })

    })
    authorsRouter.get('/:id', function (req, res) {
        const id = req.params.id;
        Authordata.findOne({ _id: id })
            .then(function (author){
                res.render('author',{

                    data: [{ link: '/books', name: 'Books' }, { link: '/authors', name: 'Authors' }],
                    data, title: 'Library',
                    author

                });
            })
    });
    return authorsRouter;
}
module.exports = router;