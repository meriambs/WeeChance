const  Joob  = require('../Models/joboff');
const { body, validationResult } = require('express-validator');



const findPost= (res,req)=>{
// const returnPost = await Joob.find();
//     return res.send(returnPost)
     return res.send('Post page')
}

//la partie creation
 const createPost = async  (req, res) => {
//     // Finds the validation errors in this request and wraps them in an object with handy functions
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() });
     }}

//la partie edit et deliete :
//    //PUT : EDIT A USER BY ID 
  const findandUpdatePost = async ( req , res)=>{
  const updatedPost = await Joob.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
  return res.send(updatedPost)
  }


//   //   DELETE : REMOVE A USER BY ID 
    const deletePost = async (req,res)=>{
      const deltedPost = await Joob.findByIdAndRemove({_id:req.params.id});
     return res.send(deltedPost)
  }



module.exports = {
   findPost,
    createPost,
  findandUpdatePost,
  deletePost,
}