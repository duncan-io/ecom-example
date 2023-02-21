import React, {useRef} from "react";

const UpdatedCart = ({ currentCart, hidden, close, removeCart }) => {
  const newCart = currentCart.current;
  
  const showCheckout = () => {
    if (newCart.length > 0) {
      return <button className="homeButton">Checkout</button>;
    }
  }

  const conditionalPresentation = () => {
    console.log(`new cart is ${newCart}`)
    if (newCart.length === 0) {
     
      return <h2>Your cart is empty!</h2>;
    } else {
     
      return (
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
                <button className="removeButton" onClick={() => removeCart(item.itemName)}>Remove</button>
              </div>
            );
          })}
        </div>
      );
    }
  };
  return (
    <div className={hidden}>
      <div className="cartBar">
        <p className="exit" onClick={() => close()}>X</p>
        <div className="items">
          {conditionalPresentation()}
        </div>
        {showCheckout()}
      </div>
    </div>
  );
};

export default UpdatedCart;
