import React, { Component } from 'react'

export class form2 extends Component {
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
                                        <input name="next_of_kin" value="next_of_kin" type="text" class="form-control"
                                            placeholder="Next Of Kin" required />
                                    </div>

                                    <div class="col-6">
                                        <label class="col-form-label" for="kin_contact">Contact</label>
                                        <input name="kin_contact" value="kin_contact" type="text" class="form-control"
                                            placeholder="Contact of Kin" required />
                                    </div>
                                </div>

                                <div class="form-group row">

                                    <div class="col-sm-12">
                                        <label class=" col-form-label" for="kin_address">Address</label>
                                        <textarea name="kin_address" value="kin_address" type="text" rows="2" cols="50"
                                            class="form-control" required placeholder="Address"></textarea>
                                    </div>
                                </div>


                                <div class="form-group row">
                                    <div class="col-lg-4 offset-8">
                                        <a href="/component/form3" type="submit" class="btn btn-primary btn-lg btn-block">NEXT</a>

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
