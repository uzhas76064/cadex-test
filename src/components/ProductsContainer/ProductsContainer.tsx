import {Button, Typography} from "antd";
import ProductsList, {ProductsListProps} from "../ProductsList/ProductsList.tsx";
import {StyledProductsContainer} from "./StyledProductsContainer.tsx";
import {useNavigate} from "react-router";

type ProductsContainerProps = ProductsListProps;

const ProductsContainer = ({content}: ProductsContainerProps) => {
    const navigate = useNavigate();

    const handleContactBtnClick = () => {
        navigate("/contact-us");
    }

    return (
        <StyledProductsContainer>
            <Typography.Title level={2}>Also very important title</Typography.Title>
            <ProductsList content={content} />
            <Button onClick={handleContactBtnClick} type={"primary"}>Contact Us</Button>
        </StyledProductsContainer>
    )
}

export default ProductsContainer;