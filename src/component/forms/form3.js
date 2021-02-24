import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { Serverurl } from '../../Common/ServerUrl';

export class form3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            primary_school: "",
            primary_date: "",
            secondary_school: "",
            secondary_date: "",
            profession: "",
            emp_id: localStorage.getItem("empId")
        }

    }


    handleChangeform1(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ""

        })
    }

    Education(e) {

        var validation = true;

        if (this.state.primary_school == "") {
            validation = false;
            this.setState({
                errorText: "*Primary School is required"
            })
        }

        if (this.state.primary_date == "") {
            validation = false;
            this.setState({
                errorText: "*Primary Education Date is required"
            })
        }

        if (this.state.secondary_school == "") {
            validation = false;
            this.setState({
                errorText: "*Secondary School is required"
            })
        }

        if (this.state.secondary_date == "") {
            validation = false;
            this.setState({
                errorText: "*Secondary Education Date is required"
            })
        }

        if (this.state.profession == "") {
            validation = false;
            this.setState({
                errorText: "*Profession is required"
            })
        }




        if (validation == true) {

            var data = {
                primary_school: this.state.primary_school,
                primary_date: this.state.primary_date,
                secondary_school: this.state.secondary_school,
                secondary_date: this.state.secondary_date,
                profession: this.state.profession,
                emp_id: this.state.emp_id
            }


            this.setState({
                loading: true
            })
            axios({
                method: 'post',
                url: Serverurl + 'education_add',
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
                        window.location.href = "/component/form4"
                    }, 3000)
                })
                .catch((err) => {
                    console.log("res", err)

                    // var error_message = err.response.data.error.message;

                    // console.log("error", error_message[0])

                    console.log({ err });

                })

        }
    }
    render() {
        return (
            <div>

                <div class="row">

                    <div class="col-lg-12">
                        <div class="card shadow mb-4">
                            <div class="card-header py-3" data-toggle="collapse" data-target="#education" aria-expanded="true"
                                aria-controls="collapseOne">
                                <h6 class="m-0 font-weight-bold text-primary">
                                    Educational Info (3 of 7) :
                    </h6>
                            </div>
                            <div id="education" class="card-body  ">

                                <div class="form-group row">

                                    <div class="col-6">
                                        <label class="col-form-label" for="primary_school">Primary Education</label>
                                        <input name="primary_school" type="text"
                                            class="form-control" placeholder="Primary Education" onChange={this.handleChangeform1.bind(this)}/>
                                    </div>

                                    <div class="col-6">
                                        <label class="col-form-label" for="primary_date">Date</label>
                                        <input name="primary_date" type="date"
                                            class="form-control" placeholder="Primary Education Date" onChange={this.handleChangeform1.bind(this)}/>
                                    </div>
                                </div>

                                <div class="form-group row">

                                    <div class="col-6">
                                        <label class="col-form-label" for="secondary_school">Secondary Education</label>
                                        <input name="secondary_school" type="text"
                                            class="form-control" placeholder="Tertiary Education" onChange={this.handleChangeform1.bind(this)}/>
                                    </div>

                                    <div class="col-6">
                                        <label class="col-form-label" for="secondary_date">Date</label>
                                        <input name="secondary_date" type="date"
                                            class="form-control" placeholder="Secondary Education Date" onChange={this.handleChangeform1.bind(this)}/>
                                    </div>
                                </div>

                                <div class="form-group row">

                                    <div class="col-6">
                                        <label class="col-form-label" for="tertiary_education">Secondary Education</label>
                                        <input name="tertiary_school" type="text"
                                            class="form-control" placeholder="Tertiary Education" onChange={this.handleChangeform1.bind(this)}/>
                                    </div>

                                    <div class="col-6">
                                        <label class="col-form-label" for="secondary_date">Date</label>
                                        <input name="tertiary_date" type="date"
                                            class="form-control" placeholder="Tertiary Education Date" onChange={this.handleChangeform1.bind(this)}/>
                                    </div>
                                </div>


                                <div class="form-group row">

                                    <div class="col-sm-12">
                                        <label class=" col-form-label" for="profession">Profession</label>
                                        <input name="profession" type="text" class="form-control"
                                            placeholder="Profession" onChange={this.handleChangeform1.bind(this)}/>
                                    </div>
                                </div>


                                <div class="form-group row">
                                    <div class="col-lg-4 offset-8">
                                        <a onClick={this.Education.bind(this)} type="submit" class="btn btn-primary btn-lg btn-block">NEXT</a>

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

export default form3
