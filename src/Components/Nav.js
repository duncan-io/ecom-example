import React from "react";
import { Link } from "react-router-dom";

const Nav = ({close,cart}) => {

    return(
        <div className="mainMenu">
            <h1 className="logo">FakeStore</h1>
            <ul className="navList">
                <Link to="/" className="navLink"><li >Home</li></Link>
                <Link to="/shop" className="navLink"><li >Shop</li></Link>
                <Link to="/about" className="navLink"><li >About</li></Link>
                <li className="navLink cartLink" onClick={() => close()}>🛒 <span>{cart.length}</span></li>
            </ul>
        </div>
    )
}

export default Nav