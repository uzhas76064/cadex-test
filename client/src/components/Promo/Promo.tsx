import {Typography} from "antd";
import {StyledPromo} from "./StyledPromo.tsx";

const Promo = () => {
    return (
        <StyledPromo>
            <div>
                <Typography.Title level={1}>
                    Most important title on the page
                </Typography.Title>
                <Typography.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante
                </Typography.Text>
            </div>
            <video muted={true} autoPlay={true} src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"></video>
        </StyledPromo>
    )
}

export default Promo;