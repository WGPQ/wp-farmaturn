import MainLayout from "../layouts/MainLayout";
import baseRoutes from "./base";

const router: object[] = [
    {
        path: '',
        element: <MainLayout />,
        children: baseRoutes
    }

];

export default router;