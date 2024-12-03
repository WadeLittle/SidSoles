import "./Item.css";
import React, { useState } from "react";
import EditItem from "./EditItem";
import DeleteItem from "./DeleteItem";

const Item = (props) => {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [item, setItem] = useState(props);
  const [showItem, setShowItem] = useState(true);

  const openEditDialog = () => {
    setShowEditDialog(true);
  };

  const closeEditDialog = () => {
    setShowEditDialog(false);
  };

  const openDeleteDialog = () => {
    setShowDeleteDialog(true);
  };

  const closeDeleteDialog = () => {
    setShowDeleteDialog(false);
  };

  const hideItem = () => {
    setShowItem(false);
  };

  const editItem = (newItem) => {
    setItem(newItem);
  };

  return (
    <>
      {showItem ? (
        <div className="shop-section">
          {showDeleteDialog && (
            <DeleteItem
              closeDialog={closeDeleteDialog}
              hideItem={hideItem}
              title={item.title}
              _id={item._id}
            />
          )}
          {showEditDialog && (
            <EditItem
              closeDialog={closeEditDialog}
              updateItem={editItem}
              _id={item._id}
              title={item.title}
              brand={item.brand}
              sku={item.sku}
              sizes={item.sizes}
              price={item.price}
              condition={item.condition}
              image={item.image}
            />
          )}
          <section >
            <h1 className="title">{item.title}</h1>
            <section id="change-buttons">
              <a href="#" onClick={openEditDialog}>
                &#9998;
              </a>
              <a href="#" onClick={openDeleteDialog}>
                &#10006;
              </a>
            </section>
            <img
              className="stock-photo"
              src={`http://localhost:3001/images/${item.image}`}
              alt={item.title}
            />
            <h3 className="sku">Sku: {item.sku}</h3>
            <label htmlFor="size"></label>
            <select name="size" id="size">
              {item.sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            <h3 className="price">Price: ${item.price}</h3>
            <h3 className="condition">Condition: {item.condition}</h3>
            <button className="atc-button">Add To Cart</button>
          </section>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Item;