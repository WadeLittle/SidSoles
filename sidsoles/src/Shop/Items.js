import { useState, useEffect } from "react";
import axios from "axios";
import Item from "./Item";

const Items = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await axios.get("http://localhost:3001/api/shoes");
            setItems(response.data);
        })();
    }, []);

    const updateItems = (item) => {
        setItems((items) => [...items, item]);
    }

    return (
        <>
            {items.map(item => (
                    <Item
                        key={item._id}
                        _id={item._id}
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
                
            )}
        </>
    );
};

export default Items;