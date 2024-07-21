const express = require('express');
const { getJobs, storeJob, updateJob, deleteJob, getSingleJob, rateJob, myJobs} = require('../controllers/JobController');
const uploadFile = require('../middlewares/uploadFileMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const jobRoutes = express.Router();


jobRoutes.route('/').get(getJobs).post(uploadFile.single('image'),storeJob);
jobRoutes.route('/myJobs').get(authMiddleware,myJobs);
jobRoutes.route('/:id').get(getSingleJob).post(rateJob).put(updateJob).delete(deleteJob);


module.exports = jobRoutes;
