// import React from "react";
// import "./LoginPage.css";
// // import { useNavigate } from "react-router-dom";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// function LoginPage() {
//   const navigate = useNavigate();

//   // Yup validation schema
//   const validationSchema = Yup.object({
//     email: Yup.string()
//       .email("Invalid email format")
//       .required("Email is required"),
//     password: Yup.string()
//       .min(6, "Password must be at least 6 characters")
//       .required("Password is required"),
//   });

//   return (
//     <div className="login-container">
//       <Formik
//         initialValues={{ email: "", password: "" }}
//         validationSchema={validationSchema}
//         onSubmit={(values) => {
//           console.log("Login attempt:", values);

//           // Fake login success
//           navigate("/home");
//         }}
//       >
//         <Form className="login-form">
//           <h2>Log<span>in</span></h2>

//           <label>Email</label>
//           <Field
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//           />
//           <ErrorMessage name="email" component="div" className="error-text" />

//           <label>Password</label>
//           <Field
//             type="password"
//             name="password"
//             placeholder="Enter your password"
//           />
//           <ErrorMessage name="password" component="div" className="error-text" />

//           <button type="submit">Login</button>
//         </Form>
//       </Formik>
//     </div>
//   );
// }

// export default LoginPage;































































// // import React, { useState } from "react";
// // import "./LoginPage.css"
// // import { useNavigate } from "react-router-dom"; 

// // function LoginPage() {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const navigate = useNavigate();

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log("Login attempt:", { email, password });
// //   };

// //   const handleLogin = () => {
// //     // your login logic here (validation, API call, etc.)
// //     navigate("/home");
// //   };

// //   return (
// //     <div className="login-container">
// //       <form className="login-form" onSubmit={handleSubmit}>
// //         <h2>Log<span>in</span></h2>

// //         <label htmlFor="email">Email</label>
// //         <input
// //           type="email"
// //           id="email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           placeholder="Enter your email"
// //           required
// //         />

// //         <label htmlFor="password">Password</label>
// //         <input
// //           type="password"
// //           id="password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           placeholder="Enter your password"
// //           required
// //         />

// //         <button type="submit" onClick={handleLogin}>Login</button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default LoginPage;
