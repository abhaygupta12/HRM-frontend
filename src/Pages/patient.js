import React from 'react';
import "./CreatePost.css";
import {Link} from "react-router-dom";

function Patient() {
  return (
    <div className='card create-post-container'>
      <h3>Patient Space</h3><br/>
    <button className="btn waves-effect waves-light btn-large #64b5f6 blue darken-1">Upload Document</button><br/><br/>
    
    <Link to="/manage-post"><button className="btn waves-effect waves-light btn-large #64b5f6 blue darken-1">Manage Document</button></Link><br/><br/>
   
    <Link to="/grant-post"><button className="btn waves-effect waves-light btn-large #64b5f6 blue darken-1">Grant Access</button></Link><br/><br/>
    
</div>
  )
}


export default Patient