import {
    Content,
    StyledContactForm,
    StyledForm,
    StyledTitle,
    StyledWrapper,
    SubmitButton
} from "./StyledContactForm.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import Header from "../../components/Header/Header.tsx";
import {Form, Input, message} from "antd";
import {useState} from "react";
import {apiURL} from "../../const.ts";

interface ContactFormValues {
    name: string;
    email: string;
    message: string;
}

const ContactForm = () => {
    const [responseMessage, setResponseMessage] = useState("");
    const [isFormSent, setIsFormSent] = useState(false);

    const [form] = Form.useForm<ContactFormValues>();

    const onFinish: (values: ContactFormValues) => void = async (values) => {
        try {
            const res = await fetch(`${apiURL}/contacts`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });

            if (res.ok) {
                setResponseMessage(`Thank you for your interest, ${values.name}`);
                message.success("Форма успешно отправлена!");
                setIsFormSent((prevState) => !prevState);
                form.resetFields();
            } else {
                message.error("Ошибка при отправке формы.");
            }
        } catch (error) {
            message.error("Ошибка при отправке формы.");
        }
    };

    return (
        <StyledWrapper>
            <Header />
            <Content>
                {!isFormSent ? <StyledContactForm>
                    <StyledTitle level={1}>Only CTA on the page</StyledTitle>

                    {responseMessage ? (
                        <p>{responseMessage}</p>
                    ) : (
                        <StyledForm<ContactFormValues> form={form} layout="vertical" onFinish={onFinish}>
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
                    )}
                </StyledContactForm>: <p>{responseMessage}</p>}
            </Content>
            <Footer />
        </StyledWrapper>
    );
}

export default ContactForm;