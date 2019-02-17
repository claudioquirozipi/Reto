//Dependencies
import React, { Component } from 'react'

// Components
import { Link } from 'react-router-dom';
// Styled-Components
import { 
    UlContainerLink,
    LiContainerLink,
    UlToggelHeight,
    FormSC,
    FormControlSC,
    ButtonSC
} from './styled';

//Assets
import search from '../../Assets/img/search.svg';
class SideBarView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home: false,
            table: false,
            layouts: false,
            masonry: false
        }
        this.homeRef = React.createRef()
        this.tableRef = React.createRef()
        this.layoutsRef = React.createRef()
        this.masonryRef = React.createRef()

        this.handleToggel = this.handleToggel.bind(this);
    }
    handleToggel(e){
        switch(e.target.id) {
            case "home":
                this.setState({
                    home: !this.state.home,
                    table: false,
                    layouts: false,
                    masonry: false
                })
                break;
            case "table":
                this.setState({
                    home: false,
                    table: !this.state.table,
                    layouts: false,
                    masonry: false
                })
                break;
            case "layouts":
                this.setState({
                    home: false,
                    table: false,
                    layouts: !this.state.layouts,
                    masonry: false
                })
                break;
            case "masonry":
                this.setState({
                    home: false,
                    table: false,
                    layouts: false,
                    masonry: !this.state.masonry
                })
                break;
            default:
              // code block
          }
        
    }
    render() {
        return (
            <div>
                <FormSC action="">
                    <FormControlSC type="text" placeholder="Search"/>
                    <ButtonSC searchSC={search}/>
                </FormSC>
                <UlContainerLink>
                    <LiContainerLink >
                        <Link 
                            to="/" 
                            onClick={this.handleToggel} 
                            ref={this.homeRef}
                            id="home">
                            Home
                        </Link>
                        <UlToggelHeight displayView={this.state.home}>
                            <li>item1</li>
                            <li>item1</li>
                            <li>item1</li>
                        </UlToggelHeight>
                    </LiContainerLink>
                    <LiContainerLink>
                        <Link 
                            to="/table"
                            onClick={this.handleToggel} 
                            ref={this.tableRef}
                            id="table"
                        >Table</Link>
                        <UlToggelHeight displayView={this.state.table}>
                            <li>item1</li>
                            <li>item1</li>
                            <li>item1</li>
                        </UlToggelHeight>    
                    </LiContainerLink>
                    <LiContainerLink>
                        <Link 
                            to="/layouts"
                            onClick={this.handleToggel} 
                            ref={this.layoutsRef}
                            id="layouts"
                        >Layouts</Link>
                        <UlToggelHeight displayView={this.state.layouts}>
                            <li>item1</li>
                            <li>item1</li>
                            <li>item1</li>
                        </UlToggelHeight>
                    </LiContainerLink>
                    <LiContainerLink>
                        <Link 
                            to="/masonry"
                            onClick={this.handleToggel} 
                            ref={this.masonryRef}
                            id="masonry"
                        >Masonry</Link>
                        <UlToggelHeight displayView={this.state.masonry}>
                            <li>item1</li>
                            <li>item1</li>
                            <li>item1</li>
                        </UlToggelHeight>
                    </LiContainerLink>
                </UlContainerLink>
            </div>
        );
    }
}
export default SideBarView;