import Layout from "../Layout";
import CartInfo from "./CartInfo";
import CheckoutInfo from "./CheckoutInfo";
import Footer from "../components/Footer";
import "../Cart/Cart.css";
const Cart = () => {
    return (
        <>
            <Layout />
            <div class="columns">
                <CheckoutInfo />
                <CartInfo />
            </div>
            <Footer />
        </>
    )
}


export default Cart;