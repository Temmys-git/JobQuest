const Applicant = require('../models/Applicant');
const Job = require('../models/Job');
const Rating = require('../models/Rating');

const getJobs = async(req,res)=>{
    const jobs = await Job.find().populate('applicants');
    return res.status(201).json(jobs);
}


const storeJob = async(req,res)=>{
    console.log(req.body)
    const imageUrl = `${req.protocol}://${req.get('host')}/upload/images/${req.file.originalname}`
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
    const imageUrl = `${req.protocol}://${req.get('host')}/upload/images/${req.file?.originalname}`
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
        console.log(id)
        const job = await Job.findById(id);
        if(!job){
             return res.status(404).json({message:'job not found'})
        }
        await Job.findByIdAndDelete(id)
        return res.status(201).json({message:'job deleted successfully'});
}

const rateJob = async(req,res)=>{
    const {review,rating,user,job} = req.body;
    let ratings = await Rating.findOne({user,job})
    if(ratings){
        ratings.rating = rating
        ratings.review = review
        await ratings.save();
        return res.status(200).json(ratings);
    }
    rating = await Rating.create(req.body);
    return res.status(200).json(ratings);
}

const myJobs = async(req,res)=>{
    // const user = '668307eb04859d5ac00f3449'
    console.log(req.user);
    const user = '669d1731b397d43aec74f662'
    const jobs = await Job.find({user}).populate('applicants');
    return res.status(201).json(jobs);
}

module.exports = {
    getJobs,
    storeJob,
    myJobs,
    getSingleJob,
    updateJob,
    deleteJob,
    rateJob
}