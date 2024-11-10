import { useState, useEffect } from "react";
import axios from "axios";
import Item from "./Item";
import ItemPreview from "../Home/ItemPreview";

const Items = ({ brand, limit, previewOnly }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await axios.get("https://sidsoles-backend.onrender.com/api/shoes");
            let filteredItems = response.data;
            
            // Apply filtering by brand and limit if provided
            if (brand) {
                filteredItems = filteredItems.filter(item => item.brand === brand);
            }
            if (limit) {
                filteredItems = filteredItems.slice(0, limit);
            }
            setItems(filteredItems);
        })();
    }, [brand, limit]);

    return (
        <>
            {items.map(item => (
                previewOnly ? (
                    <ItemPreview
                        key={item.id}
                        title={item.title}
                        image={item.image}
                    />
                ) : (
                    <Item
                        key={item.id}
                        id={item.id}
                        brand={item.brand}
                        title={item.title}
                        image={item.image}
                        sku={item.sku}
                        sizes={item.sizes}
                        price={item.price}
                        condition={item.condition}
                        carted={item.carted}
                    />
                )
            ))}
        </>
    );
};

export default Items;
