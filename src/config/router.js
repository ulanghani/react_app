import React from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import Forgetpassword from "../components/Forgetpassword.jsx";
import Update from "../components/Update.jsx";
import Changepassword from "../components/Changepassword";
import Dashboard from "../components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class Data extends React.Component{
    render(){
    return (
        <Router>
            <Routes>
                <Route  path="/" element={< Login  />} exact />
                <Route  path="/Register" element={<Register/>} />
                <Route  path="/Forgetpassword" element={<Forgetpassword/>} />
                <Route  path="/Update" element={<Update/>} />
                <Route  path="/Changepassword" element={<Changepassword/>} />
                <Route  path="/Dashboard" element={<Dashboard/>} />
            </Routes>
        </Router>
    )
}}
export default Data
