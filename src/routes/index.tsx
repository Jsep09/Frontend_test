import { createBrowserRouter } from "react-router-dom";
import GuestRoute from "./provider/GuestRoute";
import PrivateRoute from "./provider/PrivateRoute";

import LoginPage from "../pages/Login";
import DashBoard from "../pages/DashBoard";
import Detailed from '../pages/Detailed'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <GuestRoute element={<LoginPage />} />
    },
    {
        path: "/dashboard",
        element: <PrivateRoute element={<DashBoard />} />
    },
    {
        path: "/detail/:id",
        element: <PrivateRoute element={<Detailed />} />
    }
])

