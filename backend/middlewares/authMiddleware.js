const User = require('../models/User');
const jwt = require('jsonwebtoken')

const JWT_KEY = 'ask4cute@@';

const authMiddleware = async(req,res,next)=>{
    // const token = req.authorization.headers.split(' ')[1];
    let token;
   try{
        if(req.headers.authorization&&req.headers.authorization.startsWith('Bearer')){
            token = req.headers.authorization.split(' ')[1];
            const decode = jwt.decode(token,JWT_KEY);
            console.log(token,'here')
            const user = await User.findById(decode._id);
            req.user = user;
            next()
        }else{
            return res.status(403).json({message:'You are Unauthorized'})
        }
   }catch(err){
        console.log(err)
   }
    
}

module.exports = authMiddleware;