import {PropsWithChildren} from "react";
import {Navigate} from "react-router";

type PrivateRouteProps = {
    isSuccess: boolean;
}

const PrivateRoute = ({isSuccess, children}: PropsWithChildren<PrivateRouteProps>) => {
    return isSuccess ? children : <Navigate to="/contact-us" />;
}

export default PrivateRoute;