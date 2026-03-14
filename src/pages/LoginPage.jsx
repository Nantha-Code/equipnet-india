import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router';
import "./LoginPage.css";

export function LoginPage() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Enter a valid email")
        .required("Email is required"),

      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required")
    }),

    onSubmit: (values) => {
      console.log("Login Data:", values);
      alert("Login Successful");
    }
  });

  return (
    <div className="login-container">

      {/* LEFT PANEL */}

      <div className="left-panel">

        <h2 className="logo">Equipmentnet</h2>

        <h1 className="logo-tittle">India's Research Equipment Sharing Platform</h1>

        <p className="left-side-para">
          Access cutting-edge lab instruments from IITs, IISc, CSIR labs,
          and leading universities — all from one place.
        </p>

        <ul className="left-side-ul">
          <li className="left-side-li">Search 200+ instruments from IITs, IISc, and CSIR labs</li>
          <li className="left-side-li">Submit access requests in under 5 minutes</li>
          <li className="left-side-li">Track all your requests in one dashboard</li>
          <li className="left-side-li">Serving researchers across 18+ Indian states</li>
        </ul>

      </div>

      {/* RIGHT PANEL */}

      <div className="right-panel">

        <div className="login-card">

          <h2 className="main-tittle">Welcome back 👋</h2>

          <p className="register-link">
            Don't have an account? <span onClick={() => navigate("/register")}>Create one free</span>
          </p>

          <form className="login-form" onSubmit={formik.handleSubmit}>

            <label className="mail-tag">Email Address</label>
            <input
              className="e-mail-tag"
              type="email"
              placeholder="you@email.com"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="error">{formik.errors.email}</p>
            )}

            <label className="password">Password</label>
            <input
              className="password-tag"
              type="password"
              placeholder="Enter your password"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="error">{formik.errors.password}</p>
            )}

            <button type="submit" className="login-btn">Login</button>

          </form>

        </div>

      </div>

    </div>
  );
}