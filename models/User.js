const mongoose = require('mongoose');

const User = new mongoose.Schema({
    //personal informations
    //
    firstName: {type:String, trim:true,default:''},
    lastName:{type:String, trim:true,default:''},
    Password:{type:String, trim:true,default:''},
    Phone:{type:Number, trim:true,default:0},
    age:{type:Number, trim:true,default:0},
    gender: {type:String,  trim:true,default:''} 

})

module.exports = mongoose.model('User',User)