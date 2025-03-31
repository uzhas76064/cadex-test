import {StyledContactForm, StyledForm, StyledTitle, SubmitButton} from "./StyledContactForm.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import Header from "../../components/Header/Header.tsx";
import {Form, Input} from "antd";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  align-items: center;
  padding: 20px;
`;


const ContactForm = () => {
    return (
       <StyledWrapper>
           <Header />
           <Content>
               <StyledContactForm>
                   <StyledTitle level={1}>Only CTA on the page</StyledTitle>
                   <StyledForm layout="vertical">
                       <Form.Item name="name" label="Name" rules={[{ required: true, message: "Введите значение" }]}>
                           <Input />
                       </Form.Item>
                       <Form.Item name="email" label="Email" rules={[{ required: true, message: "Введите значение" }]}>
                           <Input />
                       </Form.Item>
                       <Form.Item name="message" label="Message" rules={[{ required: true, message: "Введите текст" }]}>
                           <Input.TextArea rows={4} />
                       </Form.Item>
                       <SubmitButton type="primary" htmlType="submit">Submit</SubmitButton>
                   </StyledForm>
               </StyledContactForm>
           </Content>
           <Footer />
       </StyledWrapper>
    )
}

export default ContactForm;