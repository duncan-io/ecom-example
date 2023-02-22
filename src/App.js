import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styling/App.css";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import UpdatedCart from "./Components/Cart";

const App = () => {
  const [cart, setCart] = useState([]);
  const [hidden, setHidden] = useState("cart hidden")
  const currentCart = useRef(cart);

  const addCart = ({ itemName, itemPrice, itemImage }) => {
    setCart([...cart, { itemName, itemPrice, itemImage }]);
  };

  const removeCart = (itemName) => {
    setCart(cart.filter(item => {
     return item.itemName !== itemName
  }))
    currentCart.current = cart
  }

  useEffect(() => {
    currentCart.current = cart;
  });

 
 
  const close = () => {
    if(hidden === "cart hidden"){
      setHidden("cart")
    } else{
      setHidden("cart hidden")
    }
  }
  return (
    <BrowserRouter>
      <UpdatedCart currentCart={currentCart} hidden={hidden} close={close} removeCart = {removeCart} />
      <Nav close={close} cart={cart}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop addCart={addCart} />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
