import React, { Component } from 'react';

//Components
import CardSC from './cardSC'

//Styled-Components
import { 
    ContainerCardSC
} from './styled';

class ContainerCard extends Component {
    render() {
        return (
            <ContainerCardSC>
                <CardSC IconCard="user" TitleCard="USERS" TextCard="135" UrlCard="https://i2.wp.com/www.esquiades.com/blog/wp-content/uploads/2016/02/Nieve.jpg"/>
                <CardSC IconCard="cross" TitleCard="POSTS" TextCard="88" UrlCard="https://www.absolutviajes.com/wp-content/uploads/2016/03/montanas-liupan.jpg"/>
                <CardSC IconCard="blood" TitleCard="ASD" TextCard="126" UrlCard="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPWGNbnQCnxUHCkdMaU2a5aWaqbeztO3WFKrywh6qQFVtnj6e2"/>
                <CardSC IconCard="rocket" TitleCard="BADGES" TextCard="15" UrlCard="https://img.elcomercio.pe/files/ec_article_multimedia_gallery/uploads/2018/09/14/5b9be57f8d255.jpeg"/>
            </ContainerCardSC>
        );
    }
}

export default ContainerCard;