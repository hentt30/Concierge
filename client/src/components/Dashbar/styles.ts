import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const Nav = styled.nav`
    background: #000;
    margin: 0px;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size:1rem;
    position:sticky;
    top:0;
    z-index:10;
    transition: all 0.2 ease;
`;

export const NavbarContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height:80px;
    z-index:1;
    width: 100%;
    padding: 0 24px;

`;

export const NavLogo = styled(LinkR)`
    color : white;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display:flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;


export const NavBtn = styled.nav`
display: flex;
align-items: center;
@media screen and (max-width: 767px) {

}

`;

export const NavBtnLink = styled(LinkR)`
    display: flex;
    border-radius: 50px;
    height: 40px;
    width: 40px;
    background: #01bf71;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    color: #010606;
    font-size: 1rem;
    outline: none;
    border:none;
    cursor:pointer;
    text-decoration: none;

    &:hover{
        transition: all 0.4s ease-in-out;
        background: #fff;
        color: #010606;
    }


`;

export const SpotifyIcon = styled.div`
    display: flex;
    align-items: center;
    cursor:pointer;
    color: #000;

`;

