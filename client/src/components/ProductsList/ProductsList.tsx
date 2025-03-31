import ProductCard from "../ProductCard/ProductCard.tsx";
import {Content} from "../../types/Content.ts";
import {StyledProductList} from "./StyledProductList.tsx";

export type ProductsListProps = {
    content: Content[];
}

const ProductsList = ({content}: ProductsListProps) => {
    return (
        <StyledProductList>
            {content.map((item) => (
                <ProductCard key={item.id} title={item.title} text={item.text} />
            ))}
        </StyledProductList>
    )
}

export default ProductsList;