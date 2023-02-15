import React from "react";

const Home = () => {
    return (
        <div className="wrapper">
            <div className="header">
                <div className="backgroundImage">
                    <h1>Welcome to FAKESTORE</h1>
                    <div className="headerInfo">
                        <h2>We love everything fake because this is a fake store that is being used as a opportunity to showcase frontend capabilities!</h2>
                        <button>Learn More!</button>
                    </div>
                </div>
            </div>
            <div className="infoSection">
                <div className="left">
                    <h4>We have some of the best productslike this thing right here</h4>
                    <button>Buy Now</button>
                </div>
                <div className="right">
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home