import styled, {css}  from 'styled-components';
import { colors, MQ } from '../../config/style/resources';

export const ContainerNav = styled.div`
    width: 100%;
    height: 100vh;
    transition: width 1s, transform 1s;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1200;
    display: flex;
    transform: scaleX(0);
    transform-origin: 0 center;
    @media ${MQ.md} {
        width: 215px;
        background: red;
    }
    ${props => props.FullViewNav && css`
        width: 100%;
        transition: width 1s 1s;
        @media ${MQ.md} {
            width: 100%;
        }
        ${ContainerDashBoard} {
            
        }
        ${ContainerForm} {
            opacity:1;
            display: flex;
            transform: scaleX(1);
            transition:  opacity 1s 1s, transform 1s ;
        }
    `};
    ${props => props.ToggleDashBoard && css`
        transform: scaleX(1);
    `}
`;
export const ContainerDashBoard = styled.div`
    background: ${colors.black};
    width: 100%;
    transition: width 1s;
`;
export const ContainerForm = styled.div`
    z-index: 1210;
    background: ${colors.blueDark};
    background-image: url(${props => props.backgrounImg});
    background-position: center left;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    opacity:0;
    width: 100%;
    height: 100vh;
    transform: scaleX(0);
    transition:  opacity 1s ease 1s, transform 0s ease 2s;
    overflow: hidden;
    h1 {
        font-size: 60px;
        color: ${colors.white};
        margin-bottom: 30px;
        @media ${MQ.sm} {
            font-size: 100px;
        }
    }
    form {
        display: flex;
        flex-direction: column;
        input {
            margin-bottom: 15px;
            background: ${colors.white};
            color: ${colors.black};
            border-radius: 20px;
            border: 3px solid ${colors.blue};
            padding: 3px 30px;
            transition: all 1s;
            outline: none;
            :focus {
                border: 3px solid ${colors.blueLight};
            }
        }
    }
    div {
        display: flex;
        justify-content: center;
    }
`;
export const Button = styled.button`
    background: ${colors.blueDark};
    color: ${colors.blueLight};
    padding: 3px 30px;
    margin: 0 10px 15px;
    border-radius: 20px;
    border: none;
    outline: none;
    transition: transform .3s;
    :focus {
        outline: none;
    }
    :active {
        transform: translate(1px, 1px);
    }
`;

export const ToggleDashBoard = styled.div`
    background: ${colors.blue};
    color: ${colors.white};
    position: fixed;
    bottom: 50px;
    right: 50px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex; 
    justify-content: center;
    align-items: center;
    z-index: 1200;
    transition: transform 1s 2s;
    transform: scale(1);
    @media ${MQ.md} {
        display: none;
    }
    ${props => props.FullViewNav && css`
        transform: scale(0);
        transition: transform 1s;
    `};
`;