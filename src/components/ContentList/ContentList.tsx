import ContentCard from "../ContentCard/ContentCard.tsx";
import {Content} from "../../types/Content.ts";
import {StyledContentList} from "./StyledContentList.tsx";

export type ProductsListProps = {
    content: Content[];
}

const ContentList = ({content}: ProductsListProps) => {
    return (
        <StyledContentList>
            {content.map((item) => (
                <ContentCard key={item.id} title={item.title} text={item.text} />
            ))}
        </StyledContentList>
    )
}

export default ContentList;