//MODULE IMPORTS
import React, { Component } from 'react'
import styled from 'styled-components'
//COMPONENT IMPORTS
import LoginButton from './LoginButton'



//STYLES
const RightNavContainer = styled.nav`
    ul {
        position: fixed;
        list-style: none;
        text-transform: uppercase;
        margin: 0;
        top: 25px;
        right: 30px;
        padding: 0;
        z-index: 100;
    } 
`

//MAIN COMPONENT
export default class RightNav extends Component {
  render() {
    return (
        <RightNavContainer>
            <ul>
                <a href="#"><li>Sign Up</li></a>
                <LoginButton />
            </ul>
        </RightNavContainer>
    )
  }
}
