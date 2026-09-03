import { Outlet } from "react-router";
import NavbarCustom from "./Navbar";

export default function Layout() {
    return (
        <>
            <NavbarCustom />
            <Outlet />
        </>
    );
}