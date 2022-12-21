import React from "react";
import { BrowserRouter, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Doctor from "./Pages/doctor";
import Patient from "./Pages/patient";
import Manage from "./Pages/ManageDocument";
import GrantAccess from "./Pages/Grantaccess";
import Admin from "./Pages/Admin";
import Home from "./Pages/Home";
import "./App.css";



function App() {
  return (
    <BrowserRouter>
     <NavBar/>
     <Route path='/home'>
     <Home/>
     </Route>
     <Route path='/login'>
       <Login/>
     </Route>
     <Route path='/signup'>
       <Signup/>
     </Route>
     <Route path='/doctor-post'>
       <Doctor/>
     </Route>
     <Route path='/patient-post'>
       <Patient/>
     </Route>
     <Route path='/manage-post'>
       <Manage/>
     </Route>
     <Route path='/grant-post'>
       <GrantAccess/>
     </Route>
     <Route path='/admin'>
       <Admin/>
     </Route>
    </BrowserRouter>
  );
}

export default App;
