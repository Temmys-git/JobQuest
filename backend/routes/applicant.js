const express = require('express');
const { apply } = require('../controllers/applicantController');
const uploadFile = require('../middlewares/uploadFileMiddleware');
const applicantRoutes = express.Router();

applicantRoutes.route('/:id/applicant').post(apply);
// applicantRoutes.route('/:id').get(getSingleJob).put(updateJob).delete(deleteJob);

module.exports = applicantRoutes;