import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <div className="mainMenu">
            <h1 className="logo">FakeStore</h1>
            <ul className="navList">
                <Link to="/" className="navLink"><li >Home</li></Link>
                <Link to="/shop" className="navLink"><li >Shop</li></Link>
                <Link to="/about" className="navLink"><li >About</li></Link>
                <Link to="/cart" className="navLink cartLink"> <li>🛒</li> </Link>
            </ul>
        </div>
    )
}

export default Nav