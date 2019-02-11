import React from 'react'

import CircleThumbnail from '../CircleThumbnail';
import ReviewCard from '../ReviewCard';
import DeckedCard from '../DeckedCard'
import Highlight from '../../Utils/Highlight';



const HomeView = () => {
    return (
        <React.Fragment>
            <h1>hola esta es una prueba</h1>
            <div className="row row-offcanvas row-offcanvas-left">
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
                </div>
            </div>       
        </React.Fragment>
  )
}

export default HomeView
