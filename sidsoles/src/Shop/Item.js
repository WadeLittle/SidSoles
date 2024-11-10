import "./Item.css";

const Item = (item) => {
  return (
    <section className="shop-section">
      <h1 className="title">{item.title}</h1>
      <img
        className="stock-photo"
        src ={`${process.env.PUBLIC_URL}/images/${item.image}`}
        alt={item.title}
      />
      <h3 className="sku">Sku: {item.sku}</h3>
      <label for="size"></label>
      <select name="size" id="size">
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
      <h3 className="price">Price: ${item.price}</h3>
      <h3 className="condition">Condition: {item.condition}</h3>
      <button className="atc-button">Add To Cart</button>
    </section>
  );
};

export default Item;