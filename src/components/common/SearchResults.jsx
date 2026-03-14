// import { useEffect, useState } from "react";
// import { useSearchParams, useNavigate } from "react-router-dom";
// import { API } from "../../global";
// import "./SearchResults.css";

// function SearchResults() {
//    const [Search, setSearch] = useState("");
//   const [searchParams] = useSearchParams();
//   const query = searchParams.get("q");

//   const [results, setResults] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(API);
//         const data = await response.json();

//         const filtered = data.filter((item) =>
//           item.name.toLowerCase().includes(query.toLowerCase())
//         );

//         setResults(filtered);
//       } catch (error) {
//         console.log("Error fetching data", error);
//       }
//     }

//     if (query) fetchData();
//   }, [query]);

//   return (
//     <>
//         <input 
//    type="text" 
//    placeholder='search by name'
//    value={Search}
//    onChange={(event) =>setSearch(event.target.value)}
//    />

//     <div className="results-page">
//       <h2>Search Results for "{query}"</h2>

//       <div className="results-grid">
//         {results.filter((eq)=>eq.name.toLowerCase().includes(Search.toLowerCase())).map((item) => (
//           <div
//           key={item.id}
//           className="result-card"
//           onClick={() => navigate(`/equipment/${item.id}`)}
//           >
//             <h3>{item.name}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//         </>
//   );
// }

// export default SearchResults;









// // import { useEffect, useState } from "react";
// // import { useSearchParams, useNavigate } from "react-router-dom";
// // import { API } from "../../global";
// // import "./SearchResults.css"; // 👈 Don't forget to import the CSS!

// // function SearchResults() {
// //   const [searchParams] = useSearchParams();
// //   const query = searchParams.get("q") || ""; // Fallback to empty string if null

// //   const [results, setResults] = useState([]);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     async function fetchData() {
// //       try {
// //         const res = await fetch(API);
// //         const data = await res.json();

// //         const filtered = data.filter((item) =>
// //           item.name.toLowerCase().includes(query.toLowerCase())
// //         );

// //         setResults(filtered);
// //       } catch (error) {
// //         console.error("Error fetching search results:", error);
// //       }
// //     }

// //     if (query) fetchData();
// //   }, [query]);

// //   return (
// //     <div className="search-results-page">
// //       <h2 className="search-title">
// //         Search Results for <span>"{query}"</span>
// //       </h2>

// //       {/* Check if we have results, otherwise show a 'Not Found' message */}
// //       {results.length > 0 ? (
// //         <div className="results-list">
// //           {results.map((item) => (
// //             <div
// //               key={item.id}
// //               className="result-card"
// //               onClick={() => navigate(`/equipment/${item.id}`)}
// //             >
// //               <div className="result-info">
// //                 <h3 className="result-name">{item.name}</h3>
// //                 {/* Optional: Show institution if your API returns it */}
// //                 {item.institution && <p className="result-detail">🏛️ {item.institution}</p>}
// //               </div>
// //               <div className="result-action">
// //                 <span>View Details &rarr;</span>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       ) : (
// //         <div className="no-results">
// //           <p>We couldn't find any equipment matching "{query}".</p>
// //           <button className="back-home-btn" onClick={() => navigate("/")}>
// //             Go Back Home
// //           </button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default SearchResults;



// // // import { useEffect, useState } from "react";
// // // import { useSearchParams, useNavigate } from "react-router-dom";
// // // import { API } from "../../global";

// // // function SearchResults() {
// // //   const [searchParams] = useSearchParams();
// // //   const query = searchParams.get("q");

// // //   const [results, setResults] = useState([]);
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     async function fetchData() {
// // //       const res = await fetch(API);
// // //       const data = await res.json();

// // //       const filtered = data.filter((item) =>
// // //         item.name.toLowerCase().includes(query.toLowerCase())
// // //       );

// // //       setResults(filtered);
// // //     }

// // //     fetchData();
// // //   }, [query]);

// // //   return (
// // //     <div>
// // //       <h2>Search Results for "{query}"</h2>

// // //       {results.map((item) => (
// // //         <div
// // //           key={item.id}
// // //           onClick={() => navigate(`/equipment/${item.id}`)}
// // //           style={{ cursor: "pointer", marginBottom: "10px" }}
// // //         >
// // //           <h3>{item.name}</h3>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // }

// // // export default SearchResults;