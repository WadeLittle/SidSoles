import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Item from "./Item";
import Create from "../Admin/Create";
import { ItemsContext } from "../ItemsContext";

const Items = () => {
    const [items, setItems] = useContext(ItemsContext);

    useEffect(() => {
        (async () => {
            const response = await axios.get("https://sidsoles-backend.onrender.com/api/shoes");
            setItems(response.data);
        })();
    }, [setItems]);


    return (
        <>
            {items.map(item => (
                    <Item
                        key={item.id} {...item}

                    />
                )
            )}
        </>
    );
};

export default Items;
