import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Navigator from './navigator';

function NotFound (){

  return (
    <>
      <div className='row container-fluid'>
        <Navigator/>
      </div>
      <div className="container-fluid main_container not_found">
      </div>
    </>
  );
}

export default NotFound;