import React, { Component } from 'react'

export class form1 extends Component {
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
                                    {/* <!-- <div class="form-group row">
                <div class="col-6">
                            <label class="col-form-label" for="date">ID</label>
                            <input name="id" type="text" class="form-control" value="id"
                                placeholder="ABS-XXXX" required>
                </div>
                </div> --> */}
                                    <div class="form-group row">

                                        <div class="col-6">
                                            <label class="col-form-label" for="date">Date</label>
                                            <input name="date" type="date" class="form-control" value="date"
                                                placeholder="Date" required />
                                        </div>

                                        <div class="col-6">
                                            <label class="col-form-label" for="apply_for">Post Applying For</label>
                                            <select value="apply_for" name="apply_for" type="text" class="form-control" required
                                                placeholder="Gender">
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
                                            <input name="name" type="text" class="form-control" value="name" required
                                                placeholder="Name In Full As per CNIC" />
                                        </div>
                                    </div>

                                    <div class="form-group row">

                                        <div class="col-sm-6">
                                            <label class="col-form-label" for="cnic">CNIC</label>
                                            <input name="cnic" value="cnic" type="text" pattern="[0-9]{13}"
                                                min="13" max="13" required class="form-control" placeholder="CNIC No." />
                                        </div>

                                        <div class="col-sm-6">
                                            <label class=" col-form-label" for="Gender">Gender</label>
                                            <select value="gender" name="gender" type="text" class="form-control" required
                                                placeholder="Gender">
                                                <option value="M">Male</option>
                                                <option value="F">Female</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-group row">

                                        <div class="col-4">
                                            <label class=" col-form-label" for="dob">D.O.B</label>
                                            <input value="dob" name="dob" type="date" required class="form-control"
                                                placeholder="D.O.B" />
                                        </div>

                                        <div class="col-4">
                                            <label class="col-form-label" for="birth_place">Birth Place</label>
                                            <input value="birth_place" name="birth_place" type="text" class="form-control"
                                                required placeholder="Place Of Birth" />
                                        </div>

                                        <div class="col-sm-4">
                                            <label class=" col-form-label" for="contact">Contact</label>
                                            <input value="contact" name="contact" type="text" class="form-control" required
                                                placeholder="03xx1234567" />
                                        </div>
                                    </div>


                                    <div class="form-group row">

                                        <div class="col-6">
                                            <label class=" col-form-label" for="religion">Religion</label>
                                            <input value="religion" name="religion" type="text" required
                                                class="form-control" placeholder="Religion" />
                                        </div>

                                        <div class="col-6">
                                            <label class=" col-form-label" for="nationality">Nationality</label>
                                            <input name="nationality" value="nationality" type="text" class="form-control"
                                                required placeholder="Nationality" />
                                        </div>
                                    </div>


                                    <div class="form-group row">

                                        <div class="col-sm-6">
                                            <label class="col-form-label" for="blood_group">Blood Group</label>
                                            <select name="blood_group" value="blood_group" type="text" required
                                                class="form-control">
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
                                            <input name="cast" value="cast" type="text" class="form-control" required
                                                placeholder="CAST" />
                                        </div>
                                    </div>

                                    <div class="form-group row">

                                        <div class="col-sm-6">
                                            <label class="col-form-label" for="Marital_Status">Marital Status</label>
                                            <select value="marital_status" name="marital_status" type="text" required
                                                class="form-control">
                                                <option value="Single">Single</option>
                                                <option value="Married">Married</option>
                                                <option value="Divorsed">Divorced</option>
                                                <option value="Widow">Widow</option>
                                            </select>
                                        </div>

                                        <div class="col-sm-6">
                                            <label class=" col-form-label" for="spouse">Spouse Name</label>
                                            <input name="spouse" value="spouse" type="text" class="form-control" required
                                                placeholder="SPOUSE NAME" />
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <div class="col-sm-6">
                                            <label class=" col-form-label" placeholder="Present Address" for="adrress_present">Address(Present)</label>
                                            <textarea value="address_present" name="address_present" type="text" rows="4"
                                                cols="50" required class="form-control"></textarea>
                                        </div>

                                        <div class="col-sm-6">
                                            <label class=" col-form-label" for="address_permanent">Address(Permanent)</label>
                                            <textarea value="address_permanent" name="address_permanent" type="text"
                                                rows="4" cols="50" placeholder="Permanent Address" required
                                                class="form-control"></textarea>
                                        </div>
                                    </div>


                                    <div class="form-group row">
                                        <div class="col-lg-4 offset-8">
                                            <a href="/component/form2" type="submit" class="btn btn-primary btn-lg btn-block">NEXT</a>
                                            
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
