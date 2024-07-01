const Applicant = require('../models/Applicant');
const Job = require('../models/Job');

const apply = async(req,res)=>{
    const id = req.params.id;
    const applicant = await Applicant.create(req.body);
    // const jobs = await Job.find().populate('applicant');
    return res.status(201).json(applicant);
}


module.exports = {apply}