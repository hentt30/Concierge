import React, {useState} from 'react';
import Sidebar from '../../components/Sidebar';
import NavBar from '../../components/Navbar';
import HeroSection from '../../components/HeroSection';
import InfoSection from '../../components/infoSection';
import {homeObjOne,
  homeObjTwo, homeObjThree} from '../../components/infoSection/data';

const Home: React.FC = ()=>{
  const [isOpen, setIsOpen] = useState<boolean>(false );

  const toggle = () =>{
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <NavBar toggle={toggle}/>
      <HeroSection/>
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <InfoSection {...homeObjThree}/>
    </div>
  );
};


export default Home;
