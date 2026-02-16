import { Category, Description } from '@mui/icons-material';
import { Formik, useFormik } from 'formik';
import * as Yup from "yup";
import React from 'react'
import "./AddEquipment.css"

const AddEquipment =() =>{
  const formik = useFormik({
    initialValues: {
      name:"",
      category:"",
      institution:"",
      location:"",
      availability:"",
      description:""
    },
    validationSchema: Yup.object({
      name: Yup.string()
      .required("Enter the equipment name"),

      category: Yup.string()
      .required("Enter the category"),

      institution: Yup.string()
      .required("Enter the institution name"),

      location: Yup.string()
      .required("enter the institution location"),

      availability: Yup.string()
      .required("Enter the equipment status"),

      description: Yup.string()
      .required("Enter the equipment description")

    }),
    onSubmit: (values) =>{
      console.log("Add equipment:",values);
    }
  });
  return (
    <>
    <div className="add-equipment-container">
        <form onSubmit={formik.handleSubmit} className='equipment-container'>
            <h2>Add Equipment</h2>
        <input 
        type="text"
        placeholder='name'
        className='name-tag'
        name='name'
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur} 
        />
        
        {formik.touched.name && formik.errors.name && (
          <p className="error-text">{formik.errors.name}</p>
        )}

        <input 
         type="text"
         placeholder='category'
         className='category'
         name='category'
         value={formik.values.category}
         onChange={formik.handleChange}
         onBlur={formik.onBlur}
        />

        {formik.touched.category && formik.errors.category && (
          <p className="error-text">{formik.errors.category}</p>
        )}

        <input 
         type="text"
         placeholder='Institution'
         className='institution'
         name='institution'
         value={formik.values.institution}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
        />

        {formik.touched.institution && formik.errors.institution && (
          <p className="error-text">{formik.errors.institution}</p>
        )}

        <input 
         type="text" 
         placeholder='Location'
         className='Location'
         name='location'
         value={formik.values.location}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
        />

        {formik.touched.location && formik.errors.location && (
          <p className="error-text">{formik.errors.location}</p>
        )}

        <input 
         type="text" 
         placeholder='Availability'
         className='availability'
         name='availability'
         value={formik.values.availability}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
        />

        {formik.touched.availability && formik.errors.availability && (
          <p className="error-text">{formik.errors.availability}</p>
        )}

        <input
         type="text"
         placeholder='Description'
         className='description'
         name='description'
         value={formik.values.description}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
        />

        {formik.touched.description && formik.errors.description && (
          <p className="error-text">{formik.errors.description}</p>
        )}
        <button type='submit'>Save Equipment</button>
        </form>
    </div>
    </>
  );
}

export default AddEquipment;