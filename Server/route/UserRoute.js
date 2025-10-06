const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController');


//Code here
router.post('/create-user', UserController.registerUser)
router.post('/verify-otp', UserController.verifyOtp);
module.exports=router;