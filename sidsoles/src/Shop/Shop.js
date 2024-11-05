import Layout from "../Layout";
import Item from "./Item";
import Footer from "../components/Footer";
import "./Shop.css";

const Shop = () => {
    return (
        <>
            <Layout />
            <div id="shop-items" className="columns">
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
            <Footer />
        </>
    )
}



export default Shop;