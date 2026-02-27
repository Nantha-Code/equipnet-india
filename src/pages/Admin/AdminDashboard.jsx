import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./AdminDashboard.css";

const API = "https://6971eb5e32c6bacb12c50344.mockapi.io/api/v1/EquipmentData";

export function AdminDashboard() {
  const [equipment, setEquipment] = useState([]);

  // ================= READ =================
  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => setEquipment(data));
  }, []);

  // ================= FORM (ADD EQUIPMENT) =================
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
      try {
        const res = await fetch(API, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values)
        });

        const data = await res.json();
        setEquipment([...equipment, data]);
        alert("Equipment Added Successfully!");
        resetForm();
      } catch (err) {
        console.error("POST Error:", err);
      }
    }
  });

  // ================= DELETE =================
  const handleDelete = async (id) => {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    setEquipment(equipment.filter(item => item.id !== id));
  };

  // ================= EDIT (basic prompt style) =================
  const handleEdit = async (id) => {
    const updatedName = prompt("Enter new equipment name:");
    if (!updatedName) return;

    const res = await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: updatedName })
    });

    const updated = await res.json();
    setEquipment(equipment.map(item => item.id === id ? updated : item));
  };

  return (
    <div className="admin-dashboard">

      <h2>Admin Dashboard</h2>

      {/* ================= ADD EQUIPMENT FORM ================= */}
      <div className="add-equipment-container">
        <form onSubmit={formik.handleSubmit} className="equipment-form">
          <h3>Add New Equipment</h3>

          <input placeholder="Name" {...formik.getFieldProps("name")} />
          {formik.touched.name && <p>{formik.errors.name}</p>}

          <input placeholder="Description" {...formik.getFieldProps("description")} />
          {formik.touched.description && <p>{formik.errors.description}</p>}

          <input placeholder="Institution" {...formik.getFieldProps("institution")} />
          {formik.touched.institution && <p>{formik.errors.institution}</p>}

          <input placeholder="Location" {...formik.getFieldProps("location")} />
          {formik.touched.location && <p>{formik.errors.location}</p>}

          <input placeholder="Status" {...formik.getFieldProps("availabilityStatus")} />
          {formik.touched.availabilityStatus && <p>{formik.errors.availabilityStatus}</p>}

          <input placeholder="Usage Type" {...formik.getFieldProps("usageType")} />
          {formik.touched.usageType && <p>{formik.errors.usageType}</p>}

          <input placeholder="Image URL" {...formik.getFieldProps("image")} />
          {formik.touched.image && <p>{formik.errors.image}</p>}

          <button type="submit">Add Equipment</button>
        </form>
      </div>

      {/* ================= EQUIPMENT TABLE ================= */}
      <h3>Equipment List</h3>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Institution</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {equipment.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.institution}</td>
              <td>
                <button onClick={() => handleEdit(item.id)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

