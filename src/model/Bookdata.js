//ACCESSING MONGOOSE PACKAGE
const mongoose = require('mongoose');
// DATABASE CONNECTION
// mongoose.connect('mongodb+srv://userone:userone@ictakfsd.hnync.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');

  mongoose.connect('mongodb://localhost:27017/library');

//SCHEMA DEFINITION
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author :String,
    genre : String,
    image : String
});

//MODEL CREATION
var Bookdata = mongoose.model('bookdata',BookSchema);
module.exports = Bookdata;