import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./LoginPage.css";
import { useNavigate } from "react-router";

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
  const navigate = useNavigate();
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

        <button type="submit" className="login-button">Login</button>
        <a href=""className="skip-button" onClick={() =>navigate("Home")}>Skip</a>
      </form>
    </div>
    </>
  );
};

export default LoginPage;
