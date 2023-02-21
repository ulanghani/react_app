// import React from "react";

import { useFormik } from "formik";
import React from "react";
import Logo from './images/gdp.png'

import  {Link} from "react-router-dom";

class Register extends React.Component {
  render()
   {



    return (


        <div class="container   px-2">
            <div class="row  gx-5  ">
                <div class="col"></div>
                <div class="col-4 m-3">
                    <div class="p-3 border border-success">
                        <form >
                            <div class=" he">
                                <img src={Logo} alt=""width="40%" height="70%"  />
                                <h1 class="fw-bold" >Register</h1>
                            </div>
                            <div class="form-group">
                                <div>
                                    <label htmlFor="usr" className="text-right">Full name*: </label>
                                    <label htmlFor="usr" className="text-right float-end">پورا نام</label>
                                </div>
                                <input type="text" name='names' className="form-control" id="usr" />
                            </div>
                            <div className="form-group ">
                                <div>
                                    <label htmlFor="usr">CNIC*</label>
                                    <label htmlFor="us" name="number" className="text-right float-end">شناختی کارڈ</label>
                                </div>
                                <input type="number" className="form-control" id="usr" />
                            </div>

                            <div className="form-group">
                                <div>
                                    <label htmlFor="sel1">District*</label>
                                    <label htmlFor="sel1" className="text-right float-end">ضلع</label>
                                </div>
                                <select className="form-control" id="sel1">
                                    <option>please select District</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="sel1">Tehsil*</label>
                                <label htmlFor="us" className="text-right float-end">تحصیل</label>
                                <select className="form-control" id="sel1">
                                    <option>please select Tehsil</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="sel1">Type*قسم</label>
                                <select className="form-control" id="sel1">
                                    <option>please select type</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <div>

                                    <label htmlFor="number">Mobile No. (user name)*)</label>
                                    <label htmlFor="number" for="us" className="text-right float-end">(موبائل نمبر (صارف کا نام</label>
                                </div>
                                <input type="number" name='number1' className="form-control" id="pwd" />
                            </div>
                            <div class="form-group">
                                <div>
                                    <label htmlFor="email" >Email*</label>
                                    <label htmlFor="us" className="text-right float-end">ای میل</label>
                                </div>
                                <input type="email" name='email' className="form-control" id="pwd" />
                            </div>
                            <div class="form-group">
                                <div>
                                    <label htmlFor="password">Password* </label>
                                    <label htmlFor="us" className="text-right float-end  ">پاس ورڈ</label>
                                </div>
                                <input type="password" name="password" className="form-control" id="pwd" />
                            </div>

                            <div class="d-grid gap-2 col-6 mx-auto mt-3" >
                                <button style={{width:"100%" ,height:"100%,",textAlign: "center",justifyContent:"center !important",alignItems:"center !important"}} className="btn btn-success" type="submit">SIGNUP</button>

                            </div>
                        </form>
                    </div>
                </div>
                <div class="col"> </div>
            </div>
        </div>



    );
}
}

export default Register


