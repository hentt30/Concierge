import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
// import Home from './pages/Home';

const App: React.FC = () =>{
  return (
    <Router>

      <Navbar/>
    </Router>
  );
};


export default App;
