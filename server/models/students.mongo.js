const mongoose = require('mongoose');

const Student = new mongoose.Schema({
    username:{
        type:String,
        // required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    location:{
        type:Object,
        required:false
    },
    class:{
        type:Number,
        // required:true
    },
    type: {
        type: String,
        required: true,
        default: 'student'
    },
    complete: {
        type: Boolean,
        required: true,
        default: false
    },
    phone: {
        type: Number
    }

});

const studentModel = mongoose.model('Student', Student);

module.exports = studentModel