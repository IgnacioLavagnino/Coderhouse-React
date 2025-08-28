import CartWidget from "./CartWidget"

function NavBar() {
    return (
        <div className="navbar-container">
            <ul className="navbar-list">
                <li href="">Hombres</li>
                <li href="">Mujeres</li>
                <li href="">Niños</li>
            </ul>
            <CartWidget></CartWidget>
        </div>
    )
}

export default NavBar