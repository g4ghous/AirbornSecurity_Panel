import avatar2 from '../component/assets/images/users/avatar2.jpg';
import React, { Component } from 'react';
import { Serverurl, Serverurlimg } from '../Common/ServerUrl';
import axios from 'axios';
import $ from 'jquery';

export class GridBusinessUsers extends Component {
    
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
                                            <h4>List Users</h4>
                                        </div>
                                        <div class="button-align">
                                            <a href="/component/createBusinessUser" type="button" class="btn btn-danger waves-effect waves-light submit-button" >Add Customer</a>
                                        </div>
                                    </div>
                                    <div class="table-3">
                                        <table id="datatable2" class="table">
                                            <thead>
                                                <tr>
                                                    
                                                    <th>Name</th>
                                                    <th>CNIC</th>
                                                    <th>Gender</th>
                                                    <th>DOB</th>
                                                    <th>Actions</th>

                                                </tr>
                                            </thead>


                                            <tbody>
                                                
                                                    <tr >
                                                        
                                                        <td>ghous</td>
                                                        <td>42101-1234567-8</td>
                                                        <td>Male</td>
                                                        <td>01-01-1990</td>
                                                         <td>
                                                            <div class="icon-pad">
                                                                <a href="/component/updateBusinessUser"><i className="fas fa-pencil-alt"></i></a>
                                                                <a href="/component/ViewSystemBusinessUser"><i className="fas fa-eye"></i></a>
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

export default GridBusinessUsers

