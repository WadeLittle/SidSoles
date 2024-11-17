import "./Filler.css";

const Filler = ({ formData }) => {
    return (
        <section id="filler">
            <h1 className="title">{formData.title || "Title"}</h1>
            {formData.image ? (
                <img className="stock-photo" src={URL.createObjectURL(formData.image)} alt="Shoe" />
            ) : (
                <img className="stock-photo" src="./images/jordan-4-white-thunder.jpg" alt="Default Shoe" />
            )}
            <h3 className="sku">Sku: {formData.sku}</h3>
            <label htmlFor="size"></label>
            <select name="size" id="size">
                {formData.sizes.map((size, index) => (
                    <option key={index} value={size}>{size}</option>
                ))}
            </select>
            <h3 className="price">Price: ${formData.price}</h3>
            <h3 className="condition">Condition: {formData.condition}</h3>
            <button className="atc-button">Add To Cart</button>
        </section>
    );
};

export default Filler;