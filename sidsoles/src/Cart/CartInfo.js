import "../Cart/CartInfo.css";
import jordan4WhiteThunder from "../Cart/images/jordan-4-white-thunder.jpg";

const CartInfo = () => {
   return (
   <>
        <section id="cart-info">
            <h2>Cart</h2>
            <section class="cart-item columns">
                <section class="cart-image">
                 <img src={jordan4WhiteThunder}/>
                </section>
                <section class="cart-data">
                    <h3 class="item-name">Jordan 4</h3>
                    <h3 class="cart-size">Size:</h3>
                    <h3 class="cart-condition">Condition:
                    </h3>
                    <h3 class="cart-price">$170</h3>
                    <button class="remove-button">X </button>
                </section>
            </section>
            <section class="cart-item columns">
                <section class="cart-image">
                    <img src={jordan4WhiteThunder}/>
                </section>
                <section class="cart-data">
                    <h3 class="item-name">Jordan 4</h3>
                    <h3 class="cart-size">Size:</h3>
                    <h3 class="cart-condition">Condition:
                    </h3>
                    <h3 class="cart-price">$170</h3>
                    <button class="remove-button">X </button>
                </section>
            </section>

          
            <h1 id="total-price">Total:</h1>
            <button id="checkout-button">Checkout</button>
        </section> 
        </>
    );
}

export default CartInfo;