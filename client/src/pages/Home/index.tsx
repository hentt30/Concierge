import React from 'react';
import {Component} from 'react';
import {Title} from './styles';
import NavBar from '../../components/NavBar';

class Home extends Component {
  render(): JSX.Element {
    return (
      <div>
        <NavBar/>
        <Title>Home</Title>
      </div>
    );
  }
}

export default Home;
