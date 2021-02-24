import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { Serverurl } from '../../Common/ServerUrl';

export class form2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            next_of_kin: "",
            kin_contact: "",
            kin_address: "",
            emp_id: localStorage.getItem("empId")
        }

    }


    handleChangeform1(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ""

        })
    }

    Emergency(e) {

        var validation = true;

        if (this.state.next_of_kin == "") {
            validation = false;
            this.setState({
                errorText: "*Next of Kin is required"
            })
        }

        if (this.state.kin_contact == "") {
            validation = false;
            this.setState({
                errorText: "*Contact is required"
            })
        }

        if (this.state.kin_address == "") {
            validation = false;
            this.setState({
                errorText: "*Address is required"
            })
        }




        if (validation == true) {

            var data = {
                next_of_kin: this.state.next_of_kin,
                kin_contact: this.state.kin_contact,
                kin_address: this.state.kin_address,
                emp_id: this.state.emp_id
            }


            this.setState({
                loading: true
            })
            axios({
                method: 'post',
                url: Serverurl + 'emergency_add',
                data: data,
                headers: {
                    'Authorization': 'Bearer' + " " + localStorage.getItem('token'),
                },
                config: {
                    headers: { 'Content-Type': 'application/json' }
                }
            })
                .then((res) => {
                    console.log('res', res.data)
                    if (res.status === "true") {
                        swal("Poof! Your imaginary file has been deleted!", {
                            icon: "success",
                        });
                        this.setState({
                            loading: true
                        })
                    }
                    setTimeout(() => {
                        window.location.href = "/component/form3"
                    }, 3000)
                })
                .catch((err) => {
                    console.log("res", err)

                    // var error_message = err.response.data.error.message;

                    // console.log("error", error_message[0])

                    console.log({err});

                })

        }
    }
    render() {
        return (
            <div>

                <div class="row">

                    <div class="col-lg-12">
                        <div class="card shadow mb-4">
                            <div class="card-header py-3" data-toggle="collapse" data-target="#emergency" aria-expanded="true"
                                aria-controls="collapseOne">
                                <h6 class="m-0 font-weight-bold text-primary">
                                    In Case Of Emergency (2 of 7) :
                    </h6>
                            </div>
                            <div id="emergency" class="card-body  ">

                                <div class="form-group row">

                                    <div class="col-6">
                                        <label class="col-form-label" for="next_of_kin">Next Of Kin</label>
                                        <input name="next_of_kin" type="text" class="form-control"
                                            placeholder="Next Of Kin" onChange={this.handleChangeform1.bind(this)} />
                                    </div>

                                    <div class="col-6">
                                        <label class="col-form-label" for="kin_contact">Contact</label>
                                        <input name="kin_contact" type="text" class="form-control"
                                            placeholder="Contact of Kin" onChange={this.handleChangeform1.bind(this)} />
                                    </div>
                                </div>

                                <div class="form-group row">

                                    <div class="col-sm-12">
                                        <label class=" col-form-label" for="kin_address">Address</label>
                                        <textarea name="kin_address" type="text" rows="2" cols="50"
                                            class="form-control" onChange={this.handleChangeform1.bind(this)} placeholder="Address"></textarea>
                                    </div>
                                </div>

                                {this.state.errorText ?
                                    <p style={{ color: 'red' }}>{this.state.errorText}</p>
                                    : null
                                }

                                <div class="form-group row">
                                    <div class="col-lg-4 offset-8">
                                        <a style={{color:"white"}} type="submit" class="btn btn-primary btn-lg btn-block" onClick={this.Emergency.bind(this)}>NEXT</a>

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

export default form2
