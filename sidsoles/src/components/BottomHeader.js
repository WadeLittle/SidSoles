import "../css/BottomHeader.css";
import { Outlet, Link } from "react-router-dom";
import {useState} from "react";

const BottomHeader = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }



    return (<header id="bottom-header">
        <nav id="main-nav">
            <div id="toggle-nav" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul id="nav-items" className={menuOpen?"columns":"columns hidden-small"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/AboutUs">About Us</Link></li>
                <li><Link to="/Shop">Shop</Link></li>
                <li><Link to="/Cart">Cart</Link></li>
                <li><Link to="/ContactUs">Contact Us</Link></li>
            </ul>
        </nav>
        <Outlet />
    </header>
    )
}
export default BottomHeader;