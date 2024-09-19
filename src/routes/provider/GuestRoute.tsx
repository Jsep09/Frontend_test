import React from "react";
import { Navigate } from "react-router-dom";


interface GuestRouteProp {
    element: JSX.Element;
}
const GuestRoute: React.FC<GuestRouteProp> = ({ element }) => {
    const LogIn = localStorage.getItem("IsLogIn");
    return LogIn === "true" ? <Navigate to="/dashboard" /> : element;

}

export default GuestRoute