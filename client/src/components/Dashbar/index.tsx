import React, {useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {RiLogoutBoxLine} from 'react-icons/ri';
import {Redirect} from 'react-router';
import {Nav, NavbarContainer, NavLogo,
  NavBtn, NavBtnLink, SpotifyIcon} from './styles';
import Cookies from 'js-cookie';

const Dashbar : React.FC = () => {
  const [logout, setLogout] = useState(false);

  if (logout) {
    Cookies.clear('userId');
    Cookies.clear('token');
    return (
      <Redirect to="/"/>
    );
  }

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/dashboard"> Concierge </NavLogo>
          <FaBars />
          <NavBtn>
            <NavBtnLink
              to=''
              onClick = {()=>{
                setLogout(true);
              }}>
              <SpotifyIcon>
                <RiLogoutBoxLine/>
              </SpotifyIcon>
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Dashbar;
