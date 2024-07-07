const express = require('express');
const { getJobs, storeJob, updateJob, deleteJob, getSingleJob, rateJob} = require('../controllers/JobController');
const uploadFile = require('../middlewares/uploadFileMiddleware');
const jobRoutes = express.Router();


jobRoutes.route('/').get(getJobs).post(uploadFile.single('image'),storeJob);
jobRoutes.route('/:id').get(getSingleJob).post(rateJob).put(updateJob).delete(deleteJob);


module.exports = jobRoutes;
