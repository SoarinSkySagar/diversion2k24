const mongoose = require('mongoose');

const Teacher = new mongoose.Schema({
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
    rating:{
        type:Number,
        required:false
    },
    max_qualification:{
        type:String,
        default:"none",
        required:false
    },
    class_subject:{
        type:Object,
        required:false
    },
    type: {
        type: String,
        required: true,
        default: 'teacher'
    },
    complete: {
        type: Boolean,
        required: true,
        default: false
    },
    phone: {
        type: Number
    },
    userid: {
        type: String,
        required: true
    },
    dms: {
        type: [String],
        default: [],
    },
});

const teacherModel = mongoose.model('Teacher', Teacher);

module.exports = teacherModel