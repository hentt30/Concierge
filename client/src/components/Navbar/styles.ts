import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const Nav = styled.nav`
    background: #000;
    margin-top:-80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:1rem;
    position:sticky;
    top:0;
    z-index:10;
    transition: all 0.2 ease;
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height:80px;
    z-index:1;
    width: 100%;
    padding: 0 24px;
    max-width: 1300px;

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

export const MobileIcon = styled.div`
    display:none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0 ;
        transform: translate(-100%,60%);
        font-size: 1.8rem;
        cursor:pointer;
        color: #fff;
    }

`;


export const NavMenu = styled.ul`
    display:flex;
    align-items:center;
    list-style: none;
    text-align:center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display:none
    }
`;


export const NavItem = styled.li`
    height: 80px;
`;

export const NavLink = styled(LinkS)`
    color: #fff;
    display:flex;
    align-items: center;
    text-decoration: none;
    padding: 0 2rem;
    height: 100%;
    cursor:pointer;

    &:hover{
        transition: 0.2s all ease;
        border-bottom: 4px solid #01bf71;
    }
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
@media screen and (max-width: 768px) {
    display:none
}

`;

export const NavBtnLink = styled(LinkR)`
    display: flex;
    border-radius: 50px;
    height: 50px;
    width: 120px;
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
    padding-right: 5px;
    align-items: center;
    cursor:pointer;
    color: #000;
    size:2;

`;

