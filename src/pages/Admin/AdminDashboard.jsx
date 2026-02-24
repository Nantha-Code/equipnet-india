import { useEffect, useState } from "react";
import "./AdminDashboard.css"

function AdminDashboard() {

  const [equipment, setEquipment] = useState([]);
  const [newEquipment, setNewEquipment] = useState({
    name: "",
    institution: ""
  });

  // READ all equipment
  useEffect(() => {
    fetch("https://6971eb5e32c6bacb12c50344.mockapi.io/api/v1/EquipmentData")
      .then(res => res.json())
      .then(data => setEquipment(data));
  }, []);

  // CREATE equipment
  const handleAdd = async () => {
    const res = await fetch(
      "https://6971eb5e32c6bacb12c50344.mockapi.io/api/v1/EquipmentData",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEquipment)
      }
    );
    const data = await res.json();
    setEquipment([...equipment, data]);
  };

  // DELETE equipment
  const handleDelete = async (id) => {
    await fetch(
      `https://6971eb5e32c6bacb12c50344.mockapi.io/api/v1/EquipmentData/${id}`,
      { method: "DELETE" }
    );
    setEquipment(equipment.filter(item => item.id !== id));
  };

  // UPDATE equipment
  const handleEdit = async (id) => {
    const updatedName = prompt("Enter new equipment name:");
    const res = await fetch(
      `https://6971eb5e32c6bacb12c50344.mockapi.io/api/v1/EquipmentData/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: updatedName })
      }
    );
    const updated = await res.json();
    setEquipment(equipment.map(item => item.id === id ? updated : item));
  };

  return (
    <div className="admin-dashboard">

      <h2>Admin Dashboard</h2>

      {/* CREATE */}
      <div className="equipment-input-container">
        <input
          type="text"
          placeholder="Equipment Name"
          onChange={(e) => setNewEquipment({...newEquipment, name: e.target.value})}
        />

        <input
          type="text"
          placeholder="Institution"
          onChange={(e) => setNewEquipment({...newEquipment, institution: e.target.value})}
        />

        <button onClick={handleAdd}>Add Equipment</button>
      </div>

      {/* READ */}
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

export default AdminDashboard;