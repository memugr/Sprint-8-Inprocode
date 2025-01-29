import { Outlet } from "react-router-dom";
import Navbar from "./pages/Navbar";

const RootLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default RootLayout;