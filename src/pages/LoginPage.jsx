import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./LoginPage.css";

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),

      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required")
    }),

    onSubmit: (values) => {
      console.log("Login Data:", values);
    }
  });

  return (
    <>
    <div className="login-container">
      <form onSubmit={formik.handleSubmit} className="login-form">

        <h2>Log<span>in</span></h2>

        <input
          type="text"
          placeholder="Email"
          className="input-box"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {formik.touched.email && formik.errors.email && (
          <p className="error-text">{formik.errors.email}</p>
        )}

        <input
          type="password"
          placeholder="Password"
          className="input-box"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {formik.touched.password && formik.errors.password && (
          <p className="error-text">{formik.errors.password}</p>
        )}

        <button type="submit" className="login-button">
          Login
        </button>

      </form>
    </div>
    </>
  );
};

export default LoginPage;


























































// import React from "react";
// import "./LoginPage.css";
// import { useFormik } from "formik";
// import { object, string } from "yup";

// let validation=object(
//     {
//         email:string().required("Please fill this email field"),
//         password:string().required("please fill this password field")
//     }
// )


//   function LoginPage() {
// const formik=useFormik({

// initialValues:{
//     email:"",
//     password:""
// },

// validationSchema:validation,
// onSubmit:(data)=>console.log(data)


// })

//   return (
//     <form onSubmit={formik.handleSubmit}>
//     <h2>Login</h2>
//     <input type="text"
//     placeholder='email' 
//     className="email"
//     value={formik.values.email}
//     onChange={formik.handleChange}
//     onBlur={formik.handleBlur}
//     name="email"
//     />

//     {formik.touched.email&&formik.errors.email?formik.errors.email:null}


//     <input type="text"
//     placeholder='password' 
//     className="password"
//     value={formik.values.password}
//     onChange={formik.handleChange}
//     onBlur={formik.handleBlur}
//     name="password"
//     />

//      {formik.touched.password&&formik.errors.password?formik.errors.password:null}
//     <button type="submit" className="login-button">Login</button>
//   </form>
//   );
// }

// export default LoginPage;