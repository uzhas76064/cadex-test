import {Button, Typography} from "antd";
import ProductsList, {ProductsListProps} from "../ProductsList/ProductsList.tsx";
import {StyledProductsContainer} from "./StyledProductsContainer.tsx";

type ProductsContainerProps = ProductsListProps;

const ProductsContainer = ({content}: ProductsContainerProps) => {
    return (
        <StyledProductsContainer>
            <Typography.Title level={2}>Also very important title</Typography.Title>
            <ProductsList content={content} />
            <Button type={"primary"}>Contact Us</Button>
        </StyledProductsContainer>
    )
}

export default ProductsContainer;