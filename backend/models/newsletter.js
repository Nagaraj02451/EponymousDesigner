const mongoose = require('mongoose');
const validator = require('validator');

const newsSchema = new mongoose.Schema({
  
    email:{
        type: String,
        required: [true, 'Please enter email'],
        unique: true,
        validate: [validator.isEmail, 'Please enter valid email address']
    }
})

let model =  mongoose.model('news', newsSchema);


module.exports = model;