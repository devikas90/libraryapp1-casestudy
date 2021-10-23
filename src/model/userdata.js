//ACCESSING MONGOOSE PACKAGE
const mongoose = require('mongoose');
// DATABASE CONNECTION
// mongoose.connect('mongodb+srv://userone:userone@ictakfsd.hnync.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

  mongoose.connect('mongodb://localhost:27017/library');

//SCHEMA DEFINITION
const Schema = mongoose.Schema;


const userSchema = new Schema({
    email : String,
    password :String,
    number : String,
   
});

//MODEL CREATION
var userdata = mongoose.model('userdata',userSchema);
module.exports = userdata;