import React from "react";
import CartItems from "./CartItems";

const UpdatedCart = ({ currentCart, hidden, close, removeCart, cart }) => {

   const conditionalPresentation = () => {
    if (currentCart.current.length < 1) {
     
      return <h2>Your cart is empty!</h2>;
    } else {
     
      return (
        <div className="cartItems">
          {currentCart.current.map((item) => {
            return (
              <CartItems key={item.itemName} item={item} removeCart={removeCart}/>
            );
          })}
        </div>
      );
    }
  };


  const showCheckout = () => {
    if (currentCart.current.length > 0) {
      return <button className="homeButton">Checkout</button>;
    }
  }

  return (
    <div className={hidden}>
      <div className="cartBar">
        <p className="exit" onClick={() => close()}>X</p>
        {conditionalPresentation()}
        {showCheckout()}
      </div>
    </div>
  );
};

export default UpdatedCart;
