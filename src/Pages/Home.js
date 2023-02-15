import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="wrapper">
            <div className="backgroundImage">
                <div className="header">
                    <div className="mainWelcome">
                    <h2>Welcome to</h2>
                    <h1>FAKESTORE</h1>
                    </div>
                    
                    <div className="headerInfo">
                        <h2>We love everything fake because this is a fake store that is being used as a opportunity to showcase frontend capabilities!</h2>
                        <Link to="/about"><button className="homeButton">Learn More!</button></Link>
                    </div>
                </div>
            </div>
            <div className="infoSection">
                <div className="left">
                    <div>
                    <h3>We have some of the best products like this thing right here</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    
                    <Link to="/shop"><button className="homeButton">Buy Now</button></Link>
                </div>
                <div className="right">
                    <img src="./images/flowerPot.jpg" alt="" className="infoImage"/>
                </div>
            </div>
        </div>
    )
}

export default Home