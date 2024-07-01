const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/jobQuest');
// mongoose.connect('mongodb+srv://ask4cutetemmy:12345@postcrud.rdb2pb0.mongodb.net/?retryWrites=true&w=majority&appName=postcrud')

const connectDb = async()=>{
    mongoose.connection.on('connected',()=>{
        console.log('connected to mongodb')
    });

    mongoose.connection.on('error',(err)=>{
        console.log(err)
    })

}

module.exports = connectDb;



