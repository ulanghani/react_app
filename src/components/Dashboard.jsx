import React, { useState } from "react";
import '../App.css';

class Dashboard extends React.Component {
    render() {

        return (
            <div>
     <div class="container-fluid fixed-top bg-dark py-3">
    <div class="row collapse show no-gutters d-flex h-100 position-relative">
        <div class="col-3 px-0 w-sidebar navbar-collapse collapse d-none d-md-flex">

        </div>
        <div class="col px-3 px-md-0">

            <a data-toggle="collapse" href="#" data-target=".collapse" role="button" class="p-1">
            <i class="fas fa-bars"></i>
            </a>
        </div>
    </div>
</div>
<div class="container-fluid px-0 h-100">
    <div class="row vh-100 collapse show no-gutters d-flex h-100 position-relative">
        <div class="col-3 p-0 vh-100 h-100 text-white w-sidebar navbar-collapse collapse d-none d-md-flex sidebar">

            <div class="navbar-dark bg-dark position-fixed h-100 w-sidebar">
                <h6 class="px-3 pt-3">Fixed Menu</h6>
                <ul class="nav flex-column flex-nowrap text-truncate">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Active</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col p-3">
            <h3>Content..</h3>
            <p>Sriracha biodiesel taxidermy organic posinable cardigan, Williamsburg master cleanse hella DIY 90's blog.</p> 

<p>Ethical Kickstarter PBR 
asymmetrical lo-fi. Dreamcatcher street ane fanny pack art party Portland.</p>
        </div>
    </div>
</div>
        </div>
)}}
export default Dashboard