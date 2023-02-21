import React, {useState, useRef, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styling/App.css';
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import UpdatedCart from "./Components/Cart";

const App = () => {
  
  const [cart, setCart] = useState([
    // {
    //   itemName: "Gardening Gloves",
    //   itemImage: "./images/gardeningGloves.jpg",
    //   itemPrice: 14,
    // }
  ]);
  const currentCart = useRef(cart)

  const addCart = ({itemName, itemPrice, itemImage}) => {
       setCart([...cart, {itemName, itemPrice, itemImage}])
  }

  useEffect(() => {
    currentCart.current = cart
    console.log(currentCart)
  })

  // const cart = useRef([])
  // const addCart = ({itemName, itemPrice, itemImage}) => {
  //   let updateCart = []
  //   if (cart.length === 0 ){
  //     console.log("if used")
  //      updateCart = [{itemName, itemPrice, itemImage}]
  //   } else {
  //     console.log("else used")
  //      updateCart = [...cart, {itemName, itemPrice, itemImage}]
  //   }
     
  //     cart.current = updateCart;
      
  //  }
  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop  addCart = {addCart}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<UpdatedCart currentCart={currentCart}/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
