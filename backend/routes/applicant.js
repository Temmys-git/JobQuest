const express = require('express');
const { applyJob, acceptJob, declineJob, myApplication } = require('../controllers/applicantController');
const authMiddleware = require('../middlewares/authMiddleware');

const applicantRoutes = express.Router();

applicantRoutes.route('/').get(authMiddleware,myApplication);
applicantRoutes.route('/:id/apply').post(applyJob);
applicantRoutes.route('/:id/accept').patch(acceptJob);
applicantRoutes.route('/:id/decline').patch(declineJob);
// applicantRoutes.route('/:id').get(getSingleJob).put(updateJob).delete(deleteJob);

module.exports = applicantRoutes;