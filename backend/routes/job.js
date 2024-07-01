const express = require('express');
const { getJobs, storeJob, updateJob, deleteJob, getSingleJob, applyJob } = require('../controllers/JobController');
const uploadFile = require('../middlewares/uploadFileMiddleware');
const jobRoutes = express.Router();

jobRoutes.route('/').get(getJobs).post(uploadFile.single('image'),storeJob);
jobRoutes.route('/:id').get(getSingleJob).put(updateJob).delete(deleteJob);
jobRoutes.route('/:id/applicants').post(applyJob);

module.exports = jobRoutes;