import React from 'react'
import { useFormik } from 'formik';
import { object, string } from 'yup';
import "./LoginPage.css";


const requirements = object({
         name: string().required("please fill the name field").min(4,"consistant atleast  4 letter name").max(15),
         email: string().required("please fill the email address").min(4,"minimum four characters required").max(15,"maximum characters reached"),
         password: string().required("enter your password").min(8,"minimum 8 letters required").max(15,"maximum letters reached")


})

const RegisterPage = () =>{
    const formik =useFormik({
        initialValues:{
            name: "",
            email: "",
            role: "",
            password: ""
        },
        validationSchema:requirements,
        onSubmit:(data)=>console.log(data)
    });
  return (
    <>
    <div className="register-form">

    <form onSubmit={formik.handleSubmit} className='formik-register-form'>
        
    <h2>Register</h2>
    <label>Name</label>
    <input 
     type="text"
     placeholder='name'
     className='name'
     value={formik.values.name}
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}
     name='name'
    />
    {formik.touched.name&&formik.errors.name?formik.errors.name:null}

    <label>Email</label>
    <input  
     type="email" 
     placeholder='email'
     className='email'
     value={formik.values.email}
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}
     name='email'
    />
    {formik.touched.email&&formik.errors.email?formik.errors.email:null}
    
    
    <label>Role</label>
        <select 
        name="role" 
        className='role'
        value={formik.values.role}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        >
        <option value="">Please choose an Role</option>
        <option value="student">Student</option>
        <option value="institution">Institution</option>
        <option value="startup">Startup</option>
        <option value="labs">R&D Labs</option>
        </select>

    <label>Password</label>
    <input 
     type="text" 
     placeholder='password' 
     className='password'
     value={formik.values.password}
     onChange={formik.handleChange}
     onBlur={formik.handleBlur}
     name='password'
     />
    
    <button type='submit' className='register-btn'>Register</button>
    
    </form>
     </div>
    </>
  );
}

export default RegisterPage;