import {Typography} from "antd";
import {StyledIframe, StyledPromo} from "./StyledPromo.tsx";
import {promoVideoUrl} from "../../const.ts";

const Promo = () => {
    return (
        <StyledPromo>
            <div>
                <Typography.Title level={1}>
                    Most important title on the page
                </Typography.Title>
                <Typography.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum
                    ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante
                </Typography.Text>
            </div>
            <StyledIframe width="500px" height="250px" src={`${promoVideoUrl}`}
                    title="Rick Astley - Never Gonna Give You Up (Official Music Video)" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen></StyledIframe>
        </StyledPromo>
    )
}

export default Promo;