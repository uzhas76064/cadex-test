import styled from "styled-components";

export const StyledContentList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3 ,1fr);
    text-align: left;
    padding: 0;

    @media (max-width: 480px) {
        display: block;
    }

    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`