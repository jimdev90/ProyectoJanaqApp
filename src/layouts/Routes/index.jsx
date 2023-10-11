import { useRoutes } from "react-router-dom";
import {PrincipalLayout} from "../index.js";
import {HomePage, ContactPage, TourPage, AboutPage, HotelPage, ApartamentsPage} from "../../pages";
import {Login, Register} from '../../auth';

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
                    path: "/tours",
                    element: <TourPage />
                },
                {
                    path: "/hotels",
                    element: <HotelPage />
                },
                {
                    path: "/apartaments",
                    element: <ApartamentsPage />
                },
                {
                    path: "/contact",
                    element: <ContactPage />
                },
                {
                    path: "/about",
                    element: <AboutPage />
                },
                {
                    path: "/auth",
                    element: <PrincipalLayout />,
                    children: [
                        {
                            index: true,
                            path: 'login',
                            element: <Login />
                        },
                        {
                            index: true,
                            path: 'register',
                            element: <Register />
                        }
                    ]
                }
            ]
        },

    ]

    if (isLogedIn) return useRoutes(protectedRoutes);
    return useRoutes(mainRoutes)
}
