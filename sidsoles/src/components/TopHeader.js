import {Outlet,Link} from "react-router-dom";
import "../css/TopHeader.css"

const TopHeader = () => {
    return(
        <header id ="main-header">
            <nav id="top-header">
                <ul class="columns">
                    <li><h1>SidSoles</h1></li>
                    <li id="admin"><h2><Link to= "/Admin">Admin</Link></h2></li>
                </ul>
            </nav>
            <Outlet/>
        </header>
    );
}

export default TopHeader;