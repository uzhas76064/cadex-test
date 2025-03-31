import styled from "styled-components";
import {Link} from "react-router-dom";

export const StyledHeader = styled.header`
    max-width: 1280px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000;
    font-size: 32px;
`