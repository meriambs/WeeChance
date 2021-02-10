var express = require('express');
var router = express.Router();
const { sayProfil ,upDatedProfil ,getAllProfil,getProfId} = require('../Controllers/profil');
const auth = require ('../middleware/auth');
const { body, validationResult } = require('express-validator');
const  Profile = require('../Models/Profile');
const User = require ('../Models/User');
/* GET home page. */
router.get('/me',auth,sayProfil);


// @route    Post  api/profile/
// @desc     Create/Update user's Profile
// @access   Private
router.post(
  "/",
  [
    auth,
   [ body("status", "status is required").not().isEmpty(),
    body("skills", "Skills is required").not().isEmpty()],
  ],upDatedProfil);

 // @route    Get  api/profile/
// @desc     Get all profiles
// @access   Public

router.get("/", getAllProfil);
//get by id :
router.get('/user/:user_id',getProfId);
// @route    Get  api/profile/user/:user_id
// @desc     Get all profile by user ID
// @access   Public







module.exports = router;