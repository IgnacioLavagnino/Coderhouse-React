import { Link, Outlet } from "react-router-dom"
import CartWidget from "./CartWidget"

function NavBar() {
    return (
        <>
            <div className="navbar-container">
                <ul className="navbar-list">
                    <li>
                        <Link to={"/"}>Inicio</Link>  
                    </li>
                    <li href="/">Hombres</li>
                    <li href="/">Mujeres</li>
                    <li href="/">Niños</li>
                </ul>
                <CartWidget></CartWidget>
            </div>
            <Outlet/>
        </>
    )
}

export default NavBar