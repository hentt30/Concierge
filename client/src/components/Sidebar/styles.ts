import {FaTimes} from 'react-icons/fa';
import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen})=>(isOpen ?'100%':'0')};
    top: ${({isOpen})=>(isOpen ?'0':'-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color:#fff;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;


export const SidebarWrapper = styled.div`
    color:#fff;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6,80px);
    text-align: center;

    @media screen and (max-width: 480 px){
        grid-template-rows: repeat(6,60px);
    }
`;


export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration:none;
    list-style:none;
    transition: all 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover{
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`;

export const SideBtnWrapper = styled.div`
    display:flex;
    justify-content: center;

`;

export const SidebarRoute = styled(LinkR)`
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
        transition:  0.2s ease-in-out;
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


