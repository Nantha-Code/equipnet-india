import { useState } from "react";
import "./SearchBar.css"; 
import { API } from "../../global";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  

  async function handleSearch() {
    try {
      const response = await fetch(API);
      const data = await response.json();

      // filter results
      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );

      setResults(filtered);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  }

  return (
    <div className="searchbar">
      <div className="search-controls">
        <input
          type="text"
          placeholder="Search equipment...."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch} className="search-btn">
          Search
        </button>
      </div>

      {/* results */}
      <ul>
        {results.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;


// import React, { useState } from 'react';
// import './SearchBar.css'; 


// function SearchBar = (setResults) => {
//   const[input, setInput] = useState("");
//   const fetchData = (value) => {
//     fetch("https://6971eb5e32c6bacb12c50344.mockapi.io/api/v1/EquipmentData")
//     .then((res) => res.json())
//     .then(json => {
//       const results = json.filter((user) => {
//       return (value && 
//       user && 
//       user.name.toLowercase().includes(value)
//       );
//       });
//       // console.log(results);  
//       setResults(results);
//     });
//   }
//   const handleChange = (value) => {
//     setInput(value);
//     fetchData(value);
//   }
//   return (
//     <div className="search-box">
//       <input 
//         type="text"
//         className="search-input"
//         placeholder="Search equipment, field, or institution..." 
//         onChange={(e) => handleChange(e.target.value)}
//       />
//       <button className="search-btn">Search</button>
//     </div>
//   );
// }

// export default SearchBar;