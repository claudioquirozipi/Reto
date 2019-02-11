import React, { Component } from 'react';

import backgrounDark from '../../Assets/img/backgrounDark.jpg';
import SideBarView from './SideBarView';
import { 
    ContainerNav,
    ContainerDashBoard,
    ContainerForm,
    Button,
    ToggleDashBoard
    } from './styled';

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
        console.log("hola esto es una prueba");
        this.setState({
            ToggleDashBoard: !this.state.ToggleDashBoard
        })
    }
    render() {
        return (
            <frameElement>
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
                                <Button onClick={this.handleFullView}>Login</Button>
                                <Button onClick={this.handleFullView}>Setin</Button>
                            </div>
                        </form>
                    </ContainerForm>
                    <ContainerDashBoard>
                        <Button onClick={this.handleFullView}>Logout</Button>
                        <SideBarView/>
                    </ContainerDashBoard>
                </ContainerNav>
                <ToggleDashBoard 
                    onClick={this.handleToggleDashBoard}
                    FullViewNav={this.state.FullViewDashBoard}
                >X</ToggleDashBoard>
            </frameElement>
        );
    }
}

export default DashBoard;