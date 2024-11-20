import "./Create.css";
import React, { useState, useEffect } from "react";

const Create = (props) => {
    const { formData, setFormData, showNewShoe } = props;
    const [result, setResult] = useState("");
    const [selectedSizes, setSelectedSizes] = useState([]);
    console.log(formData);
    useEffect(() => {
        setFormData((prevValues) => ({ ...prevValues, sizes: selectedSizes }));
    }, [selectedSizes, setFormData]);

    const addToServer = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        const formDataToSend = new FormData(event.target);
        formDataToSend.delete("sizes");
        formDataToSend.append("sizes", JSON.stringify(selectedSizes));

        console.log(...formDataToSend);

        const response = await fetch("http://localhost:3001/api/shoes", {
            method: "POST",
            body: formDataToSend,
        });
        if (response.status === 200) {
            setResult("Shoe successfully added!");
            showNewShoe(await response.json());
            event.target.reset();
            setSelectedSizes([]);
            setFormData({
                title: "",
                brand: "",
                sku: "",
                sizes: [],
                price: "",
                condition: "",
                image: null,
            });
        } else {
            setResult("Failed to add shoe.");
        }
    };

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        setSelectedSizes((prevValues) =>
            checked ? [...prevValues, value] : prevValues.filter((size) => size !== value)
        );
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const handleImageChange = (event) => {
        const name = event.target.name;
        const value = event.target.files[0];
        console.log(value);
        setFormData((values) => ({ ...values, [name]: value }));
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
                    value={formData.title || ""}
                    onChange={handleChange}
                />

                <label htmlFor="brand">Brand:</label>
                <select id="brand" name="brand" required value={formData.brand || ""} onChange={handleChange}>
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
                    value={formData.sku || ""}
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
                    value={formData.price || ""}
                    onChange={handleChange}
                />

                <label htmlFor="condition">Condition:</label>
                <select id="condition" name="condition" value={formData.condition || ""} onChange={handleChange}>
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
    );
};

export default Create;