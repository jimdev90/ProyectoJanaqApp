import {Header, Footer} from "./";
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
