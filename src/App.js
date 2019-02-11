import React, { Component } from 'react';
import NavBarView from './view/NavBarView';
import SideBarView from './view/SideBarView';
import FooterView from './view/FooterView';
import ModalView from './view/ModalView';
import CircleThumbnail from './view/CircleThumbnail';
import ReviewCard from './view/ReviewCard';
import DeckedCard from './view/DeckedCard'
import Highlight from './Utils/Highlight';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBarView />
                <div className="container-fluid" id="main">
                    <div className="row row-offcanvas row-offcanvas-left">
                        <SideBarView />
                        {/* <!--/col--> */}

                        <div className="col main pt-5 mt-3">
                            <h1 className="display-4 d-none d-sm-block">
                                Bootstrap 4 Dashboard
            </h1>
                            <p className="lead d-none d-sm-block">Plus off-canvas sidebar, based on Bootstrap v4</p>

                            <div className="alert alert-warning fade collapse" role="alert" id="myAlert">
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                    <span className="sr-only">Close</span>
                                </button>
                                <strong>Holy guacamole!</strong> It's free.. this is an example theme.
            </div>
                            <div className="row mb-3">
                                <ReviewCard color="bg-success" title="Users" data="135" icon="fa fa-user" />
                                <ReviewCard color="bg-danger" title="Posts" data="88" icon="fa fa-plus-square" />
                                <ReviewCard color="bg-info" title="Ads" data="126" icon="fa fa-ad" />
                                <ReviewCard color="bg-warning" title="Badges" data="15" icon="fa fa-award " />

                            </div>
                            Code example:
                            <Highlight code={'<ReviewCard color="bg-success" title="Users" data="135" icon="fa fa-user" />'} />
                            
                            {/* <!--/row--> */}

                            <hr />
                            <div className="row placeholders mb-3">
                                <CircleThumbnail inside="100" title="My text" subtitle="This works!!" />
                                <CircleThumbnail inside="101" title="My text" subtitle="This works!!" />
                                <CircleThumbnail inside="102" title="My text" subtitle="This works!!" />
                                <CircleThumbnail inside="103" title="My text" subtitle="This works!!" />
                            </div>

                            <a id="features"></a>
                            <hr />
                            <p className="lead mt-5">
                                Are you ready for Bootstap 4? It's the 4th generation of this popular responsive framework. Bootstrap 4 will include some interesting
                                new features such as flexbox, 5 grid sizes (now including xl), cards, `em` sizing, CSS normalization (reboot) and larger font
                                sizes.
            </p>
                            <div className="row my-4">
                                <div className="col-lg-3 col-md-4">
                                    <div className="card">
                                        <img className="card-img-top img-fluid" src="//placehold.it/740x180/bbb/fff?text=..." alt="Card image cap" />
                                        <div className="card-body">
                                            <h4 className="card-title">Layouts</h4>
                                            <p className="card-text">Flexbox provides simpler, more flexible layout options like vertical centering.</p>
                                            <a href="#" className="btn btn-primary">Button</a>
                                        </div>
                                    </div>
                                    <div className="card card-inverse bg-inverse mt-3">
                                        <div className="card-body">
                                            <h3 className="card-title">Flexbox</h3>
                                            <p className="card-text">Flexbox is now the default, and Bootstrap 4 supports SASS out of the box.</p>
                                            <a href="#" className="btn btn-outline-secondary">Outline</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-8">
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <thead className="thead-inverse">
                                                <tr>
                                                    <th>#</th>
                                                    <th>Label</th>
                                                    <th>Header</th>
                                                    <th>Column</th>
                                                    <th>Data</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1,001</td>
                                                    <td>responsive</td>
                                                    <td>bootstrap</td>
                                                    <td>cards</td>
                                                    <td>grid</td>
                                                </tr>
                                                <tr>
                                                    <td>1,002</td>
                                                    <td>rwd</td>
                                                    <td>web designers</td>
                                                    <td>theme</td>
                                                    <td>responsive</td>
                                                </tr>
                                                <tr>
                                                    <td>1,003</td>
                                                    <td>free</td>
                                                    <td>open-source</td>
                                                    <td>download</td>
                                                    <td>template</td>
                                                </tr>
                                                <tr>
                                                    <td>1,003</td>
                                                    <td>frontend</td>
                                                    <td>developer</td>
                                                    <td>coding</td>
                                                    <td>card panel</td>
                                                </tr>
                                                <tr>
                                                    <td>1,004</td>
                                                    <td>migration</td>
                                                    <td>bootstrap 4</td>
                                                    <td>mobile-first</td>
                                                    <td>design</td>
                                                </tr>
                                                <tr>
                                                    <td>1,005</td>
                                                    <td>navbar</td>
                                                    <td>sticky</td>
                                                    <td>jumbtron</td>
                                                    <td>header</td>
                                                </tr>
                                                <tr>
                                                    <td>1,006</td>
                                                    <td>collapse</td>
                                                    <td>affix</td>
                                                    <td>submenu</td>
                                                    <td>flexbox</td>
                                                </tr>
                                                <tr>
                                                    <td>1,007</td>
                                                    <td>layout</td>
                                                    <td>examples</td>
                                                    <td>themes</td>
                                                    <td>grid</td>
                                                </tr>
                                                <tr>
                                                    <td>1,008</td>
                                                    <td>migration</td>
                                                    <td>bootstrap 4</td>
                                                    <td>flexbox</td>
                                                    <td>design</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            {/* <!--/row--> */}

                            <a id="more"></a>
                            <hr />
                            <h2 className="sub-header mt-5">Use card decks for equal height rows of cards</h2>
                            <div className="mb-3">
                                <div className="card-deck">
                                    <DeckedCard>
                                        <p>It's really good news that the new Bootstrap 4 now has support for CSS 3 flexbox.</p>
                                        <footer>Makes flexible layouts <cite title="Source Title">Faster</cite></footer>
                                    </DeckedCard>
                                    <DeckedCard>
                                        <p>The Bootstrap 3.x element that was called "Panel" before, is now called a "Card".</p>
                                        <footer>All of this makes more <cite title="Source Title">Sense</cite></footer>
                                    </DeckedCard>
                                    <DeckedCard>
                                        <p>There are also some interesting new text classes for uppercase and capitalize.</p>
                                        <footer>These handy utilities make it <cite title="Source Title">Easy</cite></footer>
                                    </DeckedCard>
                                    <DeckedCard>
                                        <p>If you want to use cool icons in Bootstrap 4, you'll have to find your own such as Font Awesome or Ionicons.</p>
                                        <footer>The Glyphicons are not <cite title="Source Title">Included</cite></footer>
                                    </DeckedCard>
                                </div>
                            </div>
                            {/* <!--/row--> */}

                            <a id="flexbox"></a>
                            <hr />
                            <h2 className="mt-5">Masonry-style grid columns</h2>
                            <h6>with Bootstrap 4 flexbox</h6>

                            <div className="card-columns mb-3">
                                <div className="card">
                                    <img className="card-img-top img-fluid" src="//placehold.it/600x200/444/fff?text=..." alt="Card image cap" />>
                    <div className="card-body">
                                        <h4 className="card-title">New XL Grid Tier</h4>
                                        <p className="card-text">With screens getting smaller, Bootstrap 4 introduces a new grid breakpoint with the col-xl-* classes. This extra tier extends the media query range all the way down to 576 px. Eventhough the new XL tier would make one think it’s been added to support extra large screens, it’s actually the opposite.</p>
                                    </div>
                                </div>
                                <div className="card card-body">
                                    <blockquote className="card-blockquote">
                                        <p>Bootstrap 4 will be lighter and easier to customize.</p>
                                        <footer>
                                            <small className="text-muted">
                                                Someone famous like <cite title="Source Title">Mark Otto</cite>
                                            </small>
                                        </footer>
                                    </blockquote>
                                </div>
                                <div className="card">
                                    <img className="card-img-top img-fluid" src="//placehold.it/600x200/bbb/fff?text=..." alt="Card image cap" />
                                    <div className="card-body">
                                        <h4 className="card-title">Card title</h4>
                                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                                <div className="card card-body card-inverse card-primary text-center">
                                    <blockquote className="card-blockquote">
                                        <p>Create masonry or Pinterest-style card layouts in Bootstrap 4.</p>
                                        <footer>
                                            <small>
                                                Someone famous in <cite title="Source Title">Bootstrap</cite>
                                            </small>
                                        </footer>
                                    </blockquote>
                                </div>
                                <div className="card card-body text-center">
                                    <h4 className="card-title">Clever heading</h4>
                                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 5 mins ago</small></p>
                                </div>
                                <div className="card">
                                    <img className="card-img img-fluid" src="//placehold.it/600x200/777/fff?text=..." alt="Card image" />
                                </div>
                                <div className="card card-body text-right">
                                    <blockquote className="card-blockquote">
                                        <p>There are also some interesting new text classes to uppercase or capitalize.</p>
                                        <footer>
                                            <small className="text-muted">
                                                Someone famous in <cite title="Source Title">Bootstrap</cite>
                                            </small>
                                        </footer>
                                    </blockquote>
                                </div>
                                <div className="card card-body">
                                    <h4 className="card-title">Responsive</h4>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <ul className="list-unstyled">
                                            <li className="text-capitalize"><code className="text-lowercase">text-capitalize</code> Capitalize each word</li>
                                            <li className="text-uppercase"><code className="text-lowercase">text-uppercase</code> Uppercase text</li>
                                            <li className="text-success"><code>text-success</code> Contextual colors for text</li>
                                            <li><code>text-muted</code> <span className="text-muted">Lighten with muted</span></li>
                                            <li><code>text-info</code> <span className="text-muted">Info text color</span></li>
                                            <li><code>text-danger</code> <span className="text-muted">Danger text color</span></li>
                                            <li><code>text-warning</code> <span className="text-muted">Warning text color</span></li>
                                            <li><code>text-primary</code> <span className="text-primary">Primary text color</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card card-body">
                                    <h4 className="card-title">Heading</h4>
                                    <p className="card-text">So now that you've seen some of what Bootstrap 4 has to offer, are you going to give it a try?</p>
                                    <p className="card-text"><small className="text-muted">Last updated 12 mins ago</small></p>
                                </div>
                            </div>
                            {/* <!--/card-columns--> */}

                            <a id="layouts"></a>
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
                                                <a className="nav-link" href="" data-target="#tab1" data-toggle="tab">List</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link active" href="" data-target="#tab2" data-toggle="tab">Profile</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="" data-target="#tab3" data-toggle="tab">More</a>
                                            </li>
                                        </ul>
                                        {/* <!--/tabs--> */}
                                        <br />
                                        <div id="tabsJustifiedContent" className="tab-content">
                                            <div className="tab-pane" id="tab1">
                                                <div className="list-group">
                                                    <a href="" className="list-group-item"><span className="float-right label label-success">51</span> Home Link</a>
                                                    <a href="" className="list-group-item"><span className="float-right label label-success">8</span> Link 2</a>
                                                    <a href="" className="list-group-item"><span className="float-right label label-success">23</span> Link 3</a>
                                                    <a href="" className="list-group-item text-muted">Link n..</a>
                                                </div>
                                            </div>
                                            <div className="tab-pane active" id="tab2">
                                                <div className="row">
                                                    <div className="col-sm-7">
                                                        <h4>Profile Section</h4>
                                                        <p>Imagine creating this simple user profile inside a tab card.</p>
                                                    </div>
                                                    <div className="col-sm-5"><img src="//placehold.it/170" className="float-right img-responsive img-rounded" /></div>
                                                </div>
                                                <hr />
                                                <a href="javascript:;" className="btn btn-info btn-block">Read More Profiles</a>
                                                <div className="spacer5"></div>
                                            </div>
                                            <div className="tab-pane" id="tab3">
                                                <div className="list-group">
                                                    <a href="" className="list-group-item"><span className="float-right label label-info label-pill">44</span> <code>.panel</code> is now <code>.card</code></a>
                                                    <a href="" className="list-group-item"><span className="float-right label label-info label-pill">8</span> <code>.nav-justified</code> is deprecated</a>
                                                    <a href="" className="list-group-item"><span className="float-right label label-info label-pill">23</span> <code>.badge</code> is now <code>.label-pill</code></a>
                                                    <a href="" className="list-group-item text-muted">Message n..</a>
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
                            {/* <!--/row--> */}

                        </div>
                        {/* <!--/main col--> */}
                    </div>

                </div>
                {/* <!--/.container--> */}
                <FooterView />


                {/* <!-- Modal --> */}
                <ModalView />
            </React.Fragment>
        );
    }
}

export default App;
