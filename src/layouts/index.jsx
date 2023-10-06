import {Header} from "./Header/index.jsx";
import {Footer} from "./Footer/index.jsx";
import {Outlet} from "react-router-dom";

export const PrincipalLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
