const mongoose = require('mongoose');

const User = mongoose.Schema({
    name:{
        type:String,
        required:[true, 'name is required']
    },
   email:{
        type:String,
        required:[true,'email is required'],
        unique:true
   },
   password:{
        type:String,
        required:[true, 'password is required'],
   }
},{
    timestamps:true,
},{
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
})

module.exports = mongoose.model('User',User)
User.virtual('jobs',{
    ref:'Job',
    localField:'_id',
    foreignField:'user'
})