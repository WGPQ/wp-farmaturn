import { Navigate } from "react-router-dom";
import Main from "../pages/Main";


const baseRoutes: any[] = [
    {
        path: "/",
        element: <Navigate to="/main" replace />,
    },
    {
        path: "/main",
        element: <Main />,
    },
];

export default baseRoutes;