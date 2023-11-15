import { Link } from "react-router-dom"

const menus = [
    {
        id: 1,
        name: 'Home',
        url: '/'
    },
    {
        id: 2,
        name: 'About',
        url: '/about'
    },
    {
        id: 3,
        name: 'Tours',
        url: '/tours'
    },
    {
        id: 4,
        name: 'Destination',
        url: '/destination'
    },
    {
        id: 5,
        name: 'Blog',
        url: '/blog'
    },
    {
        id: 6,
        name: 'Pages',
        url: '/pages'
    },
    {
        id: 7,
        name: 'Contact',
        url: '/contact'
    }
]

const NavMenus = () => {
    return (
        <>
            {
                menus.map(menu => <li key={menu.id}><Link to={menu.url}>{menu.name}</Link></li>)
            }
        </>
    )
}

export default NavMenus