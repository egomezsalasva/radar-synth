//MODULE IMPORTS
import React, { Component } from 'react'
import styled from 'styled-components'
import './App.css'
//COMPONENT IMPORTS
import LeftHeader from './components/headers/leftheader/LeftHeader'
import TopHeader from './components/headers/topheader/TopHeader'
import HomeSection from './components/HomeSection'
//IMAGE IMPORTS
// import korgMinilogueIllustration from './img/korgMinilogueIllustration.png'
// import akaiMPCliveIllustration from './img/akaiMPCliveIllustration.png'
// import elektronAnalogIllustration from './img/elektronAnalogIllustration.png'



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
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>

          <LeftHeader />
          <TopHeader />

          <HomeSection
            sectionLink="all.html"
            sectionStyle="allSection"
            sectionTitle="All"
          />
          <HomeSection
            sectionLink="synths.html"
            sectionStyle="synthSection"
            sectionTitle="Synthesizers"
            // sectionSrc={korgMinilogueIllustration}
            // sectionAlt="Korg Minilogue Illustration"
          />
          <HomeSection
            sectionLink="samplers.html"
            sectionStyle="samplerSection"
            sectionTitle="Samplers"
            // sectionSrc={akaiMPCliveIllustration}
            // sectionAlt="Akai MPC Live Illustration"
          />
          <HomeSection
            sectionLink="drummachines.html"
            sectionStyle="drumSection"
            sectionTitle="Drum Machines"
            // sectionSrc={elektronAnalogIllustration}
            // sectionAlt="Elektron Analog Rytm Illustration"
          />
          
        </Container>
      </div>
    )
  }
}
