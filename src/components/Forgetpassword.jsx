import React from "react";
import Logo from './images/gdp.png'

import  {Link} from "react-router-dom";



class Forgetpassword extends React.Component{
    render()
     {
        return(
  
<div class="container   px-2">
<div class="row  gx-5  ">
    <div class="col"></div>
    <div class="col-4 m-4">
        <div class="p-3 border">
            <div class=" he">
            <img src={Logo} alt="" width="40%" height="70%" />
                <h3 class="fw-bold">Forget Password</h3>
            </div>
            <div class="form-group mt-5 ">
                <div>

                    <label for="number">Mobile no.(user name)*</label>
                    <label for="us" class="text-right float-end">(موبائل نمبر (صارف کا نام</label>
                </div>
                <input type="number"  placeholder="03xxxxxxxxxxx" class="form-control d-grid justify-content-center" id="pwd"/>
            </div>


            <div class="d-grid gap-2 col-6 mx-auto mt-4">
                <button class="btn p-2 bg-success bg-gradient text-white" type="submit">Submit (جمع کرائیں)</button>
            </div>

            <div class="d-grid mt-3 justify-content-center">

                <p class="d-grid mt-5 justify-content-center fw-bold text-success">Powered By Oclits Pvt.Ltd.
                </p>
            </div>
       
        </div>
    </div>
    <div class="col"> </div>
</div>

</div>
                    
);
}

}
export default Forgetpassword;