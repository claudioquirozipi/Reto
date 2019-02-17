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
            padding: 3px 30px;
            transition: all 1s;
            outline: none;
            border: 3px solid ${colors.blue};
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
export const ContainerLogo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 5%;
    img {
        width: 30px;
        height: auto;
    }
`;

export const Button = styled.button`
    background: ${colors.blueDark};
    color: ${colors.blueLight};
    border: 3px solid ${colors.blueDark};
    padding: 0px 30px;
    border-radius: 20px;
    outline: none;
    transition: transform .3s, border-color 1s;
    cursor: pointer;
    :hover {
        border: 3px solid ${colors.blue};
    }
    :focus {
        outline: none;
    }
    :active {
        transform: translate(3px, 3px);
        border: 3px solid ${colors.blueLight};
    }
    ${props => props.marginSC && css`
        margin: 0 10px 15px;
    `}
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
//**********************Form ***********
export const FormSC = styled.form`
    position: relative;
    margin: 30px 5%; 
`;
export const FormControlSC = styled.input`
    width: 100%;
    background: ${colors.white};
    color: ${colors.black};
    border-radius: 20px;
    padding: 3px 30px;
    transition: all 1s;
    outline: none;
    border: 3px solid ${colors.blue};
    :focus {
        border: 3px solid ${colors.blueLight};
    }
`;
export const ButtonSC = styled.button`
    background: transparent;
    background-image: url(${props => props.searchSC});
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    border: none;
    outline: none;
    width: 20px;
    height: 20px;
    cursor: pointer;
    transition: transform .3s;
    :active {
        transform: translate(1px, 1px);
    }
`;

// ************* SideBarView ********************
export const UlContainerLink = styled.ul`
    margin: 30px 0;
    padding: 0;     
    list-style: none;
`
export const LiContainerLink = styled.li`
    a {
        background: ${colors.black};
        color: ${colors.blueLight};
        text-decoration: none;
        font-weight: 700;
        width: 100%;
        padding: 10px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        :hover {
            background: ${colors.blueDark};
        }
    }
`
export const UlToggelHeight = styled.ul`
    background: ${colors.blue};       
    max-height: 0;
    overflow:hidden;
    transition: max-height 1s;
    ${props => props.displayView && css`
        max-height: 500px;
        transition: max-height 1s 1s;
    `};
`
