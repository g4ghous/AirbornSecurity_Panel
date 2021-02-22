import React, { Component } from 'react'

export class form7 extends Component {
    render() {
        return (
            <div>
                
    <div class="row">

        <div class="col-lg-12">
            <div class="card shadow mb-4">
                <div class="card-header py-3" data-toggle="collapse" data-target="#witness" aria-expanded="true"
                     aria-controls="collapseOne">
                    <h6 class="m-0 font-weight-bold text-primary">
                        Witness Information (7 of 7)
                    </h6>
                </div>
                <div id="witness" class="card-body ">


                    <h6 class="m-0 font-weight-bold text-primary">
                        Witness No. 1
                    </h6>
                    <div class="form-group row">

                        <div class="col-sm-6">
                            <label class=" col-form-label" for="witness1_name"></label>
                            <input name="witness1_name" value="witness1_name" type="text"
                                   class="form-control" placeholder="Name of Witness 1 "/>
                        </div>
                        <div class="col-sm-6">
                            <label class=" col-form-label" for="witness1_cnic"></label>
                            <input name="witness1_cnic" value="witness1_cnic" type="text"
                                   class="form-control" placeholder="Cnic of Witness 1 "/>
                        </div>
                    </div>

                    <div class="form-group row">

                        <div class="col-sm-6">
                            <label class=" col-form-label" for="witness1_present_address">Present Address of Witness
                                1</label>
                            <textarea name="witness1_present_address" value="witness1_present_address"
                                      type="text" rows="2" cols="50" class="form-control"
                                      placeholder="Present Address of Witness 1"></textarea>
                        </div>

                        <div class="col-sm-6">
                            <label class=" col-form-label" for="witness1_permanent_address">Permanent Address of Witness
                                1</label>
                            <textarea name="witness1_permanent_address" value="witness1_permanent_address"
                                      type="text" rows="2" cols="50" class="form-control"
                                      placeholder="Permanent Address of Witness 1"></textarea>
                        </div>
                    </div>


                    <h6 class="m-0 font-weight-bold text-primary">
                        Witness No. 2
                    </h6>
                    <div class="form-group row">

                        <div class="col-sm-6">
                            <label class=" col-form-label" for="witness1_name"></label>
                            <input name="witness2_name" value="witness2_name" type="text"
                                   class="form-control" placeholder="Name of Witness 2 "/>
                        </div>
                        <div class="col-sm-6">
                            <label class=" col-form-label" for="witness2_cnic"></label>
                            <input name="witness2_cnic" value="witness2_cnic" type="text"
                                   class="form-control" placeholder="Cnic of Witness 2 "/>
                        </div>
                    </div>

                    <div class="form-group row">

                        <div class="col-sm-6">
                            <label class=" col-form-label" for="witness2_present_address">Present Address of Witness
                                1</label>
                            <textarea name="witness2_present_address" value="witness2_present_address"
                                      type="text" rows="2" cols="50" class="form-control"
                                      placeholder="Present Address of Witness 2"></textarea>
                        </div>

                        <div class="col-sm-6">
                            <label class=" col-form-label" for="witness2_permanent_address">Permanent Address of Witness
                                2</label>
                            <textarea name="witness2_permanent_address" value="witness2_permanent_address"
                                      type="text" rows="2" cols="50" class="form-control"
                                      placeholder="Permanent Address of Witness 2"></textarea>
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-lg-4 offset-8">
                            <a href="/component/gridBusinessUsers" type="submit" class="btn btn-primary btn-lg btn-block">SAVE</a>
                            
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

export default form7
