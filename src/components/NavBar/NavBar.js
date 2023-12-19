import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return (
        <nav>
            <h3>Ecommerce</h3>
            <div>
                <button>Carteras</button>
                <button>Billeteras</button>
                <button>Bolsos</button>
                <button>Bandoleras</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar