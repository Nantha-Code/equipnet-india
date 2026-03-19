import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router';
import { useEffect, useState } from "react";
import { API } from "../global";
import "./CategoryPage.css"; // 👈 Don't forget to import the CSS!

export function CategoryPage() {
  const navigate = useNavigate();
  const { type } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then((resData) => {
        const filtered = resData.filter(
          (item) => item.usageType === type
        );
        setData(filtered);
      });
  }, [type]);

  return (
    <div className="main-container-categery">
      <h2 className="categery-name"><span>{type}</span> Instruments</h2>

      {/* 👈 Added this wrapper to control the grid layout! */}
      <div className="category-grid">
        {data.length > 0 ? (
          data.map((item) => (
            <div className="intrument-main-container" onClick={() => navigate("/equipment/:id")} key={item.id}>
              <div className="image">
                <img className="equipment-image" src={item.image} alt={item.name} />
              </div>
              <div className="equipment-details">
                <p className="equipment-name">{item.name}</p>
                <p className="equipment-location">{item.availabilityStatus}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-data-msg">No instruments found for this category.</p>
        )}
      </div>
    </div>
  );
}























// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { API } from "../global";

// export function CategoryPage() {
//   const { type } = useParams();
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch(API)
//       .then(res => res.json())
//       .then((resData) => {
//         const filtered = resData.filter(
//           (item) => item.usageType === type
//         );
//         setData(filtered);
//       });
//   }, [type]);

//   return (
//     <div className="main-container-categery">
//       <h2 className="categery-name">{type} Instruments</h2>

//       {data.map((item) => (
//         <div className="intrument-main-container" key={item.id}>
//             <div className="image">
//             <img className="equipment-image" src={item.image} alt="equipment-image" />
//             </div>
//           <p className="equipment-name">{item.name}</p>
//           <p className="equipment-location">{item.location}</p>
//         </div>
//       ))}
//     </div>
//   );
// }