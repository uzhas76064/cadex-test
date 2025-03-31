import {Button, Typography} from "antd";
import ProductsList from "../ProductsList/ProductsList.tsx";
import {StyledProductsContainer} from "./StyledProductsContainer.tsx";

const ProductsContainer = () => {
    return (
        <StyledProductsContainer>
            <Typography.Title level={2}>Also very important title</Typography.Title>
            <ProductsList/>
            <Button type={"primary"}>Contact Us</Button>
        </StyledProductsContainer>
    )
}

export default ProductsContainer;