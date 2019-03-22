//MODULE IMPORTS
import React, { Component } from 'react'
import styled from 'styled-components'
import './App.css'
//COMPONENT IMPORTS
import LeftHeader from './components/headers/leftheader/LeftHeader'
import TopHeader from './components/headers/topheader/TopHeader'
import Home from './components/home/Home'


//STYLES
const Container = styled.div`
  display: grid;
  grid-template-columns: 60px auto auto auto auto;
  grid-template-rows: 140px auto;
  width: 100vw;
  height: 100vh;
  font-style: 'GTAmerica';
  font-size: 12px;
`


//MAIN COMPONENT
export default class App extends Component{

  state ={
    
    instruments: [
      {

      }


    ]

  }
 

  render() {
    return (
      <div className="App">
        <Container>

          <LeftHeader />
          <TopHeader />

          <Home />
          

        </Container>
      </div>
    )
  }
}
