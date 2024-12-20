import "../css/Dialog.css";
import React, { useState } from "react";

const DeleteItem = (props) => {
  const [result, setResult] = useState("");

  const deleteItem = async() => {
   const response = await fetch(`https://sidsoles-backend.onrender.com/api/shoes/${props._id}`,{
    method:"DELETE"
   });

   if(response.status === 200){
    setResult("Shoe successfully delete");
    props.hideItem();
    props.closeDialog();
   } else {
    setResult("Sorry, we couldn't delete your Item at this time.");
   }
  };

  return (
    <div id="delete-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          <div id="delete-content">
            <h3>Are you sure you want to delete the {props.title}</h3>
            <section>
              <button onClick={props.closeDialog}>No</button>            
              <button onClick={deleteItem}>Yes</button>
            </section>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteItem;