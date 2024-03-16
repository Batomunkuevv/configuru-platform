import { Outlet } from "react-router"

import { AppHeader } from '../app-header';

export const Layout = () => {
    return (
        <div className="wrapper">
            <AppHeader />
            <main className="app-page">
                <Outlet />
            </main>
        </div>
    )
}