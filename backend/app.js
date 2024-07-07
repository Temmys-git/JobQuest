const express = require('express');
const jobRoutes = require('./routes/job');
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth');
const { login, register } = require('./controllers/authController');
const connectDb = require('./db');
const applicantRoutes = require('./routes/applicant');
const app = express();
connectDb();
app.use(bodyParser.json())
app.get('/',(req,res)=>{
    res.json({message:'hello joblisting'});
})


app.post('/login',login)
app.post('/register',register)
app.use('/jobs',jobRoutes);
app.use('/jobs/applicant',applicantRoutes);

app.listen(8000,()=> console.log('app is running'));