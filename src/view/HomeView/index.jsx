import React from 'react'

//Components
import ContainerCard from './CardImage';
import Loard from './loard';
import ReviewCard from '../ReviewCard';
import DeckedCard from '../DeckedCard';
import Paralax from '../paralax';

const HomeView = () => {
    return (
        <React.Fragment>
            <Paralax 
                titleProps="Home"
                imgUrl="https://www.aquariumcostadealmeria.com/wp-content/uploads/2018/02/fondo-arenoso-1.jpg"
            />
            <div className="row row-offcanvas row-offcanvas-left">
                {/* <!--/col--> */}

                <div className="col main pt-5 mt-3">
                    <h1 className="display-4 d-none d-sm-block">
                        Bootstrap 4 Dashboard
                    </h1>
                    <p className="lead d-none d-sm-block">Plus off-canvas sidebar, based on Bootstrap v4</p>
                    <ContainerCard />
                    <hr />
                    <Loard />
                    <hr />
                    <p className="lead mt-5">
                        Are you ready for Bootstap 4? It's the 4th generation of this popular responsive framework. Bootstrap 4 will include some interesting
                        new features such as flexbox, 5 grid sizes (now including xl), cards, `em` sizing, CSS normalization (reboot) and larger font
                        sizes.
                    </p>
                    
                    {/* <!--/row--> */}
                    
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
