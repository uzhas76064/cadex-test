import {Typography} from "antd";
import {StyledProductCard} from "./StyledProductCard.tsx";

type ProductCardProps = {
    title: string,
    text: string,
}

const ProductCard = ({title, text}: ProductCardProps) => {
    return (
        <StyledProductCard>
            <Typography.Title level={3}>{title}</Typography.Title>
            <Typography.Text>{text}</Typography.Text>
        </StyledProductCard>
    )
}

export default ProductCard;