import React from 'react';
import {FaSpotify} from 'react-icons/fa';
import {SidebarContainer, Icon, CloseIcon,
  SidebarWrapper, SidebarLink, SideBtnWrapper, SidebarMenu,
  SidebarRoute, SpotifyIcon} from './styles';
import {ISpotify} from '../../services/spotify';


type SideBarProps ={
    isOpen: boolean;
    toggle(): void;
    spotifyApi: ISpotify;
}

const SideBar : React.FC<SideBarProps> = ({isOpen, toggle, spotifyApi})=> {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to="about">
              About
          </SidebarLink>
          <SidebarLink onClick={toggle} to="discover">
              Discover
          </SidebarLink>
          <SidebarLink onClick={toggle} to="services">
              Services
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrapper >
          <SidebarRoute onClick={()=>{
            spotifyApi.login();
          }} to="">
            <SpotifyIcon>
              <FaSpotify/>
            </SpotifyIcon>
                  Connect
          </SidebarRoute>
        </SideBtnWrapper>

      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SideBar;
