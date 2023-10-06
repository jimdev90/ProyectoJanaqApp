import {useEffect} from "react";
import {NavBar} from "../../components/NavBar/index.jsx";
export const Header = () => {

    useEffect(() => {
        const stickyNav = $('header').offset().top;
        $(window).scroll(function() {
            if ($(window).scrollTop() > stickyNav) {
                $('header').addClass('header-top-sky');
            } else {
                $('header').removeClass('header-top-sky');
            }
        });
    }, []);
    return (
        <header className="header-sky">
            <div className="container">
                <div className="header-top">
                    <div className="header-top-left">
                        <span><i className="ion-android-cloud-outline"></i>18 °C</span>
                        <span><i className="ion-ios-location-outline"></i> 121 King Str, Melbourne Victoria</span>
                        <span><i className="fa fa-phone" aria-hidden="true"></i> 1-548-854-8898</span>
                    </div>
                    <div className="header-top-right">
                        <ul>
                            <li className="dropdown"><a href="login.html" title="LOGIN"
                                                        className="dropdown-toggle">Iniciar Sesión</a></li>
                            <li className="dropdown"><a href="register.html" title="REGISTER"
                                                        className="dropdown-toggle">Registrate</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="menu-header">
                <nav className="navbar navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header ">
                            <button type="button" className="navbar-toggle" data-toggle="collapse"
                                    data-target=".navbar-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar "></span>
                                <span className="icon-bar "></span>
                                <span className="icon-bar "></span>
                            </button>
                            <a className="navbar-brand" href="file:///E:/Xampp/htdocs/skyline/index.html"
                               title="Skyline"><img src="images/Home-1/sky-logo-header.png" alt="#" /></a>
                        </div>
                        <div className="collapse navbar-collapse">
                            <NavBar />
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}
