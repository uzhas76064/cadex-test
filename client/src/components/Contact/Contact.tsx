import {StyledContact} from "./StyledContact.tsx";
import {Button, Typography} from "antd";
import {useNavigate} from "react-router";

const Contact = () => {
    const navigate = useNavigate();

    const handleContactBtnClick = () => {
        navigate("/contact-us");
    }

    return (
        <StyledContact>
            <Typography.Title level={2}>Less important title</Typography.Title>
            <Button onClick={handleContactBtnClick} type="primary">Contact Us</Button>
        </StyledContact>
    )
}

export default Contact;