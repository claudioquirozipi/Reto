import React, { Component } from 'react';

import backgrounDark from '../../Assets/img/backgrounDark.jpg';
import SideBarView from './SideBarView';
//Styled-Components
import { 
    ContainerNav,
    ContainerDashBoard,
    ContainerForm,
    ContainerLogo,
    Button,
    ToggleDashBoard
    } from './styled';
//Assets
import logo from '../../Assets/img/palanca-de-mando.svg';

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FullViewDashBoard: true,
            ToggleDashBoard: true
        };
        this.handleFullView = this.handleFullView.bind(this);
        this.handleToggleDashBoard = this.handleToggleDashBoard.bind(this);
        
    }
    handleFullView(e) {
        e.preventDefault();
        this.setState({
            FullViewDashBoard: !this.state.FullViewDashBoard
        })
    }
    handleToggleDashBoard() {
        this.setState({
            ToggleDashBoard: !this.state.ToggleDashBoard
        })
    }
    render() {
        return (
            <div>
                <ContainerNav 
                FullViewNav={this.state.FullViewDashBoard}
                ToggleDashBoard={this.state.ToggleDashBoard}
                >
                    <ContainerForm backgrounImg={backgrounDark}>
                        <h1>Welcome</h1>
                        <form>
                            <input type="text"/>
                            <input type="password"/>
                            <div>
                                <Button marginSC onClick={this.handleFullView}>Login</Button>
                                <Button marginSC onClick={this.handleFullView}>Setin</Button>
                            </div>
                        </form>
                    </ContainerForm>
                    <ContainerDashBoard>
                        <ContainerLogo>
                            <img src={logo} alt="logo"/>
                            <Button onClick={this.handleFullView}>Logout</Button>
                        </ContainerLogo>
                        <SideBarView/>
                    </ContainerDashBoard>
                </ContainerNav>
                <ToggleDashBoard 
                    onClick={this.handleToggleDashBoard}
                    FullViewNav={this.state.FullViewDashBoard}
                >X</ToggleDashBoard>
            </div>
        );
    }
}

export default DashBoard;