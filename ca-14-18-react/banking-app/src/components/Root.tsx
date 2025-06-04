import {
    Outlet
} from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Root() {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
}