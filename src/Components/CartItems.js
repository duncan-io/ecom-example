import React from "react";

const CartItems = ({item, removeCart}) => {

 

    return (

      <div  className={`cartCard ${item.visible ? "" : "removed"}`}>
      <img
        className="cartImage"
        src={item.itemImage}
        alt={item.itemName}
      />
      <div className="cartUtils">
        <div className="cartInfo">
          <h5>{item.itemName}</h5>
          <p>${item.itemPrice}</p>
        </div>
      </div>
      <button type="button" className="removeButton" onClick={() => {
        removeCart(item.itemName);
        item.visible = false;
        }}>Remove</button>
    </div>

    )
}

export default CartItems
