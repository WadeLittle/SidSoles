import Jordan4Thunder from "./images/jordan-4-white-thunder.jpg";
import "./Filler.css";
const Filler = () => {
    return (
        <section id="filler">
            <h1 className="title">Jordan 4 Retro White Thunder</h1>
            <img className="stock-photo" src={Jordan4Thunder} />
            <h3 className="sku">Sku: </h3>
            <label for="size"></label>
            <select name="size" id="size">
                <option value="6">6</option>
                <option value="7">7</option>
            </select>
            <h3 className="price">Price:</h3>
            <h3 className="condition">Condition:</h3>
            <button className="atc-button">Add To Cart</button>
        </section>
    )
}

export default Filler;