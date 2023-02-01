import { NavLink } from "react-router-dom";

const CartButton = () => {
    return (
        <button>
            Корзина<span>1205 руб</span>
        </button>
    );
}

const Header = () => {
    return (
        <header className="header">
            <div className="logo">

            </div>
            <nav className="nav">
                <CartButton />
                <NavLink to={"/favorites"}>Избранное</NavLink>
                <NavLink to={"/orders"}>Заказы</NavLink>
            </nav>
        </header>
    );
}

export default Header;