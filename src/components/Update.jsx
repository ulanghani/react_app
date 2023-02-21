import React from "react";
import Logo from './images/gdp.png';
import { Link } from "react-router-dom";

import App from "../App";
class Update extends React.Component {
  render() {

    return (

      <div class="container   px-2">
        <div class="row  gx-5  ">
          <div class="col"></div>
          <div class="col-4 m-4">
            <div class="p-3 border">
              <div class=" he">
                <img src={Logo} alt="" width="40%" height="70%" />
                <h1 className="fw-bold m-2">Update</h1>
              </div>
              <div class="form-group mt-5">
                <div>

                  <label for="number">New Password (user name)*</label>
                  <label for="us" class="text-right float-end">نیا پاس ورڈ</label>
                </div>
                <input type="number" class="form-control d-grid justify-content-center" id="pwd" />
              </div>

              <div class="form-group mt-4">
                <div>
                  <label for="pwd"> Confirm Password* </label>
                  <label for="us" class="text-right float-end  ">پاس ورڈ کی تصدیق کریں۔</label>
                </div>
                <input type="password" placeholder="Please Confirm password" class=" form-control d-grid   justify-content-center" id="pwd" />
              </div>
              <div class="d-grid gap-2 col-6 mx-auto mt-4">
                <button style={{ width: "100%", height: "100%,", textAlign: "center", backgroundColor: " rgb(26, 79, 26)", justifyContent: "center !important", alignItems: "center !important" }} className="btn btn-success" >Update(اپ ڈیٹ)</button>
              </div>

              <div class="d-grid mt-3 justify-content-center">

                <p class="d-grid mt-5 justify-content-center fw-bold text-success">Powered By  Oclits Pvt.Ltd.</p>
              </div>

            </div>
          </div>
          <div class="col"> </div>
        </div>

      </div>


    );
  }

}
export default Update;

























