import React from 'react';
import {Nav, NavbarContainer, NavLogo} from './styles';
const Navbar: React.FC = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/"> Concierge </NavLogo>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
