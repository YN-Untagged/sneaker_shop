import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function NotFound (props){
  const navigate = useNavigate();

  return (
    <>
      <div className="container-fluid main-container">
        <img src='images/construction.PNG'/>
        <button onClick={navigate(-1)}>Go Back to Main Page</button>
      </div>
    </>
  );
}

export default NotFound;