const express = require('express');
const jobRoutes = require('./routes/job');
const bodyParser = require('body-parser')
const cors = require('cors')
const authRoutes = require('./routes/auth');
const { login, register } = require('./controllers/authController');
const connectDb = require('./db');
const applicantRoutes = require('./routes/applicant');
const app = express();
connectDb();

app.use('/upload/images', express.static('./upload/images'))
app.use(cors())
app.use(bodyParser.urlencoded({limit:'500mb', extended: true }));
app.use(bodyParser.json({limit:'500mb'}))
app.get('/',(req,res)=>{
    res.json({message:'hello joblisting'});
})


app.post('/login',login)
app.post('/register',register)
app.use('/jobs',jobRoutes);
app.use('/jobs/applicant',applicantRoutes);

app.listen(8000,()=> console.log('app is running'));