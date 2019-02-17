import React, { Component } from 'react';
import Skill from './skill';
import {ContainerSkill} from './styled';

class Loard extends Component {
    render(){
        return(
            <ContainerSkill>
                <Skill  percentage="80" title="Skill 1"/>
                <Skill  percentage="90" title="Skill 2"/>
                <Skill  percentage="75" title="Skill 3"/>
                <Skill  percentage="67" title="skill 4"/>               
            </ContainerSkill>
        );
    }
}

export default Loard;