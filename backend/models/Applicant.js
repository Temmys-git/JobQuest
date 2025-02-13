const mongoose = require('mongoose');

const Applicant = mongoose.Schema({
    name:{
        type:String,
        required:[true, 'name is required']
    },
    email:{
         type:String,
         required:[true,'email is required'],
    },
    phone:{
        type:Number,
        required:[true, 'phone number is required']
   },
   gender:{
        type:String,
        required:true
   },
   age:{
        type:Number,
        required:[true,'age is required']
   },
   qualification:{
        type:String,
        required:false
   },
   comment:{
        type:String,
        required:[true, 'comment is required']
   },
   status:{
     type:String,
     default:'pending'
   },
   job:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Job',
        required:true
   },
   user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
   }

},
{
    timestamps:true,
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
})


Applicant.virtual('myJob',{
     ref:'Job',
     localField:'job',
     foreignField:'_id',
     justOne:true
 });

module.exports = mongoose.model('Applicant',Applicant)

