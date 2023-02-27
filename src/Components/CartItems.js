import React from "react";

const CartItems = ({currentCart, removeCart}) => {

  const conditionalPresentation = () => {
    if (currentCart.current.length < 1) {
     
      return <h2>Your cart is empty!</h2>;
    } else {
     
      return (
        <div className="cartItems">
          {currentCart.current.map((item) => {
            return (
              <div key={item.itemName} className={`cartCard`}>
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
                  removeCart(item.itemName)
                //   ReactDOM.findDOMNode(this).parentNode.className("cartCard removed")
                  }}>Remove</button>
              </div>
            );
          })}
        </div>
      );
    }
  };

    return (

        <div className="items">
        {conditionalPresentation()}
        </div>

    )
}

export default CartItems
