import { useFormik } from "formik";
import * as Yup from "yup";
import "./RegisterPage.css";

export function RegisterPage() {

  const formik = useFormik({
    initialValues: {
      name: "",
      role: "Student",
      email: "",
      institution: "",
      password: "",
      confirmPassword: ""
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),

      role: Yup.string().required(),

      email: Yup.string()
        .email("Invalid email")
        .required("Email is required"),

      institution: Yup.string()
        .required("Institution is required"),

      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("Password required"),

      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm your password")
    }),

    onSubmit: (values) => {
      console.log(values);
      alert("Account Created Successfully");
    }
  });

  return (
    <div className="register-container">

      {/* LEFT SIDE */}

      <div className="left-panel">

        <h2 className="logo">Equipmentnet</h2>

        <h1 className="logo-tittle">Join India's Research Equipment Community</h1>

        <p className="left-panel-para">
          Free account. Instant access to equipment from IITs,
          IISc, CSIR and universities across India.
        </p>

        <ul className="left-side-ul">
          <li className="left-side-li">Completely free to sign up and use</li>
          <li className="left-side-li">Track all your equipment requests</li>
          <li className="left-side-li">Get notified when your request is reviewed</li>
          <li className="left-side-li">Access instruments across research fields</li>
        </ul>

      </div>

      {/* RIGHT SIDE */}

      <div className="right-panel">

        <div className="form-card">

          <h2 className="main-tittle">Create your account</h2>

          <form onSubmit={formik.handleSubmit}>

            <div className="row">

              <div>
                <label className="label">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  {...formik.getFieldProps("name")}
                />
                {formik.touched.name && (
                  <p className="error">{formik.errors.name}</p>
                )}
              </div>
            </div>

              <div className="role">
                <label className="label">I Am a...</label>
                <select {...formik.getFieldProps("role")}>
                  <option>select the role</option>
                  <option>Student</option>
                  <option>Researcher</option>
                  <option>Professor</option>
                  <option>Industry</option>
                </select>
              </div>

            <label className="label">Email Address</label>
            <input
              className="e-mail"
              type="email"
              placeholder="you@email.com"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && (
              <p className="error">{formik.errors.email}</p>
            )}

            <label className="label">Institution / Organisation</label>
            <input
              className="address"
              type="text"
              placeholder="IIT Madras, Anna University..."
              {...formik.getFieldProps("institution")}
            />
            {formik.touched.institution && (
              <p className="error">{formik.errors.institution}</p>
            )}

            

              <div className="01-password-tag">
                <label className="label">Password</label>
                <input
                  className="password"
                  type="password"
                  placeholder="Min 6 characters"
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && (
                  <p className="error">{formik.errors.password}</p>
                )}
              </div>

              <div className="02-password-tag">
                <label className="label">Confirm Password</label>
                <input
                  className="password"
                  type="password"
                  placeholder="Repeat password"
                  {...formik.getFieldProps("confirmPassword")}
                />
                {formik.touched.confirmPassword && (
                  <p className="error">{formik.errors.confirmPassword}</p>
                )}
              </div>
            <button type="submit" className="submit-btn">
               Create Account
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}











































// import React from 'react'
// import { useFormik } from 'formik';
// import { object, string } from 'yup';
// import "./RegisterPage.css";


// const requirements = object({
//          name: string().required("please fill the name field").min(4,"consistant atleast  4 letter name").max(15),
//          email: string().required("please fill the email address").min(4,"minimum four characters required").max(15,"maximum characters reached"),
//          password: string().required("enter your password").min(8,"minimum 8 letters required").max(15,"maximum letters reached")


// })

// const RegisterPage = () =>{
//     const formik =useFormik({
//         initialValues:{
//             name: "",
//             email: "",
//             role: "",
//             password: ""
//         },
//         validationSchema:requirements,
//         onSubmit:(data)=>console.log(data)
//     });
//   return (
//     <>
//     <div className="register-form">

//     <form onSubmit={formik.handleSubmit} className='formik-register-form'>
        
//     <h2> <strong>Register</strong></h2>
//     <label>Name</label>
//     <input 
//      type="text"
//      placeholder='name'
//      className='name'
//      value={formik.values.name}
//      onChange={formik.handleChange}
//      onBlur={formik.handleBlur}
//      name='name'
//     />
//     {formik.touched.name&&formik.errors.name?formik.errors.name:null}

//     <label>Email</label>
//     <input  
//      type="email" 
//      placeholder='email'
//      className='email'
//      value={formik.values.email}
//      onChange={formik.handleChange}
//      onBlur={formik.handleBlur}
//      name='email'
//     />
//     {formik.touched.email&&formik.errors.email?formik.errors.email:null}
    
    
//     <label>Role</label>
//         <select 
//         name="role" 
//         className='role'
//         value={formik.values.role}
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         >
//         <option value="">Please choose an Role</option>
//         <option value="student">Student</option>
//         <option value="institution">Institution</option>
//         <option value="startup">Startup</option>
//         <option value="labs">R&D Labs</option>
//         </select>

//     <label>Password</label>
//     <input 
//      type="text" 
//      placeholder='password' 
//      className='password'
//      value={formik.values.password}
//      onChange={formik.handleChange}
//      onBlur={formik.handleBlur}
//      name='password'
//      />
    
//     <button type='submit' className='register-btn'>Register</button>
    
//     </form>
//      </div>
//     </>
//   );
// }

// export default RegisterPage;