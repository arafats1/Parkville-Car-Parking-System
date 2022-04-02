const mongoose = require('mongoose');
const signoffSchema = mongoose.Schema({
    name: {
        type:String,
        required:true
    },

    gender: {
        type: String,
        required:true
    },

    usernin: {
        type:String,
        required: true
    },

    phonenumber: {
        type: String,
        required:true
    },

    receipt: {
        type:Number,
        required:true
    },

    model: {
        type: String,
        required:true
    },

    date: {
        type: String,
        required:true
    },

    time:{
        type:String,
        required: true
    }
});

module.exports = mongoose.model('Signoff', signoffSchema);