import styled from "styled-components";
import {Button, Form, Typography} from "antd";

export const StyledContactForm = styled.div`
    background-color: #F5F5F5;
    padding: 20px;
`;

export const StyledForm = styled(Form)`
    max-width: 300px;
    padding: 20px;
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin: auto;
`
export const SubmitButton = styled(Button)`
    width: 100%;
    height: 40px;
    font-size: 16px;
`

export const StyledTitle = styled(Typography.Title)`
    text-align: center;
    padding: 20px;
`

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Content = styled.div`
  flex: 1;
  align-items: center;
  padding: 20px;
`;