import React, { Component } from 'react';

//Styled-Components
import { ParalaxSC } from './styled';

class Paralax extends Component {
    render() {
        return (
            <ParalaxSC imgUrl={this.props.imgUrl}>
                <h1>{this.props.titleProps}</h1>
            </ParalaxSC>
        );
    }
}

export default Paralax;