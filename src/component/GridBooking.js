import avatar2 from '../component/assets/images/users/avatar2.jpg';
import React, { Component } from 'react';
import { Serverurl, Serverurlimg } from '../Common/ServerUrl';
import axios from 'axios';
import $ from 'jquery';

export class GridBooking extends Component {
    
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
                                            <h4>List Bookings</h4>
                                        </div>
                                        <div class="button-align">
                                            {/* <a href="/component/createBusinessUser" type="button" class="btn btn-danger waves-effect waves-light submit-button" >Add Booking</a> */}
                                        </div>
                                    </div>
                                    <div class="table-3">
                                        <table id="datatable2" class="table">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Phone</th>
                                                    <th>Car</th>
                                                    <th>Registration No.</th>
                                                    <th>Days</th>
                                                    <th>Price</th>
                                                    <th>Driver</th>
                                                    <th>Status</th>
                                                    
                                                    <th>Actions</th>

                                                </tr>
                                            </thead>


                                            <tbody>
                                                
                                                    <tr >
                                                        
                                                        <td>ghous</td>
                                                        <td>0312-1234567</td>
                                                        <td>Civic</td>
                                                        <td>abc-123</td>
                                                        <td>2</td>
                                                        <td>6000</td>
                                                        <td>true</td>
                                                        <td>inprogress</td>

                                                        
                                                         <td>
                                                            <div class="icon-pad">
                                                                <a href="/component/updateBooking"><i className="fas fa-pencil-alt"></i></a>
                                                                <a href="/component/ViewBooking"><i className="fas fa-eye"></i></a>
                                                                {/* <i className="fas fa-trash-alt"></i> */}
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

export default GridBooking

