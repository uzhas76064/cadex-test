import {JSX} from "react";
import {StyledHeader, StyledLink} from "./StyledHeader.tsx";
import {Button} from "antd";
import {useNavigate} from "react-router";

export const Header = (): JSX.Element => {
    const navigate = useNavigate();

    const handleContactBtnClick = () => {
        navigate("/contact-us");
    }

    return (
        <StyledHeader>
            <StyledLink to="/">Some Company</StyledLink>
            <Button onClick={handleContactBtnClick} type="primary">Contact Us</Button>
        </StyledHeader>
    )
}

export default Header;
