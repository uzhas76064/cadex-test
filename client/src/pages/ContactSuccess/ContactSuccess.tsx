import {useParams} from "react-router";
import {StyledWrapper} from "../ContactForm/StyledContactForm.tsx";
import Header from "../../components/Header/Header.tsx";
import {Content} from "antd/es/layout/layout";
import Footer from "../../components/Footer/Footer.tsx";

const ContactSuccess = () => {
    const params = useParams();

    return (
        <StyledWrapper>
            <Header />
            <Content>
                {params.name}
            </Content>
            <Footer />
        </StyledWrapper>
    )
}

export default ContactSuccess;