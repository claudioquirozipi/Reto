import styled from 'styled-components';
import { MQ, colors } from '../../../config/style/resources';

export const ContainerCardSC = styled.div`
    display: grid; 
    grid-template-columns: repeat(1, 1fr);
    margin: 40px 0;
    grid-gap: 3vw;
    @media ${MQ.sm} {
        grid-template-columns: repeat(2, 1fr);
    }
    @media ${MQ.md} {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const ImagenCardContainer = styled.div`
    background: greenyellow;
    background-image: url(${props => props.UrlCard});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 5px;
    @media ${MQ.md} {
        filter: grayscale(50%) blur(2px);
        transition: filter .5s;
        :hover {
            filter: grayscale(0%) blur(0px);
        }
    }
`;
export const ContainerText = styled.div`
    background: ${colors.white};
    color: ${colors.blueDark};
    width: 40%;
    height: 100%;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    opacity: .8;
    svg {
        margin-top: 50px;
        width: 56px;
        height: auto;
    }
    h6 {
        text-align: center;
        font-size: 16px;
    }
    p {
        text-align: center;
        font-size: 35px;
        margin-bottom: 30px;
    }
`;