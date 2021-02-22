import React, { Component } from 'react'

export class form5 extends Component {
    render() {
        return (
            <div>

                <div class="row">

                    <div class="col-lg-12">
                        <div class="card shadow mb-4">
                            <div class="card-header py-3" data-toggle="collapse" data-target="#physical" aria-expanded="true"
                                aria-controls="collapseOne">
                                <h6 class="m-0 font-weight-bold text-primary">
                                    Physical Information (5 of 7)
                    </h6>
                            </div>
                            <div id="physical" class="card-body  ">

                                <div class="form-group row">

                                    <div class="col-4">
                                        <label class="col-form-label" for="height">Height</label>
                                        <input name="height" value="height" type="text" class="form-control"
                                            placeholder="Height" required />
                                    </div>

                                    <div class="col-4">
                                        <label class="col-form-label" for="weight">Weight</label>
                                        <input name="weight" value="weight" type="text" class="form-control"
                                            placeholder="Weight in KG" required />
                                    </div>

                                    <div class="col-4">
                                        <label class="col-form-label" for="hair_eye_color">Hair/Eye Color</label>
                                        <input name="hair_eye_color" value="hair_eye_color" type="text"
                                            class="form-control" placeholder="Brown/Black" required />
                                    </div>
                                </div>

                                <div class="form-group row">

                                    <div class="col-sm-12">
                                        <label class=" col-form-label" for="disabilities">Dissabilities</label>
                                        <textarea name="disabilities" value="disabilities" type="text" rows="2"
                                            cols="50" class="form-control" placeholder="Dissabilities"></textarea>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <div class="col-lg-4 offset-8">
                                        <a href="/component/form6" type="submit" class="btn btn-primary btn-lg btn-block">NEXT</a>

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

export default form5
