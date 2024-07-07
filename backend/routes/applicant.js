const express = require('express');
const { applyJob, acceptJob, declineJob } = require('../controllers/applicantController');
const uploadFile = require('../middlewares/uploadFileMiddleware');
const applicantRoutes = express.Router();



applicantRoutes.route('/:id/apply').post(applyJob);
applicantRoutes.route('/:id/accept').patch(acceptJob);
applicantRoutes.route('/:id/decline').patch(declineJob);
// applicantRoutes.route('/:id').get(getSingleJob).put(updateJob).delete(deleteJob);

module.exports = applicantRoutes;