const  Profile = require('../Models/Profile');
const User = require ('../Models/User');
const { body, validationResult } = require('express-validator');

const sayProfil = async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate("user", ["name", "avatar"]);

    if (!profile) {
      return res
        .status(400)
        .json({ message: "There is no profile for this user" });
    }

    res.json(profile);
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const upDatedProfil  =  async (req, res) => {
   const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      company,
      website,
      location,
      bio,
      status,
      githubusername,
      skills,
     
     
    } = req.body;

    // //Build profile object
     const profileFields = {};
     profileFields.user = req.user.id;
     if (company) profileFields.company = company;
     if (website) profileFields.website = website;
     if (location) profileFields.location = location;
     if (bio) profileFields.bio = bio;
     if (status) profileFields.status = status;
     if (githubusername) profileFields.githubusername = githubusername;
     if (skills) {
      profileFields.skills = skills.split(",").map((skill) => {
         return skill.trim();
       });
       
     }

    
     try {
       let profile = await Profile.findOne({ user: req.user.id });

       if (profile) {
         //Update if there is a profile
        profile = await Profile.findOneAndUpdate(
           { user: req.user.id },
           { $set: profileFields },
           { new: true }
         );

        return res.json(profile);
      }

      //Create if there is no profile
       profile = new Profile(profileFields);
       await profile.save();
       res.json(profile);
     } catch (error) {
       console.error(error.message);
       res.status(500).send("Server Error");
   }
   
  
  
  
  };


const getAllProfil = async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", ["name", "avatar"]);
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
}

//get profil by id : 

const getProfId= async (res,req)=>{
  try{
    const profileUser = await Profile.findOne({user:req.params.user-id}).populate('user',['name','avatar']);
    if(!profileUser) return res.status(400).json({msg:'there is no profil with this name '});
    res.json(profileUser);
  }catch(err){
    console.error(err.message);
    res.status(500).send('Server error')
  }
}

module.exports = {
    sayProfil,
    upDatedProfil,
    getAllProfil,
    getProfId
}