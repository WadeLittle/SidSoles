import "../Cart/CartInfo.css";
import jordan4WhiteThunder from "../Cart/images/jordan-4-white-thunder.jpg";

const CartInfo = () => {
    return (
        <>
            <section id="cart-info">
                <h2>Cart</h2>
                <section className="cart-item columns">
                    <section className="cart-image">
                        <img src={jordan4WhiteThunder} />
                    </section>
                    <section className="cart-data">
                        <h3 className="item-name">Jordan 4</h3>
                        <h3 className="cart-size">Size:</h3>
                        <h3 className="cart-condition">Condition:
                        </h3>
                        <h3 className="cart-price">$170</h3>
                        <button className="remove-button">X </button>
                    </section>
                </section>
                <section className="cart-item columns">
                    <section className="cart-image">
                        <img src={jordan4WhiteThunder} />
                    </section>
                    <section className="cart-data">
                        <h3 className="item-name">Jordan 4</h3>
                        <h3 className="cart-size">Size:</h3>
                        <h3 className="cart-condition">Condition:
                        </h3>
                        <h3 className="cart-price">$170</h3>
                        <button className="remove-button">X </button>
                    </section>
                </section>


                <h1 id="total-price">Total:</h1>
                <button id="checkout-button">Checkout</button>
            </section>
        </>
    );
}

export default CartInfo;