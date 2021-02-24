import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { Serverurl } from '../../Common/ServerUrl';


export class form1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            apply_for: "",
            name: "",
            cnic: "",
            gender: "",
            dob: "",
            birth_place: "",
            contact: "",
            religion: "",
            nationality: "",
            blood_group: "",
            cast: "",
            marital_status: "",
            spouse: "",
            address_present: "",
            address_permanent: ""
        }

    }


    handleChangeform1(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ""

        })
    }

    addBackgroundInfo(e) {

        var validation = true;

        if (this.state.date == "") {
            validation = false;
            this.setState({
                errorText: "*Date is required"
            })
        }

        if (this.state.apply_for == "") {
            validation = false;
            this.setState({
                errorText: "*Position applied for is required"
            })
        }

        if (this.state.name == "") {
            validation = false;
            this.setState({
                errorText: "*Name is required"
            })
        }

        if (this.state.cnic == "") {
            validation = false;
            this.setState({
                errorText: "*CNIC is required"
            })
        }

        if (this.state.gender == "") {
            validation = false;
            this.setState({
                errorText: "*Gender is required"
            })
        }

        if (this.state.dob == "") {
            validation = false;
            this.setState({
                errorText: "*Date of Birth is required"
            })
        }

        if (this.state.birth_place == "") {
            validation = false;
            this.setState({
                errorText: "*Birth Place is required"
            })
        }

        if (this.state.contact == "") {
            validation = false;
            this.setState({
                errorText: "*Contact is required"
            })
        }

        if (this.state.religion == "") {
            validation = false;
            this.setState({
                errorText: "*Religion is required"
            })
        }

        if (this.state.nationality == "") {
            validation = false;
            this.setState({
                errorText: "*Nationality is required"
            })
        }

        if (this.state.blood_group == "") {
            validation = false;
            this.setState({
                errorText: "*Blood Group is required"
            })
        }

        if (this.state.cast == "") {
            validation = false;
            this.setState({
                errorText: "*Cast is required"
            })
        }

        if (this.state.marital_status == "") {
            validation = false;
            this.setState({
                errorText: "*Marital Status is required"
            })
        }

        if (this.state.spouse == "") {
            validation = false;
            this.setState({
                errorText: "*Spouse is required"
            })
        }

        if (this.state.address_present == "") {
            validation = false;
            this.setState({
                errorText: "*Address Present is required"
            })
        }

        if (this.state.address_permanent == "") {
            validation = false;
            this.setState({
                errorText: "*Address Permanent is required"
            })
        }



        if (validation == true) {

            var data = {
                date: this.state.date,
                apply_for: this.state.apply_for,
                name: this.state.name,
                cnic: this.state.cnic,
                gender: this.state.gender,
                dob: this.state.dob,
                birth_place: this.state.birth_place,
                contact: this.state.contact,
                religion: this.state.religion,
                nationality: this.state.nationality,
                blood_group: this.state.blood_group,
                cast: this.state.cast,
                marital_status: this.state.marital_status,
                spouse: this.state.spouse,
                address_present: this.state.address_present,
                address_permanent: this.state.address_permanent
            }


            this.setState({
                loading: true
            })
            axios({
                method: 'post',
                url: Serverurl + 'employee_add',
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
                        window.location.href = "/component/form2"
                    }, 3000)
                    console.log('data', res.data)
                    localStorage.setItem("empId", res.data.id)
                    var empid = localStorage.getItem("empId")
                    console.log("id", empid);
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
                {/* <!----------------------------------Background Info-----------------------------------------------------------------> */}

                <div class="row">


                    <div class="col-lg-12">
                        <div class="card shadow mb-4">
                            <div class="card-header py-3" data-toggle="collapse" data-target="#BackgrounInfo" aria-expanded="true"
                                aria-controls="collapseOne">
                                <h6 class="m-0 font-weight-bold text-primary">
                                    Background Information (1 of 7) :
                                    </h6>
                            </div>
                            <div id="BackgrounInfo" class="card-body ">

                                <div class="form-group row">

                                    <div class="col-6">
                                        <label class="col-form-label" for="date">Date</label>
                                        <input name="date" type="date" class="form-control"
                                            placeholder="Date" onChange={this.handleChangeform1.bind(this)} />
                                    </div>

                                    <div class="col-6">
                                        <label class="col-form-label" for="apply_for">Post Applying For</label>
                                        <select name="apply_for" type="text" class="form-control" onChange={this.handleChangeform1.bind(this)}
                                            placeholder="Gender">
                                            <option>Select Post</option>
                                            <option value="Security Guard">Security Guard</option>
                                            <option value="Body Guard">Body Guard</option>
                                        </select>
                                        {/* <!-- <input name="apply_for" type="text" class="form-control" value="apply_for"
                               placeholder="Post Applying For" required> --> */}
                                    </div>
                                </div>

                                <div class="form-group row">

                                    <div class="col-sm-12">
                                        <label class=" col-form-label" for="name">Name(As per CNIC)</label>
                                        <input name="name" type="text" class="form-control"
                                            placeholder="Name In Full As per CNIC" onChange={this.handleChangeform1.bind(this)} />
                                    </div>
                                </div>

                                <div class="form-group row">

                                    <div class="col-sm-6">
                                        <label class="col-form-label" for="cnic">CNIC</label>
                                        <input name="cnic" type="text" pattern="[0-9]{13}"
                                            min="13" max="13" class="form-control" placeholder="CNIC No." onChange={this.handleChangeform1.bind(this)} />
                                    </div>

                                    <div class="col-sm-6">
                                        <label class=" col-form-label" for="Gender">Gender</label>
                                        <select name="gender" type="text" class="form-control"
                                            placeholder="Gender" onChange={this.handleChangeform1.bind(this)}>
                                            <option>Select Gender</option>
                                            <option value="M">Male</option>
                                            <option value="F">Female</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group row">

                                    <div class="col-4">
                                        <label class=" col-form-label" for="dob">D.O.B</label>
                                        <input name="dob" type="date" class="form-control"
                                            placeholder="D.O.B" onChange={this.handleChangeform1.bind(this)} />
                                    </div>

                                    <div class="col-4">
                                        <label class="col-form-label" for="birth_place">Birth Place</label>
                                        <input name="birth_place" type="text" class="form-control"
                                            placeholder="Place Of Birth" onChange={this.handleChangeform1.bind(this)} />
                                    </div>

                                    <div class="col-sm-4">
                                        <label class=" col-form-label" for="contact">Contact</label>
                                        <input name="contact" type="text" class="form-control"
                                            placeholder="03xx1234567" onChange={this.handleChangeform1.bind(this)} />
                                    </div>
                                </div>


                                <div class="form-group row">

                                    <div class="col-6">
                                        <label class=" col-form-label" for="religion">Religion</label>
                                        <input name="religion" type="text" class="form-control"
                                            placeholder="Religion" onChange={this.handleChangeform1.bind(this)} />
                                    </div>

                                    <div class="col-6">
                                        <label class=" col-form-label" for="nationality">Nationality</label>
                                        <input name="nationality" type="text" class="form-control"
                                            placeholder="Nationality" onChange={this.handleChangeform1.bind(this)} />
                                    </div>
                                </div>


                                <div class="form-group row">

                                    <div class="col-sm-6">
                                        <label class="col-form-label" for="blood_group">Blood Group</label>
                                        <select name="blood_group" type="text"
                                            class="form-control" onChange={this.handleChangeform1.bind(this)}>
                                            <option value="A+">A+</option>
                                            <option value="A-">A-</option>
                                            <option value="B+">B+</option>
                                            <option value="B+">B-</option>
                                            <option value="O+">O+</option>
                                            <option value="O-">O-</option>
                                            <option value="AB+">AB+</option>
                                            <option value="AB-">AB-</option>
                                        </select>
                                    </div>

                                    <div class="col-sm-6">
                                        <label class="col-form-label" for="cast">CAST</label>
                                        <input name="cast" type="text" class="form-control"
                                            placeholder="CAST" onChange={this.handleChangeform1.bind(this)} />
                                    </div>
                                </div>

                                <div class="form-group row">

                                    <div class="col-sm-6">
                                        <label class="col-form-label" for="Marital_Status">Marital Status</label>
                                        <select name="marital_status" type="text"
                                            class="form-control" onChange={this.handleChangeform1.bind(this)}>
                                            <option value="Single">Single</option>
                                            <option value="Married">Married</option>
                                            <option value="Divorsed">Divorced</option>
                                            <option value="Widow">Widow</option>
                                        </select>
                                    </div>

                                    <div class="col-sm-6">
                                        <label class=" col-form-label" for="spouse">Spouse Name</label>
                                        <input name="spouse" type="text" class="form-control"
                                            placeholder="Spouse Name" onChange={this.handleChangeform1.bind(this)} />
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <div class="col-sm-6">
                                        <label class=" col-form-label" placeholder="Present Address" for="adrress_present">Address(Present)</label>
                                        <textarea name="address_present" type="text" rows="4"
                                            cols="50" class="form-control" onChange={this.handleChangeform1.bind(this)}></textarea>
                                    </div>

                                    <div class="col-sm-6">
                                        <label class=" col-form-label" for="address_permanent">Address(Permanent)</label>
                                        <textarea name="address_permanent" type="text"
                                            rows="4" cols="50" placeholder="Permanent Address"
                                            class="form-control" onChange={this.handleChangeform1.bind(this)}></textarea>
                                    </div>
                                </div>

                                {this.state.errorText ?
                                    <p style={{ color: 'red' }}>{this.state.errorText}</p>
                                    : null
                                }

                                <div class="form-group row">
                                    <div class="col-lg-4 offset-8">
                                        <a style={{color:"white"}} type="submit" class="btn btn-primary btn-lg btn-block" onClick={this.addBackgroundInfo.bind(this)}>NEXT</a>

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

export default form1
