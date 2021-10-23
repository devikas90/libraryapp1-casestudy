const express = require('express');
const app = express();
const port = process.env.PORT||3000;


const data= [
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/signin',name:'Sign In'
    },
    {
        link:'/signup',name:'Sign Up'
    },
    {
        link:'/admin',name:'Add Books'
    },
    {
        link:'/addauthors',name:'Add Authors'
    },
    {
        link:'/index',name:'Sign Out'
    },
    {
        link:'/signin',name:'Admin Login'
    }
];


const booksRouter = require('./src/routes/bookRoutes')(data)
const authorsRouter = require('./src/routes/authorRoutes')(data)
const signinRouter=require('./src/routes/signinRoutes')(data)
const usersigninRouter=require('./src/routes/signinRoutes')(data)
const signupRouter=require('./src/routes/signupRoutes')(data)
const addbookRouter=require('./src/routes/addbookRouter')(data)
const addauthorRouter=require('./src/routes/addauthorRouter')(data)
const adminRouter = require('./src/routes/adminRoutes')(data)




app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/signin',signinRouter);
app.use('/signup',signupRouter);
app.use('/addbooks',addbookRouter);
app.use('/addauthors',addauthorRouter);
app.use('/admin',adminRouter);
app.use('/usersignin',usersigninRouter)


app.get('/',function(req,res){
    res.render("index",   
     {
        data,
        title:'Library'
        
    });
});



app.listen(port,()=>{console.log("Server ready at" + port)});