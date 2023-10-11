import { Link } from "react-router-dom";
export const NavBar = () => {

    const menuItems = [
        {
            text : 'Home',
            link: '/'
        },
        {
            text : 'Tours',
            link: '/tours'
        },
        {
            text : 'Hoteles',
            link: '/hotels'
        },
        {
            text : 'Apartamentos',
            link: '/apartaments'
        },
        {
            text : 'Nosotros',
            link: '/about'
        },
        {
            text : 'Contactanos',
            link: '/contact'
        },
    ];
    return (
        <ul className="nav navbar-nav navbar-right">
            {
                menuItems.map((item, index) => (
                    <li key={index}>
                        <Link to={item.link}>{item.text}</Link>
                    </li>
                ))
            }
        </ul>
    )
}
