//MODULE IMPORTS
import React, { Component } from 'react'
import styled from 'styled-components'
//COMPONENT IMPORTS
import CatalogueSubheader from '../shared/CatalogueSubheader'
import InstrumentCard from '../shared/InstrumentCard'
//DATABASE IMPORTS
import { SORTED_INSTRUMENTS_DB } from '../../databases/instruments'


//MAIN COMPONENT
export default class All extends Component {
    render() {
        return(
            <div className="offersContainer">

               <CatalogueSubheader catalogueSubheaderStyle="allHeader" catalogueSubheaderTitle="All" />
                
                <div className="offersContent">
                    <div className="offersContentContainer">
                       {SORTED_INSTRUMENTS_DB.map( instrument =>
                            <InstrumentCard
                                catalogueCardHeading={instrument.name}
                                cardImageId={instrument.imageId}
                                cardImageSrc={instrument.imageSrc}
                                cardImageAlt={instrument.imageAlt}
                                pricePerWeek= {instrument.pricePerWeek + " €"}
                                pricePerDay={instrument.pricePerDay + " €"}
                                buttonStyle={instrument.buttonStyle}
                                buttonHref={instrument.buttonHref}
                            />
                        )}
                    </div>
                </div>
            </div>
        )
    }
} 

//PARENT COMPONENTS -> App

//CHILD COMPONENTS -> CatalogueSubheader
//                 -> InstrumentCard