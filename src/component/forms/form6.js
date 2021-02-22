import React, { Component } from 'react'

export class form6 extends Component {
    render() {
        return (
            <div>
                <form action="" method="POST" id="submit-medical">
                    <div class="row">

                        <div class="col-lg-12">
                            <div class="card shadow mb-4">
                                <div class="card-header py-3" data-toggle="collapse" data-target="#medical" aria-expanded="true"
                                    aria-controls="collapseOne">
                                    <h6 class="m-0 font-weight-bold text-primary">
                                        Medical Information (6 of 7)
                    </h6>
                                </div>
                                <div id="medical" class="card-body  ">


                                    <div class="form-group row">

                                        <div class="col-sm-12">
                                            <label class=" col-form-label" for="medication">Applicant is on any Medication</label>
                                            <textarea name="medication" value="medication" type="text" rows="2" cols="50"
                                                class="form-control" placeholder="Applicant is on any Medication"></textarea>
                                        </div>
                                    </div>

                                    <div class="form-group row">

                                        <div class="col-sm-12">
                                            <label class=" col-form-label" for="illness">Suffering From Illness</label>
                                            <textarea name="illness" value="illness" type="text" rows="2" cols="50"
                                                class="form-control" placeholder="Suffering From Illness"></textarea>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <div class="col-lg-4 offset-8">
                                            <a href="/component/form7" type="submit" class="btn btn-primary btn-lg btn-block">NEXT</a>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default form6
