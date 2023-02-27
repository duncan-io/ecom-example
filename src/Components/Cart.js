import React, {useReducer, ReactDOM, useState} from "react";
import CartItems from "./CartItems";

const UpdatedCart = ({ currentCart, hidden, close, removeCart, cart }) => {
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

  const [removedState, setRemovedState] = useState('')
  
  const showCheckout = () => {
    if (currentCart.current.length > 0) {
      return <button className="homeButton">Checkout</button>;
    }
  }





//   useEffect(() => {

//     currentCart.current = cart;
// })
  
  return (
    <div className={hidden}>
      <div className="cartBar">
        <p className="exit" onClick={() => close()}>X</p>
        <CartItems currentCart={currentCart} removeCart={removeCart()}/>
        {showCheckout()}
      </div>
    </div>
  );
};

export default UpdatedCart;
