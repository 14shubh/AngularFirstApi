const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({

    name : {
        type : 'string',
        required : true,
        trim: true
    },
    email : { 
        type : 'string',
        required : true,
        trim: true,
        unique: true
    },
    password : {
        type : 'string',
        required : true
    }
});

module.exports = mongoose.model('Users',UserSchema);