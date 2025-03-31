import {Typography} from "antd";
import {StyledContentCard} from "./StyledContentCard.tsx";

type ProductCardProps = {
    title: string,
    text: string,
}

const ContentCard = ({title, text}: ProductCardProps) => {
    return (
        <StyledContentCard>
            <Typography.Title level={3}>{title}</Typography.Title>
            <Typography.Text>{text}</Typography.Text>
        </StyledContentCard>
    )
}

export default ContentCard;