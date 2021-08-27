import React from 'react';
import Home from './pages/Home';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
// import Home from './pages/Home';

const App: React.FC = () =>{
  return (
    <Router>
      <Home/>
    </Router>
  );
};


export default App;
