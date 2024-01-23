import { Navigate } from "react-router-dom";
import Main from "../pages/Main";


const baseRoutes: any[] = [
    {
        path: "/",
        element: <Navigate to="/info" replace />,
    },
    {
        path: "/info",
        element: <Main />,
    },
];

export default baseRoutes;