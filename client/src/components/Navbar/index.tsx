import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon,
  NavMenu, NavItem, NavLink} from './styles';
const Navbar: React.FC = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/"> Concierge </NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="about"> About </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="discover"> Discover </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="services"> Services </NavLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
