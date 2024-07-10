const Applicant = require('../models/Applicant');

const applyJob = async(req,res)=>{
    const applicant = await Applicant.create(req.body);
    return res.status(201).json(applicant);
}

const acceptJob = async(req,res)=>{
    const id = req.params.id;
    const applicant = await Applicant.findByIdAndUpdate(id,{status:'accepted'},{new:true});
    return res.status(200).json(applicant);
}


const declineJob = async(req,res)=>{
    const id = req.params.id;
    const applicant = await Applicant.findByIdAndUpdate(id,{status:'declined'},{new:true});
    return res.status(200).json(applicant)
}

module.exports = {applyJob,acceptJob,declineJob}