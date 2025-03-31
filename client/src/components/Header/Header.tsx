import {JSX} from "react";
import {StyledHeader, StyledLink} from "./StyledHeader.tsx";
import {Button} from "antd";

export const Header = (): JSX.Element => {
    return (
        <StyledHeader>
            <StyledLink to="/">Some Company</StyledLink>
            <Button type="primary">Contact Us</Button>
        </StyledHeader>
    )
}

export default Header;
