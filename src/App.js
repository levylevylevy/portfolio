import './App.css';
import React, { Component } from "react";
import Home from "./Home";
import Projects from "./Projects";
import styled from 'styled-components';
import { primaryBlue } from './colors';
import { secondaryGold } from './colors';
import Nav from './Nav.js'
import { Fragment } from 'react';


const AppContents = styled.ul`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  gap: 40px;
  margin-right: 94px;
  margin-top: 34px;
  color: ${primaryBlue};
`;






class App extends Component {
  render() {
    return (

      <Fragment>
      <Nav/>
      {/* popup component that takes a prop of hidden or not, default is hidden */}
      </Fragment>    
    );
  }
}
 
export default App;
