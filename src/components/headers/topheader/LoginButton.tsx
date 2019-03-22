//MODULE IMPORTS
import React from 'react'
import styled from 'styled-components';



//STYLE
const LoginButtonContainer = styled.a`
    border: 1px solid #02C39A;
    box-sizing: border-box;
`
const OverlayLoginButton = styled.div`
    {/*style overide from TopHeader li*/}
    && li{
        color: #02C39A;
        opacity: 1;
    } 
` 


//MAIN COMPONENT
const LoginButton = () => (
    <LoginButtonContainer href="#">
        <OverlayLoginButton>
            <li>Log In</li>
        </OverlayLoginButton>
    </LoginButtonContainer>
)



//EXPORTS
export default LoginButton


//PARENT COMPONET -> TopHeader