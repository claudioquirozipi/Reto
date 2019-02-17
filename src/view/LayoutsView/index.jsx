import React, { Component } from 'react';

//Components
import Paralax from '../paralax';

class LayoutsView extends Component {
    render() {
        return (
            <div>
                <Paralax 
                    titleProps="Layouts"
                    imgUrl="https://www.proandroid.com/wp-content/uploads/2018/09/fondo-pantalla-huawei.jpg"
                />
                <hr />
                <h2 className="sub-header mt-5">Interesting layouts and elements</h2>
                <div className="row mb-3">
                    <div className="col-lg-6">

                        <div className="card mb-3">
                            <div className="card-header">
                                Bye .well, .panel &amp; .thumbnail
                    </div>
                            <div className="card-body">
                                <h4 className="card-title">Replaced with .card</h4>
                                <p className="card-text">All of these Bootstrap 3.x components have been dropped entirely for the new card component.</p>
                                <button type="button" className="btn btn-secondary btn-lg">Large</button>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6">
                        {/* <!-- Nav tabs --> */}
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" href="#home1" role="tab" data-toggle="tab">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#profile1" role="tab" data-toggle="tab">Profile</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#messages1" role="tab" data-toggle="tab">Messages</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#settings1" role="tab" data-toggle="tab">Settings</a>
                            </li>
                        </ul>

                        {/* <!-- Tab panes --> */}
                        <div className="tab-content">
                            <br />
                            <div role="tabpanel" className="tab-pane active" id="home1">
                                <h4>Home</h4>
                                <p>
                                    1. These Bootstrap 4 Tabs work basically the same as the Bootstrap 3.x tabs.
                            <br />
                                    <br />
                                    <button className="btn btn-primary-outline btn-lg">Wow</button>
                                </p>
                            </div>
                            <div role="tabpanel" className="tab-pane" id="profile1">
                                <h4>Pro</h4>
                                <p>
                                    2. Tabs are helpful to hide or collapse some addtional content.
                        </p>
                            </div>
                            <div role="tabpanel" className="tab-pane" id="messages1">
                                <h4>Messages</h4>
                                <p>
                                    3. You can really put whatever you want into the tab pane.
                        </p>
                            </div>
                            <div role="tabpanel" className="tab-pane" id="settings1">
                                <h4>Settings</h4>
                                <p>
                                    4. Some of the Bootstrap 3.x components like well and panel have been dropped for the new card component.
                        </p>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="col-lg-6">
                        <div className="card card-default card-body">
                            <ul id="tabsJustified" className="nav nav-tabs nav-justified">
                                <li className="nav-item">
                                    <div className="nav-link" href="" data-target="#tab1" data-toggle="tab">List</div>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link active" href="" data-target="#tab2" data-toggle="tab">Profile</div>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link" href="" data-target="#tab3" data-toggle="tab">More</div>
                                </li>
                            </ul>
                            {/* <!--/tabs--> */}
                            <br />
                            <div id="tabsJustifiedContent" className="tab-content">
                                <div className="tab-pane" id="tab1">
                                    <div className="list-group">
                                        <div href="" className="list-group-item"><span className="float-right label label-success">51</span> Home Link</div>
                                        <div href="" className="list-group-item"><span className="float-right label label-success">8</span> Link 2</div>
                                        <div href="" className="list-group-item"><span className="float-right label label-success">23</span> Link 3</div>
                                        <div href="" className="list-group-item text-muted">Link n..</div>
                                    </div>
                                </div>
                                <div className="tab-pane active" id="tab2">
                                    <div className="row">
                                        <div className="col-sm-7">
                                            <h4>Profile Section</h4>
                                            <p>Imagine creating this simple user profile inside a tab card.</p>
                                        </div>
                                        <div className="col-sm-5"><img src="//placehold.it/170" className="float-right img-responsive img-rounded" alt="hola imagen" /></div>
                                    </div>
                                    <hr />
                                    <button className="btn btn-info btn-block">Read More Profiles</button>
                                    <div className="spacer5"></div>
                                </div>
                                <div className="tab-pane" id="tab3">
                                    <div className="list-group">
                                        <div  className="list-group-item"><span className="float-right label label-info label-pill">44</span> <code>.panel</code> is now <code>.card</code></div>
                                        <div  className="list-group-item"><span className="float-right label label-info label-pill">8</span> <code>.nav-justified</code> is deprecated</div>
                                        <div  className="list-group-item"><span className="float-right label label-info label-pill">23</span> <code>.badge</code> is now <code>.label-pill</code></div>
                                        <div  className="list-group-item text-muted">Message n..</div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--/tabs content--> */}
                        </div>
                        {/* <!--/card--> */}
                    </div>
                    {/* <!--/col--> */}
                    <div className="col-lg-6">
                        <div id="accordion" role="tablist" aria-multiselectable="true">
                            <div className="card">
                                <div className="card-header" role="tab" id="headingOne" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Accordion example
                    </div>
                                <div id="collapseOne" className="card-block collapse in" role="tabpanel" aria-labelledby="headingOne">
                                    <p>This is a Bootstrap 4 accordion that uses the <code>.card</code> classes instead of <code>.panel</code>. The single-open section aspect is not working because the parent option (dependent on .panel) has not yet been finalized in BS 4 alpha. </p>
                                </div>
                                <div className="card-header" role="tab" id="headingTwo" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Mobile-first
                    </div>
                                <div id="collapseTwo" className="card-block collapse" role="tabpanel" aria-labelledby="headingTwo">
                                    <p>Just like it's predecesor, Bootstrap 4 is mobile-first so that you start by designing for smaller devices such as smartphones and tablets, then proceed to laptop and desktop layouts.</p>
                                </div>
                                <div className="card-header" role="tab" id="headingThree" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Built for CSS3
                    </div>
                                <div id="collapseThree" className="card-block collapse" role="tabpanel" aria-labelledby="headingThree">
                                    <p>Bootstrap employs a handful of important global styles and settings that you’ll need to be aware of when using it, all of which are almost exclusively geared towards the normalization of cross browser styles.</p>
                                </div>
                            </div>
                        </div>
                        <p className="mt-4">
                            <a href="/go/KrUO8QpyXP/bootstrao-4-dashboard" target="_ext">Get this Bootstrap 4 admin dashboard at Codeply</a>
                        </p>
                    </div>
                    {/* <!--/col--> */}
                </div>
            </div>
        );
    }
}

export default LayoutsView;