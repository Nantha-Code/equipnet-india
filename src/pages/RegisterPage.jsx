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

