import {StyledContact} from "./StyledContact.tsx";
import {Button, Typography} from "antd";

const Contact = () => {
    return (
        <StyledContact>
            <Typography.Title level={2}>Less important title</Typography.Title>
            <Button type="primary" htmlType="submit">Contact Us</Button>
        </StyledContact>
    )
}

export default Contact;