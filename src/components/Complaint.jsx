import React from "react";
import Logo from './images/gdp.png'

const Complaint = () => {

    return (

        <div class="container   px-2">
        <div class="row  gx-5  ">
            <div class="col"></div>
            <div class="col-4 m-5">
                <div class="p-3 border">
                    <div class=" he">

                        <h1 class="">Add Complaint</h1>
                    </div>
                    <div class="form-group mt-4">

                        <label for="sel1">District*</label>
                        <label for="sel1" class="text-right float-end">ضلع</label>

                        <select class="form-control " id="sel1">
                            <option>please select District</option>
                            <option>one</option>
                            <option>two</option>
                            <option>three</option>
                        </select>
                    </div>
                    <div class="form-group mt-3">
                        <label for="sel1">Tehsil*</label>
                        <label for="us" class="text-right float-end">تحصیل</label>
                        <select class="form-control" id="sel1">
                            <option>please select Tehsil</option>
                            <option>one</option>
                            <option>two</option>
                            <option>three</option>
                        </select>
                    </div>
                    <div class="form-group mt-3">
                        <div>
                            <label for="sel1">Address/Location/Area/Road*</label>
                            <label for="us" class="text-right float-end">پتہ/مقام/علاقہ/سڑک</label>
                        </div>
                        <input type="text" placeholder="Enter Address" class="form-control" id="pwd"/>
                    </div>


                    <div class="form-group mt-3">
                        <label for="sel1">Complaint Type*</label>
                        <label for="us" class="text-right float-end">تحصیل</label>
                        <select class="form-control" id="sel1">
                            <option> Select Type</option>
                            <option>one</option>
                            <option>two</option>
                            <option>three</option>
                        </select>
                    </div>
                    <div class="form-group mt-3">
                        <label for="sel1">Sub-Type*</label>
                        <label for="us" class="text-right float-end">تحصیل</label>
                        <select class="form-control" id="sel1">
                            <option> Select sub Type</option>
                            <option>one</option>
                            <option>two</option>
                            <option>three</option>
                        </select>
                    </div>
                    <div class="form-group mt-3">
                        <div>
                            <label for="sel1">Take pictures*</label>
                            <label for="us" class="text-right float-end">تصاویر اتارو</label>
                        </div>
                        <div>
                            <div class="d-flex flex-row border m-3 p-3 justify-content-between">
                                <div class="p-3 bg-light  "><img src="logo.png" width="30px" alt="" srcset=""/></div>
                                <div class="p-3 bg-light"><img src="logo.png" width="30px" alt="" srcset=""/></div>
                                <div class="p-3 bg-light"><img src="logo.png" width="30px" alt="" srcset=""/></div>
                            </div>
                        </div>
                    </div>

                    <div class="d-grid gap-2 col-6 mx-auto mt-3">
                        <button class="btn " type="submit">SUBMIT (جمع کرائیں)</button>
                    </div>

               
                </div>
            </div>
            <div class="col"> </div>
        </div>
    </div>

    );
}


export default Complaint