import Layout from "../Layout";
import Create from "./Create";
import Login from "./Login";
import Filler from "./Filler";
import Footer from "../components/Footer";
import "./Admin.css";
import { useState } from "react";

const Admin = () => {
    const [items, setItems] = useState([]);

    const updateItems = (item) => {
        setItems((items) => [...items, item]);
    }

    return (
        <>
            <Layout />
            <div id="filler-and-login" className="columns">
                <Filler />
                <Login />
            </div>
            <Create showNewShoe={updateItems} />
            <Footer />
        </>
    )
}

export default Admin;