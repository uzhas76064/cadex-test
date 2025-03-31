import {StyledMain} from "./StyledMain.tsx";
import Header from "../../components/Header/Header.tsx";
import Contact from "../../components/Contact/Contact.tsx";
import Footer from "../../components/Footer/Footer.tsx";
import Promo from "../../components/Promo/Promo.tsx";
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer.tsx";

const Main= () => {
    return (
        <>
            <Header/>
            <StyledMain>
                <Promo/>
                <ProductsContainer/>
                <Contact/>
            </StyledMain>
            <Footer/>
        </>
    )
}

export default Main;