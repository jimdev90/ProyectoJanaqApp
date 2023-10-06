import { useRoutes } from "react-router-dom";
import {PrincipalLayout} from "../index.jsx";
import {HomePage} from "../../pages/Home/index.jsx";
import {Login} from "../../Auth/Login/index.jsx";

export const RoutesComponent = () => {
    const isLogedIn = false;

    const protectedRoutes = [
        {
            path: "/reservar-cita",
            element: <PrincipalLayout />,
        }
    ];

    const mainRoutes = [
        {
            path: "/",
            element: <PrincipalLayout />,
            children: [
                {
                    index:true,
                    element: <HomePage />
                },
                {
                    path: "/auth",
                    element: <PrincipalLayout />,
                    children: [
                        {
                            index: true,
                            path: 'login',
                            element: <Login />
                        }
                    ]
                }
            ]
        },

    ]

    if (isLogedIn) return useRoutes(protectedRoutes);
    return useRoutes(mainRoutes)
}
