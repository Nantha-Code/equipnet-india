import { useFormik } from "formik";
import * as Yup from "yup";
import "./AddEquipment.css";

const AddEquipment = () => {

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      institution: "",
      location: "",
      availabilityStatus: "",
      usageType: "",
      image: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Enter equipment name"),
      description: Yup.string().required("Enter description"),
      institution: Yup.string().required("Enter institution"),
      location: Yup.string().required("Enter location"),
      availabilityStatus: Yup.string().required("Enter status"),
      usageType: Yup.string().required("Enter usage type"),
      image: Yup.string().url("Enter valid URL").required("Image required"),
    }),

    onSubmit: async (values) => {
      try {
        const res = await fetch(
          "https://6971eb5e32c6bacb12c50344.mockapi.io/api/v1/EquipmentData",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(values)
          }
        );

        const data = await res.json();
        console.log("Equipment Added:", data);
        alert("Equipment Added Successfully!");

      } catch (err) {
        console.error("POST Error:", err);
      }
    }
  });

  return (
    <div className="add-equipment-container">
      <form onSubmit={formik.handleSubmit} className="equipment-container">

        <h2>Add Equipment</h2>

        <input name="name" placeholder="Name" {...formik.getFieldProps("name")} />
        {formik.touched.name && <p>{formik.errors.name}</p>}

        <input name="description" placeholder="Description" {...formik.getFieldProps("description")} />
        {formik.touched.description && <p>{formik.errors.description}</p>}

        <input name="institution" placeholder="Institution" {...formik.getFieldProps("institution")} />
        {formik.touched.institution && <p>{formik.errors.institution}</p>}

        <input name="location" placeholder="Location" {...formik.getFieldProps("location")} />
        {formik.touched.location && <p>{formik.errors.location}</p>}

        <input name="availabilityStatus" placeholder="Status" {...formik.getFieldProps("availabilityStatus")} />
        {formik.touched.availabilityStatus && <p>{formik.errors.availabilityStatus}</p>}

        <input name="usageType" placeholder="Usage Type" {...formik.getFieldProps("usageType")} />
        {formik.touched.usageType && <p>{formik.errors.usageType}</p>}

        <input name="image" placeholder="Image URL" {...formik.getFieldProps("image")} />
        {formik.touched.image && <p>{formik.errors.image}</p>}

        <button type="submit">Save Equipment</button>

      </form>
    </div>
  );
};

export default AddEquipment;












// import { Category, Description } from '@mui/icons-material';
// import { Formik, useFormik } from 'formik';
// import * as Yup from "yup";
// import React from 'react'
// import "./AddEquipment.css"

// const AddEquipment =() =>{
//   const formik = useFormik({
//     initialValues: {
//       name:"",
//       description:"",
//       institution:"",
//       location:"",
//       availabilityStatus:"",
//       usageType:"",
//       image:"",
//     },
//     validationSchema: Yup.object({
//       name: Yup.string()
//       .required("Enter the equipment name"),
      
//       description: Yup.string()
//       .required("Enter the equipment description"),

//       institution: Yup.string()
//       .required("Enter the institution name"),

//       location: Yup.string()
//       .required("enter the institution location"),
      
//       availabilityStatus: Yup.string()
//       .required("Enter the equipment status"),
      
//       usageType: Yup.string()
//       .required("Enter the usage"),

//       image: Yup.string()
//       .required("required image url")
//     }),
//     onSubmit: (values) =>{
//       console.log("Add equipment:",values);
//     }
//   });
//   return (
//     <>
//     <div className="add-equipment-container">
//         <form onSubmit={formik.handleSubmit} className='equipment-container'>
//             <h2>Add Equipment</h2>
//         <input 
//         type="text"
//         placeholder='name'
//         className='name-tag'
//         name='name'
//         value={formik.values.name}
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur} 
//         />
        
//         {formik.touched.name && formik.errors.name && (
//           <p className="error-text">{formik.errors.name}</p>
//         )}

//         <input 
//          type="text"
//          placeholder='usageType'
//          className='usageType'
//          name='usageType'
//          value={formik.values.usageType}
//          onChange={formik.handleChange}
//          onBlur={formik.onBlur}
//         />

//         {formik.touched.usageType && formik.errors.usageType && (
//           <p className="error-text">{formik.errors.usageType}</p>
//         )}

//         <input 
//          type="text"
//          placeholder='Institution'
//          className='institution'
//          name='institution'
//          value={formik.values.institution}
//          onChange={formik.handleChange}
//          onBlur={formik.handleBlur}
//         />

//         {formik.touched.institution && formik.errors.institution && (
//           <p className="error-text">{formik.errors.institution}</p>
//         )}

//         <input 
//          type="text" 
//          placeholder='Location'
//          className='Location'
//          name='location'
//          value={formik.values.location}
//          onChange={formik.handleChange}
//          onBlur={formik.handleBlur}
//         />

//         {formik.touched.location && formik.errors.location && (
//           <p className="error-text">{formik.errors.location}</p>
//         )}

//         <input 
//          type="text" 
//          placeholder='AvailabilityStatus'
//          className='availability'
//          name='availability'
//          value={formik.values.availabilityStatus}
//          onChange={formik.handleChange}
//          onBlur={formik.handleBlur}
//         />

//         {formik.touched.availabilityStatus && formik.errors.availabilityStatus && (
//           <p className="error-text">{formik.errors.availabilityStatus}</p>
//         )}

//         <input
//          type="text"
//          placeholder='Description'
//          className='description'
//          name='description'
//          value={formik.values.description}
//          onChange={formik.handleChange}
//          onBlur={formik.handleBlur}
//         />

//         {formik.touched.description && formik.errors.description && (
//           <p className="error-text">{formik.errors.description}</p>
//         )}
//         <button type='submit'>Save Equipment</button>
//         </form>
//     </div>
//     </>
//   );
// }

// export default AddEquipment;