import React, { useState,useEffect } from 'react'
import './Join.css'
import Swal from 'sweetalert2'
import {motion, spring} from 'framer-motion'
const Join = () => {
  
  const transition={type:'spring', duration:3}
  const initialValues = { fullname: "", age: "", email: "", weight:"", height:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      Swal.fire({
        title: "Thank you for joining!",
        text: "We will connect with you soon!",
        icon: "success"
      });
      setFormValues( { fullname: "", age: "", email: "", weight:"", height:""});
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!values.fullname) {
      errors.fullname = "Full Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    }else if(!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.age) {
      errors.age = " Age is required!";
    }
    if (!values.weight) {
      errors.weight = "weight is required!";
    }
    if (!values.height) {
      errors.height = "Height is required!";
    }
    return errors;
  };

return(
    <div className="form">
        <motion.div 
        whileInView={{opacity:1, x:0}}
        animate={{opacity:0, x:-100}}
        transition={transition}
        className="left-s"
        >
            <div>
            <span className='stroke-text'>Are you </span>
            <span>ready </span>
            </div>
            <div>
            <span >to </span>
            <span className='stroke-text'>level up </span>
            </div>
            <div>
            <span className='stroke-text'>Your </span>
            <span >Body </span>
            </div>
            <div>
            <span >With </span>
            <span className='stroke-text'>Us?</span>
            </div>
        </motion.div>
        <div className="right-s">
         <span>Registration form</span>
        <form onSubmit={handleSubmit}>
        <div className="form-fields">
            <div className="field">
            <label>Full Name:  </label>
            <input type="text" name='fullname' placeholder='Write your Full name' 
            value={formValues.fullname} onChange={(e)=>handleChange(e)}/>
            </div>
            <p> {formErrors.fullname} </p>
            <div className="field">
            <label>Email:  </label>
            <input type="email" name='email' placeholder='Write your E-mail address' 
             value={formValues.email} onChange={(e)=>handleChange(e)}/>
            </div>
            <p> {formErrors.email} </p>
            <div className='fields-span'>
            <div className="field-inline">
            <label>Age:  </label>
            <input type="number" name='age' placeholder='Age' 
             value={formValues.age} onChange={(e)=>handleChange(e)}/>
              <p> {formErrors.age} </p>
            </div>
           
            <div className="field-inline">
            <label>Weight :  </label>
            <input type="number" name='weight' placeholder='Weight in kg' 
             value={formValues.weight} onChange={(e)=>handleChange(e)}/>
             <p> {formErrors.weight} </p>
            </div>
            
            <div className="field-inline">
            <label>Height :  </label>
            <input type="number" name='height'placeholder='Height in inch' 
             value={formValues.height} onChange={(e)=>handleChange(e)}/>
             <p> {formErrors.height} </p>
            </div>
            
            </div>
            <div className="field-d">
            <label>
               Program Type :
              <select name="program" id='select' onChange={(e)=>handleChange(e)}>
           <option value="fatburn">Fat burn</option>
           <option value="cardio">Cardio</option>
           <option value="strengthtraining">Strength training</option>
              </select>
           </label>
            </div>
            <div className="field-ds">
            <label>
               Plan type :
              <select name="plan" id='select-s' onChange={(e)=>handleChange(e)}>
           <option value="Basic">Basic Plan</option>
           <option value="Premium">Premium Plan</option>
           <option value="VIP">VIP Plan</option>
              </select>
           </label>
            </div>
            <div className="field-r">
            <label>Gender : </label>
            <input onChange={(e)=>handleChange(e)} type="radio" value="Male" name="gender" /> Male
            <input onChange={(e)=>handleChange(e)} type="radio" value="Female" name="gender" /> Female
            </div>
        </div>
        <div className='buton'>
        <button type='submit'>Join Now</button>
        </div>
        </form>
        </div>
    </div>
)
}
export default Join