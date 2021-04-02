const express = require("express");
const router = express.Router();

const {isSignedin,isAuthenticated,isAdmin} = require('../controllers/auth')
const {getUser,getUserById, updateUser} = require('../controllers/user')

router.param("userId", getUserById);

router.get("/user/:userId",isSignedin,isAuthenticated,getUser);
router.put("/user/:userId",isSignedin,isAuthenticated,updateUser);
router.get("/orders/user/:userId",isSignedin,isAuthenticated,getUser);

module.exports = router;