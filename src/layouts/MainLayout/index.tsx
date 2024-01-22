import { ReactNode } from "react";
import { Outlet } from "react-router-dom"
interface MainLayoutProps {
    children?: ReactNode; // La propiedad children es opcional
}
function MainLayout({ children }: MainLayoutProps) {
    return (
        <div
            style={{
                flex: 1,
                height: '100%'
            }}
        >
            {children ?? <Outlet />}
        </div>
    )
}

export default MainLayout