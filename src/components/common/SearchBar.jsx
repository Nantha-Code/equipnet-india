







// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./SearchBar.css";

// function SearchBar() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   const handleSearch = () => {
//     if (searchTerm.trim() === "") return;

//     navigate(`/search?q=${searchTerm}`);
//   };

//   return (
//     <div className="searchbar-container">
//       <input
//         type="text"
//         placeholder="Search equipment..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="search-input"
//       />
    
//       <button className="search-btn" onClick={handleSearch}>
//         Search
//       </button>
//     </div>
//   );
// }

// export default SearchBar;




// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./SearchBar.css";

// function SearchBar() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   function handleSearch() {
//     if (!searchTerm.trim()) return;

//     navigate(`/search?q=${searchTerm}`);
//   }

//   return (
//     <div className="searchbar">
//       <input
//         type="text"
//         placeholder="Search equipment..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />

//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// }

// export default SearchBar;