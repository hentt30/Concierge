import React, {useState} from 'react';
import {Spotify} from '../../services/spotify';
import Sidebar from '../../components/Sidebar';
import NavBar from '../../components/Navbar';
import HeroSection from '../../components/HeroSection';
import InfoSection from '../../components/infoSection';
import {homeObjOne,
  homeObjTwo, homeObjThree} from '../../components/infoSection/data';
import CookieConsent from 'react-cookie-consent';

const Home: React.FC = ()=>{
  const spotifyApi = new Spotify();
  const [isOpen, setIsOpen] = useState<boolean>(false);


  const toggle = () =>{
    setIsOpen(!isOpen);
  };


  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} spotifyApi={spotifyApi}/>
      <NavBar toggle={toggle} spotifyApi={spotifyApi}/>
      <HeroSection spotifyApi={spotifyApi}/>
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <InfoSection {...homeObjThree}/>
      <CookieConsent
        location="bottom"
        buttonText="Sure man!!"
        cookieName="myAwesomeCookieName2"
        style={{background: '#2B373B'}}
        buttonStyle={{color: '#4e503b', fontSize: '13px'}}
        expires={150}
      >
  This website uses cookies to enhance the user experience.{' '}
        <span style={{fontSize: '10px'}}>This bit of text is smaller :O</span>
      </CookieConsent>
    </div>
  );
};


export default Home;
