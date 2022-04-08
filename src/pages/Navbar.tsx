import { Link } from "react-router-dom";

export const Navbar = (): JSX.Element => {
    return (
        <main className="navbar">
            <span>Store</span>
            <aside>
                <Link to="/" className="navbar_link">
                    Home
                </Link>
                <Link to="/cart" className="navbar_link">
                    Cart
                </Link>
                <span className="cart-count">Cart items</span>
            </aside>
        </main>
    );
};




