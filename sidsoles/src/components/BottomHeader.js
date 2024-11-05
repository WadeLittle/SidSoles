import "../css/BottomHeader.css";
import { Outlet, Link } from "react-router-dom";

const BottomHeader = () => {
    return (<header id="bottom-header">
        <nav id="main-nav">
            <div id="toggle-nav">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul id="nav-items" className="columns hidden-small">
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