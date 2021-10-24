import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

const Routes : React.FC = ()=>{
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path = "/callback" component={Login}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
