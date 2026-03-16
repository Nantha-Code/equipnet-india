import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { API } from "./../global";
import "./BookingPage.css";

export function BookingPage() {
  const { id } = useParams();
  const [equipment, setEquipment] = useState(null);

  useEffect(() => {
    async function fetchEquipment() {
      try {
        const res = await fetch(`${API}/${id}`);
        const data = await res.json();
        setEquipment(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchEquipment();
  }, [id]);

  const formik = useFormik({
    initialValues: {
      startDate: "",
      endDate: "",
      role: "",
      purpose: ""
    },
    validationSchema: Yup.object({
      startDate: Yup.date().required("Start date required"),
      endDate: Yup.date()
        .required("End date required")
        .min(Yup.ref("startDate"), "End date must be after start date"),
      role: Yup.string().required("Select your role"),
      purpose: Yup.string()
        .min(20, "Explain your purpose clearly")
        .required("Purpose required")
    }),
    // onSubmit: (values) => {
    //   console.log("Booking Data", values);
    //   alert("Booking request submitted!");
    // }
    onSubmit: async (values) => {

  const bookingData = {
    equipmentId: id,
    equipmentName: equipment.name,
    institution: equipment.institution,
    ...values,
    status: "PENDING"
  };

  try {
    const res = await fetch("https://your-api.com/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bookingData)
    });

    const data = await res.json();

    alert("Booking request sent to admin!");

  } catch (err) {
    console.error(err);
  }

}
  });

  if (!equipment) return <p style={{textAlign: "center", marginTop: "50px"}}>Loading...</p>;

  return (
    <div className="booking-page-wrapper">
      <div className="booking-container">
        
        {/* LEFT COLUMN: BOOKING FORM */}
        <div className="booking-form-card">
          <div className="form-header">
            <h2 className="date-tittle">📅Fill The Rental Details</h2>
            <p className="subtitle">Choose your start and end dates for renting the equipment.</p>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <div className="dates-row">
              <div className="input-group">
                <label className="input-label">Start Date (From)</label>
                <input
                  className="date-input"
                  type="date"
                  {...formik.getFieldProps("startDate")}
                />
                {formik.touched.startDate && <p className="error-msg">{formik.errors.startDate}</p>}
              </div>

              <div className="input-group">
                <label className="input-label">End Date (To)</label>
                <input
                  className="date-input"
                  type="date"
                  {...formik.getFieldProps("endDate")}
                />
                {formik.touched.endDate && <p className="error-msg">{formik.errors.endDate}</p>}
              </div>
            </div>

            <label className="input-label">I am a...</label>
            <div className="role-buttons">
              {["Student", "Researcher", "Startup", "Faculty"].map((roleOption) => (
                <button
                  key={roleOption}
                  className={`role-btn ${formik.values.role === roleOption ? "active" : ""}`}
                  type="button"
                  onClick={() => formik.setFieldValue("role", roleOption)}
                >
                  {roleOption}
                </button>
              ))}
            </div>
            {formik.touched.role && <p className="error-msg">{formik.errors.role}</p>}

            <label className="input-label">Purpose of Use *</label>
            <textarea
              className="purpose-tag"
              placeholder="Describe your research purpose, experiment goals, and why you need this equipment..."
              {...formik.getFieldProps("purpose")}
            />
            {formik.touched.purpose && <p className="error-msg">{formik.errors.purpose}</p>}
            <p className="help-text">This helps the lab admin understand your requirements and approve quickly.</p>

            <button type="submit" className="continue-btn">
              Continue to Booking &rarr;
            </button>
          </form>
        </div>

        {/* RIGHT COLUMN: EQUIPMENT INFO */}
        <div className="booking-summary-column">
          
          <div className="info-card">
            <h3 className="equip-name">{equipment.name}</h3>
            <p className="equip-inst">🏛️ {equipment.institution}</p>
            <span className={`status-badge-rightside ${equipment.availabilityStatus?.toLowerCase().replace(/\s/g, '-') || 'available'}`}>
              • {equipment.availabilityStatus || "Available"}
            </span>
          </div>

          <div className="includes-card">
            <h4 className="include-tittle">✅ What's Included</h4>
            <ul className="includes-ul">
              <li className="includes-li">&rarr; Full equipment access for selected dates</li>
              <li className="includes-li">&rarr; Lab staff guidance and support</li>
              <li className="includes-li">&rarr; Safety orientation & SOP document</li>
              <li className="includes-li">&rarr; Refund of security deposit post-use</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}