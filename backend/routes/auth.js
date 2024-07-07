const express = require('express');
const { register, login } = require('../controllers/authController');

const authRoutes = express.Router();

module.exports = authRoutes