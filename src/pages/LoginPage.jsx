import { useFormik } from "formik";
import { object, string } from "yup";

let validation=object(
    {
        email:string().required("Please fill this email field"),
        password:string().required("please fill this password field")
    }
)


  function LoginPage() {
const formik=useFormik({

initialValues:{
    email:"",
    password:""
},

validationSchema:validation,
onSubmit:(data)=>console.log(data)


})

  return (
    <form onSubmit={formik.handleSubmit}>
    <h2>Login</h2>
    <input type="text"
    placeholder='email' 
    className="email"
    value={formik.values.email}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    name="email"
    />

    {formik.touched.email&&formik.errors.email?formik.errors.email:null}


    <input type="text"
    placeholder='password' 
    className="password"
    value={formik.values.password}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    name="password"
    />

     {formik.touched.password&&formik.errors.password?formik.errors.password:null}
    <button type="submit" className="login-button">Login</button>
  </form>
  );
}

export default LoginPage;