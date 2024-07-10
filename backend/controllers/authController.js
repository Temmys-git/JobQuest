const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const registerEmail = require('../emails/register');

const JWT_KEY = 'ask4cute@@';
const register = async(req,res)=>{
    const {email,password} = req.body;
    const registeredUser = await User.findOne({email});
    if(registeredUser){
        return res.status(422).json({message:'User already exist'});
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);
    const user = await User.create({...req.body,password:hashedPassword});
    const token = jwt.sign({_id:user._id},JWT_KEY,{expiresIn:'1d'});
    return res.status(201).json({user,token})}

const login = async(req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user||!(await bcrypt.compare(password,user.password))){
        return res.status(404).json({message:'User not found'})
    }
    const token = jwt.sign({_id:user._id},JWT_KEY,{expiresIn:'1d'});
    return res.status(201).json({user,token})
}

module.exports = {login,register}