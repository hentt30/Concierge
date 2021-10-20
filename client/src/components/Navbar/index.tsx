import React from 'react';
import {FaBars} from 'react-icons/fa';
import {FaSpotify} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon,
  NavMenu, NavItem, NavLink, NavBtn, NavBtnLink, SpotifyIcon} from './styles';

type NavBarProps ={
    toggle(): void;
}

const Navbar: React.FC<NavBarProps> = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/"> Concierge </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="about"
                smooth={true}
                offset={-80}
              > About </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="discover"
                smooth={true}
                offset={-80}> Discover </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="services"
                smooth={true}
                offset={-80}> Services </NavLink>
            </NavItem>

          </NavMenu>
          <NavBtn>
            <NavBtnLink to="signin">
              <SpotifyIcon>
                <FaSpotify/>
              </SpotifyIcon>
                Connect
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
