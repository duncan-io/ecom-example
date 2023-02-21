import React from "react";

const UpdatedCart = ( {currentCart} ) => {
   const newCart = currentCart.current
    console.log(newCart)

   const conditionalPresentation = () => {

    if (newCart.length === 0) {
        console.log("No shit in here")
        return(
            <h2>Your cart is empty!</h2>
        )
    } else {
        console.log("lotsa shit in here")
        return(
        <div className="cartItems">
      {newCart.map((item) => {

        return (
          <div key={item.itemName} className="cartCard">
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
          </div>
        );
      })}
    </div>
    )}}
  return (
    <div>
        {conditionalPresentation()}
    </div>
        
  );
};


export default UpdatedCart;
