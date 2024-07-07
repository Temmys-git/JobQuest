const mongoose = require('mongoose');

const Rating = new mongoose.Schema({
    rating:{
        type:Number,
        required:[true, 'rating is required']
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true, 'rating is required']
    },
    job:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true, 'rating is required']
    },
    review:{
        type:String,
        required:[true, 'review is required']
    }
})

module.exports = mongoose.model('Rating',Rating);