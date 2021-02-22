import React, { Component } from 'react'

export class form3 extends Component {
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
                            <input name="primary_school" value="primary_school" type="text"
                                   class="form-control" placeholder="Primary Education" required/>
                        </div>

                        <div class="col-6">
                            <label class="col-form-label" for="primary_date">Date</label>
                            <input name="primary_date" value="primary_date" type="date"
                                   class="form-control" placeholder="Primary Education Date" required/>
                        </div>
                    </div>

                    <div class="form-group row">

                        <div class="col-6">
                            <label class="col-form-label" for="secondary_school">Secondary Education</label>
                            <input name="secondary_school" value="secondary_school" type="text"
                                   class="form-control" placeholder="Tertiary Education" required/>
                        </div>

                        <div class="col-6">
                            <label class="col-form-label" for="secondary_date">Date</label>
                            <input name="secondary_date" value="secondary_date" type="date"
                                   class="form-control" placeholder="Secondary Education Date" required/>
                        </div>
                    </div>

                    <div class="form-group row">

                        <div class="col-6">
                            <label class="col-form-label" for="tertiary_education">Secondary Education</label>
                            <input name="tertiary_school" value="tertiary_school" type="text"
                                   class="form-control" placeholder="Tertiary Education"/>
                        </div>

                        <div class="col-6">
                            <label class="col-form-label" for="secondary_date">Date</label>
                            <input name="tertiary_date" value="tertiary_date" type="date"
                                   class="form-control" placeholder="Tertiary Education Date"/>
                        </div>
                    </div>


                    <div class="form-group row">

                        <div class="col-sm-12">
                            <label class=" col-form-label" for="profession">Profession</label>
                            <input name="profession" value="profession" type="text" class="form-control"
                                   required placeholder="Profession"/>
                        </div>
                    </div>


                    <div class="form-group row">
                        <div class="col-lg-4 offset-8">
                            <a href="/component/form4" type="submit" class="btn btn-primary btn-lg btn-block">NEXT</a>
                            
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
