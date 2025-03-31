import {PropsWithChildren} from "react";
import {Navigate} from "react-router";

type PrivateRouteProps = {
    isAuthorized: boolean;
}

const PrivateRoute = ({isAuthorized, children}: PropsWithChildren<PrivateRouteProps>) => {
    return isAuthorized ? children : <Navigate to="/login" />;
}

export default PrivateRoute;