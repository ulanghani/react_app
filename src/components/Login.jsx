import React from "react";
import Logo from './images/gdp.png'
import { Link } from "react-router-dom";
import { useState } from 'react';
import eye from './images/eye.png';
import eyeslash from "./images/eyeslash.png";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handlePasswordVisibilityToggle() {
        setIsPasswordVisible(!isPasswordVisible);
    }
    return (
        <div class="container   px-2">
            <div class="row  gx-5  ">
                <div class="col"></div>
                <div class="col-4 m-4">
                    <div class="p-3 border">
                        <div class=" he">
                            <img src={Logo} alt="" width="40%" height="70%" />
                            <h1 class="fw-bold mt-2">Login </h1>
                        </div>
                        <div class="form-group">
                            <div>

                                <label for="number">Mobile No. (user name)*)</label>
                                <label for="us" class="text-right float-end">(موبائل نمبر (صارف کا نام</label>
                            </div>
                            <inputn value={username} onChange={handleUsernameChange} required type="number" class="form-control d-grid mt-3 justify-content-center" id="pwd" />
                        </div>

                        <div class="form-group">
                            <div>
                                <label for="pwd">Password* </label>
                                <label for="us" class="text-right float-end  ">پاس ورڈ</label>
                            </div>
                            <div className="position-relative">
                                <input type={isPasswordVisible ? "text" : "password"} value={password} onChange={handlePasswordChange} minLength={8} required class="form-control d-grid mt-3 justify-content-center" id="pwd" />

                                <img className="position-absolute"
                                    src={isPasswordVisible ? eye : eyeslash}
                                    alt=""
                                    onClick={() => handlePasswordVisibilityToggle()}
                                />
                            </div></div>
                        <div>
                            <label for="pwd" class="link-success" ><Link style={{ color: "green", textDecoration: "none " }} to="/Forgetpassword"> Forget Password </Link> </label>
                            <label for="us" class="link-success text-right float-end "><Link style={{ textDecoration: "none", color: "green" }} to="/Forgetpassword">پاسورڈ بھول گے </Link> </label>
                        </div>
                        <div class="d-grid gap-2 col-6 mx-auto mt-3">
                            <button class="btn bg-success bg-gradient text-white" type="submit" >Login (لاگ ان کریں)</button>
                        </div>
                        <p class="d-grid mt-3 justify-content-center">OR یا</p>
                        <div class="d-grid mt-3 justify-content-center">
                            <p>Haven't have account? <Link style={{ textDecoration: "none", color: "green" }} to="/Register">Register Now</Link>  </p>

                            <p>   اکاؤنٹ نہیں ہے؟  <Link style={{ textDecoration: "none", color: "green" }} to="/Register">ابھی رجسٹر کریں۔ </Link> </p>
                            <p class="d-grid mt-5 justify-content-center fw-bold text-success">Powered By  Oclits Pvt.Ltd.</p>
                        </div>

                    </div>
                </div>
                <div class="col"> </div>
            </div>

        </div>

    );
}


export default Login