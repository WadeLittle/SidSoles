import Layout from "../Layout";
import Create from "./Create";
import Login from "./Login";
import Filler from "./Filler";
import Footer from "../components/Footer";
import "./Admin.css";
import { useState } from "react";

const Admin = () => {
    const [items, setItems] = useState([]);
    const [formData, setFormData] = useState({
        title: "",
        brand: "",
        sku: "",
        sizes: [],
        price: "",
        condition: "",
        image: null,
    });

    const updateItems = (item) => {
        setItems((items) => [...items, item]);
    };

    return (
        <>
            <Layout />
            <div id="filler-and-login" className="columns">
                <Filler formData={formData} />
                <Login />
            </div>
            <Create showNewShoe={updateItems} formData={formData} setFormData={setFormData} />
            <Footer />
        </>
    );
};

export default Admin;