import React, {useEffect, useReducer} from "react";

const UpdatedCart = ({ currentCart, hidden, close, removeCart }) => {
  // const [items, dispatch] = useReducer(reducer, [])


  // const reducer = (cartItem, action) => {
  //   switch (action.type){
  //     case ACTIONS.REMOVE_STYLE:
  //       return currentCart.current.map(item => {
  //         if (item.ItemName === cartItem.itemName) {
  //           return [...]
  //         }
  //       })
  //     default:
  //       return currentCart.current
  //   }
  // }
  
  const showCheckout = () => {
    if (currentCart.current.length > 0) {
      return <button className="homeButton">Checkout</button>;
    }
  }




  const conditionalPresentation = () => {
    if (currentCart.current.length < 1) {
     
      return <h2>Your cart is empty!</h2>;
    } else {
     
      return (
        <div className="cartItems">
          {currentCart.current.map((item) => {
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
                <button type="button" className="removeButton" onClick={() => removeCart(item.itemName)}>Remove</button>
              </div>
            );
          })}
        </div>
      );
    }
  };

  useEffect(() => {
    conditionalPresentation()
})
  
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
