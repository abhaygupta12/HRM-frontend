import React from 'react';
import {Link} from "react-router-dom";

function Login() {
  return (
    <div className="login-container">
            <div className="card login-card input-field">
                <h3>Login Form</h3>
                <Link to="/doctor-post"><button className="btn waves-effect waves-light btn-large #64b5f6 blue darken-1">Login as Doctor</button></Link><br/><br/>
                <Link to="/patient-post"><button className="btn waves-effect waves-light btn-large #64b5f6 blue darken-1">Login as Patient</button></Link><br/><br/>
                <Link to="/admin"><button className="btn waves-effect waves-light btn-large #64b5f6 blue darken-1">Login as Admin</button></Link><br/><br/>
                <h6>
                    <Link to="/Signup">Don't have an account ?</Link>
                </h6>
            </div>
        </div>
  )
}

export default Login