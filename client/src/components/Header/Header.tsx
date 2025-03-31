import {JSX} from "react";
import {Link} from "react-router-dom";
import {StyledHeader} from "./StyledHeader.tsx";
import {Button} from "antd";

export const Header = (): JSX.Element => {
    return (
        <StyledHeader>
            <Link to="/">Some Company</Link>
            <Button type="primary">Contact Us</Button>
        </StyledHeader>
    )
}

export default Header;
