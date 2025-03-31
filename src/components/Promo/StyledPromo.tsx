import styled from "styled-components";

export const StyledPromo = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
    margin-bottom: 40px;
    background-color: #F5F5F5;
    padding: 20px;
    
    @media (max-width: 480px) {
        display: block;
    }
    
    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`

export const StyledIframe = styled.iframe`
    @media (max-width: 480px) {
        width: 230px;
    }

    @media (min-width: 768px) {
        width: 460px;
    }
`