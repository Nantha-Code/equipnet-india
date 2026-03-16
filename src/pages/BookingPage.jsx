import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { API } from "../global";
import "./BookingPage.css";

 export function BookingPage() {

  const { id } = useParams();
  const [equipment, setEquipment] = useState(null);
  const [days, setDays] = useState(0);

  const securityDeposit = 5000;

  useEffect(() => {
    async function fetchEquipment() {
      const res = await fetch(`${API}/${id}`);
      const data = await res.json();
      setEquipment(data);
    }

    fetchEquipment();
  }, [id]);

  const formik = useFormik({

    initialValues:{
      startDate:"",
      endDate:"",
      role:"",
      purpose:""
    },

    validationSchema:Yup.object({

      startDate:Yup.date().required("Start date required"),

      endDate:Yup.date()
      .required("End date required")
      .min(Yup.ref("startDate"),"End date must be after start date"),

      role:Yup.string().required("Select your role"),

      purpose:Yup.string()
      .min(20,"Explain your purpose clearly")
      .required("Purpose required")
    }),

    onSubmit:(values)=>{
      console.log("Booking Data",values);
      alert("Proceeding to payment...");
    }

  });

  /* calculate rental days */

  useEffect(() => {

    if(formik.values.startDate && formik.values.endDate){

      const start = new Date(formik.values.startDate);
      const end = new Date(formik.values.endDate);

      const diff = (end - start)/(1000*60*60*24);

       setDays(diff);

    }

  },[formik.values.startDate,formik.values.endDate]);

  if(!equipment) return <p>Loading...</p>;

  const rentalCost = days * equipment.price;
  const gst = rentalCost * 0.18;
  const total = rentalCost + gst + securityDeposit;

  return (

    <div className="booking-container">

      {/* LEFT FORM */}

      <div className="booking-form">

        <h2>Select Rental Dates</h2>

        <form onSubmit={formik.handleSubmit}>

          <label>Start Date</label>
          <input
          type="date"
          {...formik.getFieldProps("startDate")}
          />
          {formik.touched.startDate && <p>{formik.errors.startDate}</p>}

          <label>End Date</label>
          <input
          type="date"
          {...formik.getFieldProps("endDate")}
          />
          {formik.touched.endDate && <p>{formik.errors.endDate}</p>}

          <label>I am a...</label>

          <div className="role-buttons">

            <button type="button"
            onClick={()=>formik.setFieldValue("role","Student")}>
            Student
            </button>

            <button type="button"
            onClick={()=>formik.setFieldValue("role","Researcher")}>
            Researcher
            </button>

            <button type="button"
            onClick={()=>formik.setFieldValue("role","Startup")}>
            Startup
            </button>

            <button type="button"
            onClick={()=>formik.setFieldValue("role","Faculty")}>
            Faculty
            </button>

          </div>

          <label>Purpose of Use</label>

          <textarea
          placeholder="Describe your research purpose..."
          {...formik.getFieldProps("purpose")}
          />

          {formik.touched.purpose && <p>{formik.errors.purpose}</p>}

          <button className="continue-btn">
            Continue to Payment →
          </button>

        </form>

      </div>

      {/* RIGHT SIDE SUMMARY */}

      <div className="booking-summary">

        <h3>{equipment.name}</h3>
        <p>{equipment.institution}</p>

        <span className="status">
          {equipment.availabilityStatus}
        </span>

        <div className="cost-box">

          <h4>Cost Summary</h4>

          <p>Price per day ₹{equipment.price}</p>

          <p>Rental ({days} days) ₹{rentalCost}</p>

          <p>GST (18%) ₹{gst.toFixed(0)}</p>

          <p>Security deposit ₹{securityDeposit}</p>

          <hr/>

          <h3>Total ₹{total.toFixed(0)}</h3>

        </div>

      </div>

    </div>
  );
}

