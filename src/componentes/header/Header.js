import CartWidget from "../cart/CartWidget"
import {Link} from "react-router-dom"

import "./header.css"
const Header = ({ nombre, links }) => {
    return <>
        <header className="containerNav">
            <Link to="Home">
            <h1>{nombre}</h1>
            </Link>
            <nav >
                {links.map((element) => {
                    return <Link key={element.id} to={element.href}>{element.name}</Link>
                })}
               <Link to="cart"><CartWidget/></Link>
            </nav>
        </header>
    </>
}

export default Header;