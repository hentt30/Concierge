import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const Routes : React.FC = ()=>{
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path = "/callback" component={Login}/>
        <Route path = "/dashboard" component={Dashboard}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
