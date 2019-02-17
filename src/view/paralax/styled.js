import styled from 'styled-components';
import { colors } from '../../config/style/resources';


export const ParalaxSC = styled.div`
    background: pink;
    height: 70vh;
    width: 100%;
    width: calc(100% + 30px);
    margin-left: -15px;
    background: ${colors.blueDark};
    background-image: url(${props => props.imgUrl});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    ::before {
        width: 100%;
        height: 100%;
        content:"";
        display: block;
        background-image: radial-gradient( circle, transparent , rgba(2,59,86,.7) )  ;
        position: absolute;
        top: 0;
        left: 0;
    }
    h1 {
        color: ${colors.white};
        font-size: 100px;
    }
`;