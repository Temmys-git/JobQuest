const mongoose = require('mongoose');

const Job = mongoose.Schema({
    title:{
        type:String,
        required:[true, 'title is required']
    },
    description:{
            type:String,
            required:[true,'description is required'],
   },
   imageUrl:{
        type:String,
        required:[true, 'imageUrl is required'],
   },
   user:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true, 'user id is required']
   }
},{
    timestamps:true,
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
})

Job.virtual('applicants',{
    ref:'Applicant',
    localField:'_id',
    foreignField:'job'
});

Job.virtual('ratings',{
    ref:'Rating',
    localField:'_id',
    foreignField:'job'
});
module.exports = mongoose.model('Job',Job);