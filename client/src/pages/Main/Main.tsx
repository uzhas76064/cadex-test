import {StyledMain} from "./StyledMain.tsx";
import Header from "../../components/Header/Header.tsx";
import Contact from "../../components/Contact/Contact.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import Promo from "../../components/Promo/Promo.tsx";
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer.tsx";
import {useEffect, useState} from "react";
import {Content} from "../../types/Content.ts";
import {apiURL} from "../../const.ts";

const Main= () => {
    const [content, setContent] = useState<Content[]>([]);

    const fetchData = async () => {
        const data = await fetch(`${apiURL}/content`);

        return data.json();
    }

    useEffect(() => {
        fetchData().then(data => setContent(data));
    }, [])

    return (
        <>
            <Header/>
            <StyledMain>
                <Promo/>
                <ProductsContainer content={content} />
                <Contact/>
            </StyledMain>
            <Footer/>
        </>
    )
}

export default Main;