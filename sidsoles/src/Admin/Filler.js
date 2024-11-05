import Jordan4Thunder from "./images/jordan-4-white-thunder.jpg";
import "./Filler.css";
const Filler = () => {
    return (
        <section id="filler">
            <h1 class="title">Jordan 4 Retro White Thunder</h1>
            <img class="stock-photo" src={Jordan4Thunder} />
            <h3 class="sku">Sku: </h3>
            <label for="size"></label>
            <select name="size" id="size">
                <option value="6">6</option>
                <option value="7">7</option>
            </select>
            <h3 class="price">Price:</h3>
            <h3 class="condition">Condition:</h3>
            <button class="atc-button">Add To Cart</button>
        </section>
    )
}

export default Filler;