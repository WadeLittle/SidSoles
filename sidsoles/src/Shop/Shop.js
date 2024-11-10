import Layout from "../Layout";
import Item from "./Item";
import Footer from "../components/Footer";
import "./Shop.css";
import Items from "./Items";

const Shop = () => {
    return (
        <>
            <Layout />
            <div id="shop-items" className="columns">
              <Items/>
            </div>
            <Footer />
        </>
    )
}



export default Shop;