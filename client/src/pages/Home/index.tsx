import React, {useState} from 'react';
import Sidebar from '../../components/Sidebar';
import NavBar from '../../components/Navbar';

const Home: React.FC = ()=>{
  const [isOpen, setIsOpen] = useState<boolean>(false );

  const toggle = () =>{
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <NavBar toggle={toggle}/>
    </div>
  );
};


export default Home;
