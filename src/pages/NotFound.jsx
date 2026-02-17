import React from "react";
import "./NotFound.css";
import { useNavigate } from "react-router";

function NotFound() {
  const navigate= useNavigate();
  return (
    <>
    <div className="main-not"></div>
    <div className="not">
       
    <h1 className="h1">Oops!</h1>  
    <h3 className="h3">404 - PAGE NOT FOUND</h3>

    <p className="para">The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
    <a href="" className="btn" onClick={() =>navigate("/")}>GO TO HOMEPAGE</a>
        
    </div>
    </>
  );
}

export default NotFound;