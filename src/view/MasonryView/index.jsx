import React, { Component } from 'react';

//Components
import Paralax from '../paralax';

class MasonryView extends Component {
    render() {
        return (
            <div>
                <Paralax 
                    titleProps="Masonry"
                    imgUrl="https://lh6.googleusercontent.com/-a_9Yxlct8nE/Ud_A6PcsveI/AAAAAAAAARk/hsE39Mh6Ayk/w1435-h897-no/fondo+de+pantalla+de+paraiso+de+agua+12.jpg"
                />
                
                    <hr />
                    <h2 className="mt-5">Masonry-style grid columns</h2>
                    <h6>with Bootstrap 4 flexbox</h6>

                    <div className="card-columns mb-3">
                        <div className="card">
                            <img className="card-img-top img-fluid" src="//placehold.it/600x200/444/fff?text=..." alt="esta es una imagen" />
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
                            <img className="card-img-top img-fluid" src="//placehold.it/600x200/bbb/fff?text=..." alt="otra imagen" />
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
                            <img className="card-img img-fluid" src="//placehold.it/600x200/777/fff?text=..." alt="hola" />
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
            </div>
        );
    }
}

export default MasonryView;