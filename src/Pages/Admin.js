import React from 'react';
import {Link} from "react-router-dom";

function Admin() {
  return (
    <div className="login-container">
            <div className="card login-card input-field">
                <h3>Admin Space</h3>
                <Link to="/"><button className="btn waves-effect waves-light btn-large #64b5f6 blue darken-1">Add Doctor</button></Link><br/><br/>
                <Link to="/"><button className="btn waves-effect waves-light btn-large #64b5f6 blue darken-1">Remove Doctor</button></Link><br/><br/>
                
                
            </div>
        </div>
  )
}

export default Admin