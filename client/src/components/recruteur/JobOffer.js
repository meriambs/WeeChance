import React, { useState } from 'react';
// import axios from 'axios';
 import {
   Link
 } from "react-router-dom";
const JobOffer= () => {
 const [JobData,setJobData]=useState({
   SocieteName:'',
   adress:'',
   JobDescription:'',
   JobBenefits:'',
  JobRequirements: '',
HowToApply:'',
date:'',
recruteurName:''

});
const{SocieteName,adress,JobDescription,JobBenefits,JobRequirements,HowToApply,date,recruteurName}=JobData;
 const onChange =e=>setJobData({...JobData, [e.target.name]:e.target.value});
const onSubmit= async e=>{
  e.preventDefault();
console.log('good job',JobData)
}
return (
    <section className="container">
      <h1 className="large text-primary">
        Add Your Job Offer
      </h1>
      <p className="lead">
        <i className="fas fa-graduation-cap"></i> Please don't Forget about Societe Name,Job Description,Job Requirements
  they are required !
      </p>
      <small>* = required field</small>
      <form className="form"    onSubmit={e=>onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="* SocieteName"
            name="SocieteName"
             value={SocieteName}
             onChange={e=>onChange(e)}
            required
          />
        </div>
         <div className="form-group">
          <input
            type="text"
            placeholder=" adress"
            name="adress"
             value={adress}
            required
            onChange={e=>onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder=" recruteurName"
            name="recruteurName"
             value={recruteurName}
            required
            onChange={e=>onChange(e)}
          />
          
        </div>
        <div className="form-group">
          <h4> Date</h4>
          <input type="date" name="date" value={date} onChange={e=>onChange(e)}/>
        </div>
        
        .
        <div class="form-group">
          <textarea
           name="JobDescription"
            cols="30"
           rows="5"
            placeholder="Your Job Description"
              value={JobDescription} onChange={e=>onChange(e)}
          ></textarea>
        </div>
         <div class="form-group">
          <textarea
           name="JobBenefits"
            cols="30"
           rows="5"
            placeholder="Your job Benefits "
              value={JobBenefits} onChange={e=>onChange(e)}
          ></textarea>
        </div>
         <div class="form-group">
          <textarea
           name="JobRequirements"
            cols="30"
           rows="5"
            placeholder="what your job requier"
             value={JobRequirements} onChange={e=>onChange(e)}
          ></textarea>
        </div>
         <div class="form-group">
          <textarea
           name="HowToApply"
            cols="30"
           rows="5"
            placeholder="How To Apply"
             value={HowToApply} onChange={e=>onChange(e)}
          ></textarea>
        </div>
        <input type="submit" class="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/JobOffer">Go Back</Link>
      </form>
    </section>
    
  );
};

export default JobOffer;