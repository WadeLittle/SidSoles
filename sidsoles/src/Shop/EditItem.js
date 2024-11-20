import "../css/Dialog.css";
import React, { useState, useEffect } from "react";

const EditItem = (props) => {
  const [result, setResult] = useState("");
  const [inputs, setInputs] = useState({
    _id: props._id,
    title: props.title,
    brand: props.brand,
    sku: props.sku,
    sizes: props.sizes,
    price: props.price,
    condition: props.condition,
    image: props.image,
  });


  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setInputs((prevValues) => ({
      ...prevValues,
      sizes: checked
        ? [...prevValues.sizes, value]
        : prevValues.sizes.filter((size) => size !== value),
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleImageChange = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    console.log(value);
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formDataToSend = new FormData(event.target);
    formDataToSend.append("_id", inputs._id);
    formDataToSend.delete("sizes");
    formDataToSend.append("sizes", JSON.stringify(event.target.sizes));
    console.log(...formDataToSend);
    console.log(inputs._id);
    const response = await fetch(`http://localhost:3001/api/shoes/${props._id}`, {
      method: "PUT",
      body: formDataToSend,
    });
    if (response.status === 200) {
      setResult("Shoe successfully updated!");
      props.updateItem(await response.json());
      props.closeDialog();
    } else {
      setResult("Failed to update shoe.");
    }
  };

  return (
    <div id="edit-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          <form id="edit-property-form" onSubmit={onSubmit}>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Shoe Name"
              required
              value={inputs.title || ""}
              onChange={handleChange}
            />

            <label htmlFor="brand">Brand:</label>
            <select id="brand" name="brand" required value={inputs.brand || ""} onChange={handleChange}>
              <option value="Nike">Nike</option>
              <option value="Yeezy">Yeezy</option>
              <option value="Jordan">Jordan</option>
            </select>

            <label htmlFor="sku">SKU:</label>
            <input
              type="text"
              id="sku"
              name="sku"
              placeholder="SKU"
              value={inputs.sku || ""}
              onChange={handleChange}
            />

            <label htmlFor="sizes">Sizes:</label>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <label>
                <input type="checkbox" name="sizes" value="4.5Y" checked={inputs.sizes.includes("4.5Y")} onChange={handleCheckboxChange} /> 4.5Y
              </label>
              <label>
                <input type="checkbox" name="sizes" value="5Y" checked={inputs.sizes.includes("5Y")} onChange={handleCheckboxChange} /> 5Y
              </label>
              <label>
                <input type="checkbox" name="sizes" value="5.5Y" checked={inputs.sizes.includes("5.5Y")} onChange={handleCheckboxChange} /> 5.5Y
              </label>
              <label>
                <input type="checkbox" name="sizes" value="6Y" checked={inputs.sizes.includes("6Y")} onChange={handleCheckboxChange} /> 6Y
              </label>
              <label>
                <input type="checkbox" name="sizes" value="6.5Y" checked={inputs.sizes.includes("6.5Y")} onChange={handleCheckboxChange} /> 6.5Y
              </label>
              <label>
                <input type="checkbox" name="sizes" value="7Y" checked={inputs.sizes.includes("7Y")} onChange={handleCheckboxChange} /> 7Y
              </label>
              <label>
                <input type="checkbox" name="sizes" value="7.5" checked={inputs.sizes.includes("7.5")} onChange={handleCheckboxChange} /> 7.5
              </label>
              <label>
                <input type="checkbox" name="sizes" value="8" checked={inputs.sizes.includes("8")} onChange={handleCheckboxChange} /> 8
              </label>
              <label>
                <input type="checkbox" name="sizes" value="8.5" checked={inputs.sizes.includes("8.5")} onChange={handleCheckboxChange} /> 8.5
              </label>
              <label>
                <input type="checkbox" name="sizes" value="9" checked={inputs.sizes.includes("9")} onChange={handleCheckboxChange} /> 9
              </label>
              <label>
                <input type="checkbox" name="sizes" value="9.5" checked={inputs.sizes.includes("9.5")} onChange={handleCheckboxChange} /> 9.5
              </label>
              <label>
                <input type="checkbox" name="sizes" value="10" checked={inputs.sizes.includes("10")} onChange={handleCheckboxChange} /> 10
              </label>
              <label>
                <input type="checkbox" name="sizes" value="10.5" checked={inputs.sizes.includes("10.5")} onChange={handleCheckboxChange} /> 10.5
              </label>
              <label>
                <input type="checkbox" name="sizes" value="11" checked={inputs.sizes.includes("11")} onChange={handleCheckboxChange} /> 11
              </label>
              <label>
                <input type="checkbox" name="sizes" value="11.5" checked={inputs.sizes.includes("11.5")} onChange={handleCheckboxChange} /> 11.5
              </label>
              <label>
                <input type="checkbox" name="sizes" value="12" checked={inputs.sizes.includes("12")} onChange={handleCheckboxChange} /> 12
              </label>
              <label>
                <input type="checkbox" name="sizes" value="12.5" checked={inputs.sizes.includes("12.5")} onChange={handleCheckboxChange} /> 12.5
              </label>
              <label>
                <input type="checkbox" name="sizes" value="13" checked={inputs.sizes.includes("13")} onChange={handleCheckboxChange} /> 13
              </label>
            </div>

            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Price"
              value={inputs.price || ""}
              onChange={handleChange}
            />

            <label htmlFor="condition">Condition:</label>
            <select id="condition" name="condition" value={inputs.condition || ""} onChange={handleChange}>
              <option value="Brand New">Brand New</option>
              <option value="Lightly Worn">Lightly Worn</option>
              <option value="Heavily Worn">Heavily Worn</option>
            </select>

            <label htmlFor="image">Image:</label>
            <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} />

            <input type="submit" value="Submit" />
            <p>{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditItem;