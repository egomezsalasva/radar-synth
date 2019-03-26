//MODULE IMPORTS
import React, { Component } from 'react'
import styled from 'styled-components'
//STYLESHEET IMPORTS
import './App.css'
//COMPONENT IMPORTS
import LeftHeader from './components/shared/headers/leftheader/LeftHeader'
import TopHeader from './components/shared/headers/topheader/TopHeader'
import Home from './components/home/Home'
import All from './components/all/All'



//STYLES
const Container = styled.div`
  display: grid;
  grid-template-columns: 60px auto auto auto auto;
  grid-template-rows: 140px auto;
  width: 100vw;
  height: 100vh;
  font-style: 'GTAmerica';
  font-size: 12px;
  overflow-x: hidden;
	-webkit-transition: -webkit-transform 0.5s;
	transition: transform 0.5s;

  @media  (max-width: 910px), screen and (orientation: portrait) {
    display: block;
  }

  &:after {
    content: '';
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    -webkit-transition: opacity 0.5s, visibility 0s 0.5s;
    transition: opacity 0.5s, visibility 0s 0.5s;
  }

`


//MAIN COMPONENT
export default class App extends Component{


  render() {
    return (
      <div className="App">
        <Container>

          <LeftHeader />
          <TopHeader />

          {/* <Home /> */}
          <All />

        </Container>
      </div>
    )
  }
}
