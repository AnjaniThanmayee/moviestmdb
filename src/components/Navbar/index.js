// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./index.css";

// const Navbar = () => {
//   const [searchQuery, setSearchQuery] = useState(""); 
//   const [query,setQuery] = useState("nomatchfound")

//   const handleInputChange = (event) => {
//     setSearchQuery(event.target.value); 
//     setQuery(event.target.value)
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <div className="navbar-logo">
//           <Link to="/">MovieDb</Link>
//         </div>
//         <div className="navbar-items">
//           <ul>
//             <li>
//               <Link to="/">Popular</Link>
//             </li>
//             <li>
//               <Link to="/toprated">Top Rated</Link>
//             </li>
//             <li>
//               <Link to="/upcoming">Upcoming</Link>
//             </li>
//             <li>
//               <input style={{height:"22px",borderRadius:"4px"}} type="text" placeholder="Search" value={searchQuery} onChange={handleInputChange} />
//               <Link to={`/search/${query}`}>
//                 <button type="button" className="searchbtn" style={{marginLeft:"4px",borderRadius:"4px"}} >Search</button>
//               </Link>
//             </li>
            
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [query, setQuery] = useState("nomatchfound");
  const [menuOpen, setMenuOpen] = useState(false); // State for menu open/close

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    setQuery(event.target.value);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">MovieDb</Link>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <img style={{height:"25px",width:"25px",marginTop:"2px"}}src="https://paragondigital.com/wp-content/uploads/Menu-Icon2.jpg" alt="menu"/>
        </div>
        <div className={`navbar-items ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link to="/">Popular</Link>
            </li>
            <li>
              <Link to="/toprated">Top Rated</Link>
            </li>
            <li>
              <Link to="/upcoming">Upcoming</Link>
            </li>
            <li>
              <input
                style={{ height: "22px", borderRadius: "4px" }}
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleInputChange}
              />
              <Link to={`/search/${query}`}>
                <button
                  type="button"
                  className="searchbtn"
                  style={{ marginLeft: "4px", borderRadius: "4px" }}
                >
                  Search
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
