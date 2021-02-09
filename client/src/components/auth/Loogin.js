import React, { useState } from 'react';
import {Link} from "react-router-dom";
// import axios from 'axios';

const Loogin = () => {
 const [formData,setFormData]=useState({
   
   email:'',
   password:'',
 
 });
 const {email,password}=formData;
 const onChange =e=>setFormData({...formData, [e.target.name]:e.target.value});
const onSubmit= async e=>{
  e.preventDefault();
 
    console.log('SUCESS')}
 
//     const newUser={
//       name,
//       email,
//       password
//     }

//     try{
//          const config={
//            headers:{"Content-Type":"application/json"}
//          }
//          const body =JSON.stringify(newUser);
//          const res = await axios.post('/users',body,config);
//          console.log(res.data)
//     }catch(err){
// console.error(err.response.data)
//     }
   
  return (
   
   <section className="container">
      <h1 className="large text-primary">Sign IN</h1>
      <p className="lead"><i className="fas fa-user"></i> Sing Into your Account</p>
      <form className="form" action="create-profile.html" onSubmit={e=>onSubmit(e)}>
       
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email} onChange={e=>onChange(e)}/>
          <small className="form-text"
            >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small
          >
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={e=>onChange(e)}
          />
        </div>
       
        <input type="submit" class="btn btn-primary" value="Loogin" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/Register">Sign UP</Link>
      </p>
    </section>
    
  );
};

export default Loogin;
