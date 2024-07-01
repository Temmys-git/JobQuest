const Applicant = require('../models/Applicant');
const Job = require('../models/Job');

const getJobs = async(req,res)=>{
    const jobs = await Job.find().populate('applicants');
    return res.status(201).json(jobs);
}


const storeJob = async(req,res)=>{
    const imageUrl = `${req.protocol}://${req.get('host')}/${req.file.originalname}`
    const jobs = await Job.create({...req.body,imageUrl});
    return res.status(201).json({message:'job created successfully',jobs});
}

const getSingleJob = async(req,res)=>{
    const id = req.params.id;
    const job = await Job.findById(id).populate('applicants');
    if(!job){
         return res.status(404).json({message:'job not found'})
    }
    return res.status(201).json(job);
}

const updateJob = async(req,res)=>{
    const id = req.params.id;
    const job = await Job.findById(id);
    if(!job){
        return res.status(404).json({message:'job not found'})
    }

    const newJob = await Job.findByIdAndUpdate(id, req.body, {new:true})
    return res.status(201).json({newJob,message:'job deleted successfully'});

}

const deleteJob = async(req,res)=>{
        const id = req.params.id;
        const job = await Job.findById(id);
        if(!job){
             return res.status(404).json({message:'job not found'})
        }
        await Job.findByIdAndDelete(id)
        return res.status(201).json({message:'job deleted successfully'});
}

const applyJob = async(req,res)=>{
    // const id = req.params.id;
    const applicant = await Applicant.create(req.body);
    // const jobs = await Job.find().populate('applicant');
    return res.status(201).json(applicant);
}

const acceptJob = async()=>{

}



module.exports = {
    getJobs,
    storeJob,
    applyJob,
    getSingleJob,
    updateJob,
    deleteJob

}