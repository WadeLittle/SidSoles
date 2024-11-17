import "./Create.css";
import React, { useState } from "react";

const Create = (props) => {
    const [inputs, setInputs] = useState({});
    const [result, setResult] = useState("");
    const [selectedSizes, setSelectedSizes] = useState([]);

    const addToServer = async (event) => {
        event.preventDefault();
        setResult("Sending...");

      
        const formData = new FormData(event.target);
        formData.delete("sizes")
        formData.append("sizes", JSON.stringify(selectedSizes));

        console.log(...formData);


            const response = await fetch("https://sidsoles-backend.onrender.com/api/shoes", {
                method: "POST",
                body: formData,
            });
            if (response.status === 200) {
                setResult("Shoe successfully added!");
                props.showNewShoe(await response.json());
                event.target.reset();
                setSelectedSizes([]);
            } else {
                setResult("Failed to add shoe.");
        }
    };


    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        setSelectedSizes((prevSizes) =>
            checked ? [...prevSizes, value] : prevSizes.filter((size) => size !== value)
        );
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs((prevValues) => ({ ...prevValues, [name]: value }));
    };
    const handleImageChange = (event) => {
        const name = event.target.name;
        const value = event.target.files[0];
        console.log(value);
        setInputs((values)=>({...values,[name]:value}));
      };
    
    

    return (
        <div id="add-dialog">
            <form id="add-property-form" onSubmit={addToServer}>
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
        <input type="checkbox" name="sizes" value="4.5Y" onChange={handleCheckboxChange} /> 4.5Y
    </label>
    <label>
        <input type="checkbox" name="sizes" value="5Y" onChange={handleCheckboxChange} /> 5Y
    </label>
    <label>
        <input type="checkbox" name="sizes" value="5.5Y" onChange={handleCheckboxChange} /> 5.5Y
    </label>
    <label>
        <input type="checkbox" name="sizes" value="6Y" onChange={handleCheckboxChange} /> 6Y
    </label>
    <label>
        <input type="checkbox" name="sizes" value="6.5Y" onChange={handleCheckboxChange} /> 6.5Y
    </label>
    <label>
        <input type="checkbox" name="sizes" value="7Y" onChange={handleCheckboxChange} /> 7Y
    </label>
    <label>
        <input type="checkbox" name="sizes" value="7.5" onChange={handleCheckboxChange} /> 7.5
    </label>
    <label>
        <input type="checkbox" name="sizes" value="8" onChange={handleCheckboxChange} /> 8
    </label>
    <label>
        <input type="checkbox" name="sizes" value="8.5" onChange={handleCheckboxChange} /> 8.5
    </label>
    <label>
        <input type="checkbox" name="sizes" value="9" onChange={handleCheckboxChange} /> 9
    </label>
    <label>
        <input type="checkbox" name="sizes" value="9.5" onChange={handleCheckboxChange} /> 9.5
    </label>
    <label>
        <input type="checkbox" name="sizes" value="10" onChange={handleCheckboxChange} /> 10
    </label>
    <label>
        <input type="checkbox" name="sizes" value="10.5" onChange={handleCheckboxChange} /> 10.5
    </label>
    <label>
        <input type="checkbox" name="sizes" value="11" onChange={handleCheckboxChange} /> 11
    </label>
    <label>
        <input type="checkbox" name="sizes" value="11.5" onChange={handleCheckboxChange} /> 11.5
    </label>
    <label>
        <input type="checkbox" name="sizes" value="12" onChange={handleCheckboxChange} /> 12
    </label>
    <label>
        <input type="checkbox" name="sizes" value="12.5" onChange={handleCheckboxChange} /> 12.5
    </label>
    <label>
        <input type="checkbox" name="sizes" value="13" onChange={handleCheckboxChange} /> 13
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
                <input type="file" id="image" name="image" accept="image/*"onChange={handleImageChange} />

                <input type="submit" value="Submit" />
                <p>{result}</p>
            </form>
        </div>
    );
};

export default Create;
