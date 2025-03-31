import {Button, Typography} from "antd";
import ContentList, {ProductsListProps} from "../ContentList/ContentList.tsx";
import {StyledContentContainer} from "./StyledContentContainer.tsx";
import {useNavigate} from "react-router";

type ProductsContainerProps = ProductsListProps;

const ContentContainer = ({content}: ProductsContainerProps) => {
    const navigate = useNavigate();

    const handleContactBtnClick = () => {
        navigate("/contact-us");
    }

    return (
        <StyledContentContainer>
            <Typography.Title level={2}>Also very important title</Typography.Title>
            <ContentList content={content} />
            <Button onClick={handleContactBtnClick} type={"primary"}>Contact Us</Button>
        </StyledContentContainer>
    )
}

export default ContentContainer;