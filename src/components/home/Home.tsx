//MODULE IMPORTS
import React, { Component } from 'react'
//COMPONENT IMPORTS
import HomeSection from './HomeSection'
//IMAGE IMPORTS
// import korgMinilogueIllustration from '../../img/korgMinilogueIllustration.png'
// import akaiMPCliveIllustration from '../../img/akaiMPCliveIllustration.png'
// import elektronAnalogIllustration from '../../img/elektronAnalogIllustration.png'


//MAIN COMPONENT
export default class Home extends Component{
    render() {
        return (
            <>
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
            </>
        )
    }
}