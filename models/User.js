const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: { type: String, required: true, minlength:5, maxlength:50  },
    email: { type: String, required: true, minlength:5, maxlength:100 },
    password: { type:String, required: true, minlength:6, maxlength:150 },
    admin:{ type:Boolean, default: false},
    createdAt: { type: Date, default: Date.now } 
})


module.exports = mongoose.model('User', userSchema)