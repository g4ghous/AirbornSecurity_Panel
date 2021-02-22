import avatar2 from '../component/assets/images/users/avatar2.jpg';
import React, { Component } from 'react';
import { Serverurl, Serverurlimg } from '../Common/ServerUrl';
import axios from 'axios';
import $ from 'jquery';

export class GridVehicles extends Component {
    
    render() {
        return (
            <div>
                <div className="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-11 col-sm-11">
                            <div class="card">
                                <div class="card-body table-responsive">
                                    <div className="list-head-btn">
                                        <div className="head">
                                            <h4>List Vehicles</h4>
                                        </div>
                                        <div class="button-align">
                                            <a href="/component/createVehicle" type="button" class="btn btn-danger waves-effect waves-light submit-button" >Add Vehicle</a>
                                        </div>
                                    </div>
                                    <div class="table-3">
                                        <table id="datatable2" class="table">
                                            <thead>
                                                <tr>
                                                    <th>Image</th>
                                                    <th>Name</th>
                                                    <th>Year</th>
                                                    <th>Fuel Type</th>
                                                    <th>Transmission</th>
                                                    <th>CC</th>
                                                    <th>Price Without Driver</th>
                                                    <th>Price With Driver</th>
                                                    <th>Registration No.</th>
                                                    
                                                    <th>Actions</th>

                                                </tr>
                                            </thead>


                                            <tbody>
                                                
                                                    <tr >
                                                        
                                                        <td></td>
                                                        <td>Civic</td>
                                                        <td>2018</td>
                                                        <td>Petrol</td>
                                                        <td>auto</td>
                                                        <td>1500</td>
                                                        <td>6000</td>
                                                        <td>7000</td>
                                                        <td>abc-123</td>

                                                        
                                                         <td>
                                                            <div class="icon-pad">
                                                                <a href="/component/updateVehicle"><i className="fas fa-pencil-alt"></i></a>
                                                                <a href="/component/ViewVehicle"><i className="fas fa-eye"></i></a>
                                                                <i className="fas fa-trash-alt"></i>
                                                            </div>
                                                        </td> 
                                                    </tr>
                                                

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GridVehicles

