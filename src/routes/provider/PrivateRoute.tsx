import React from "react";
import { Navigate } from "react-router-dom";


interface PrivateRouteProp {
    element: JSX.Element;
}
const PrivateRoute: React.FC<PrivateRouteProp> = ({ element }) => {
    const LogIn = localStorage.getItem("IsLogIn");
    return LogIn === "true" ? element : <Navigate to="/" />;

}

export default PrivateRoute