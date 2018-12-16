const mongoose = require('mongoose');

const Driver = new mongoose.Schema({
    
    firstName: {type:String, trim:true,default:''},
    lastName:{type:String, trim:true,default:''},
    Password:{type:String, trim:true,default:''},
    Phone:{type:Number, trim:true,default:0},
    age:{type:Number, trim:true,default:0},
    gender: {type:String,  trim:true,default:''},

    car_modele:{type:String, trim:true,default:''},
    car_color:{type:String, trim:true,default:''},
    car_seats:{type:String, trim:true,default:''},
    car_air_conditioning:{type:Boolean,default:false},

    preferred_gender:{type:String, trim:true,default:''},
    min_age:{type:Number, trim:true,default:0},
    food_allowed: {type:Boolean,default:false},
    smoking_allowed: {type:Boolean,default:false},
    music_allowed: {type:Boolean,default:false},

    date:{type:String, trim:true,default:''},
    price:{type:Number, trim:true,default:''},
    start_point:{type:String, trim:true,default:''},
    end_point:{type:String, trim:true,default:''},
    start_time:{type:String, trim:true,default:''},
    marge:{type:Number, trim:true,default:''},
    available_seat:{type:String, trim:true,default:''},

})

module.exports = mongoose.model('Driver',Driver)