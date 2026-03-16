import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./AdminDashboard.css";
import { API } from "../../global";

export function AdminDashboard() {
  const [equipment, setEquipment] = useState([]);

  // ================= GET EQUIPMENT =================
  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => setEquipment(data));
  }, []);

  // ================= ADD EQUIPMENT =================
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

    onSubmit: async (values, { resetForm }) => {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });

      const data = await res.json();
      setEquipment([...equipment, data]);
      resetForm();
    }
  });

  // ================= DELETE =================
  const handleDelete = async (id) => {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    setEquipment(equipment.filter(eq => eq.id !== id));
  };

  // ================= EDIT =================
  const handleEdit = async (id) => {
    const newName = prompt("Enter new equipment name");

    if (!newName) return;

    const res = await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newName })
    });

    const updated = await res.json();

    setEquipment(
      equipment.map(eq => eq.id === id ? updated : eq)
    );
  };

  // ================= CHANGE STATUS =================
  const changeStatus = async (item, status) => {

    const res = await fetch(`${API}/${item.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...item,
        availabilityStatus: status
      })
    });

    const updated = await res.json();

    setEquipment(
      equipment.map(eq => eq.id === item.id ? updated : eq)
    );
  };

  return (
    <div className="admin-dashboard">

      <h2 className="main-tittle">Admin Dashboard</h2>

      {/* ================= ADD FORM ================= */}

      <form onSubmit={formik.handleSubmit} className="equipment-form">

        <h3 className="equipment-adding-tittle">Add Equipment</h3>

        <input className="equipment-input-tag" placeholder="Name" {...formik.getFieldProps("name")} />
        <input className="equipment-input-tag" placeholder="Description" {...formik.getFieldProps("description")} />
        <input className="equipment-input-tag" placeholder="Institution" {...formik.getFieldProps("institution")} />
        <input className="equipment-input-tag" placeholder="Location" {...formik.getFieldProps("location")} />
        <input className="equipment-input-tag" placeholder="Usage Type" {...formik.getFieldProps("usageType")} />
        <input className="equipment-input-tag" placeholder="Status (AVAILABLE / BOOKED / MAINTENANCE)" {...formik.getFieldProps("availabilityStatus")} />
        <input className="equipment-input-tag" placeholder="Image URL" {...formik.getFieldProps("image")} />

        <button className="add-button" type="submit">Add Equipment</button>

      </form>

      {/* ================= EQUIPMENT LIST ================= */}

      <div className="equipment-container">

        {equipment.map(item => (

          <div key={item.id} className="equipment-card">

            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="e-details"><strong>Institution:</strong> {item.institution}</p>
            <p className="e-details"><strong>Location:</strong> {item.location}</p>
            <p className="e-details"><strong>Usage:</strong> {item.usageType}</p>
            <p className={`status ${item.availabilityStatus}`}>{item.availabilityStatus}</p>

            <div className="card-buttons">
              <button className="edit-button" onClick={() => handleEdit(item.id)}>Edit</button>
              <button className="delete-button" onClick={() => handleDelete(item.id)}>Delete</button>
            </div>

            <div className="status-buttons">
              <button className="status-changing-button" onClick={() => changeStatus(item,"AVAILABLE")}>Available</button>
              <button className="status-changing-button" onClick={() => changeStatus(item,"BOOKED")}>Booked</button>
              <button className="status-changing-button" onClick={() => changeStatus(item,"MAINTENANCE")}>Maintenance</button>
           </div>

          </div>

        ))}

      </div>

    </div>
  );
}

