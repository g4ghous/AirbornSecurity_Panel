import React, { Component } from 'react'

export class form4 extends Component {
    render() {
        return (
            <div>
                
    <div class="row">

        <div class="col-lg-12">
            <div class="card shadow mb-4">
                <div class="card-header py-3" data-toggle="collapse" data-target="#experience" aria-expanded="true"
                     aria-controls="collapseOne">
                    <h6 class="m-0 font-weight-bold text-primary">
                        Experience Info (4 of 7)
                    </h6>
                </div>
                <div id="experience" class="card-body  ">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                            <tr class="bg-gradient-light">
                                <th>Name Of Organization</th>
                                <th>Title Held</th>
                                <th>From</th>
                                <th>to</th>

                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td><input name="organization1" value="organization1" type="text"
                                           class="form-control" required placeholder="Organization"/></td>
                                <td><input name="position1" value="position1" type="text"
                                           class="form-control" required placeholder="Position"/></td>
                                <td><input name="from1" value="from1" type="date" class="form-control"
                                           required placeholder="From"/></td>
                                <td><input name="to1" value="to1" type="date" class="form-control" required
                                           placeholder="To"/></td>

                            </tr>
                            <tr>
                                <td><input name="organization2" value="organization2" type="text"
                                           class="form-control" placeholder="Organization"/></td>
                                <td><input name="position2" value="position2" type="text"
                                           class="form-control" placeholder="Position"/></td>
                                <td><input name="from2" value="from2" type="date" class="form-control"
                                           placeholder="From"/></td>
                                <td><input name="to2" value="to2" type="date" class="form-control"
                                           placeholder="To"/></td>

                            </tr>
                            <tr>
                                <td><input name="organization3" value="organization3" type="text"
                                           class="form-control" placeholder="Organization"/></td>
                                <td><input name="position3" type="text" class="form-control" placeholder="Position"/>
                                </td>
                                <td><input name="from3" value="from3" type="date" class="form-control"
                                           placeholder="From"/></td>
                                <td><input name="to3" value="to3" type="date" class="form-control"
                                           placeholder="To"/></td>

                            </tr>
                            <tr>
                                <td><input name="organization4" value="organization4" type="text"
                                           class="form-control" placeholder="Organization"/></td>
                                <td><input name="position4" type="text" class="form-control" placeholder="Position"/>
                                </td>
                                <td><input name="from4" value="from4" type="date" class="form-control"
                                           placeholder="From"/></td>
                                <td><input name="to4" value="to4" type="date" class="form-control"
                                           placeholder="To"/></td>

                            </tr>
                            <tr>
                                <td><input name="organization5" value="organization5" type="text"
                                           class="form-control" placeholder="Organization"/></td>
                                <td><input name="position5" type="text" class="form-control" placeholder="Position"/>
                                </td>
                                <td><input name="from5" value="from5" type="date" class="form-control"
                                           placeholder="From"/></td>
                                <td><input name="to5" value="to5" type="date" class="form-control"
                                           placeholder="To"/></td>

                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="form-group row">
                        <div class="col-lg-4 offset-8">
                            <a href="/component/form5" type="submit" class="btn btn-primary btn-lg btn-block">NEXT</a>
                            
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

export default form4
