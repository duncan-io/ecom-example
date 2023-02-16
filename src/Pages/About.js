import React from "react";

const About = () => {
  return (
    <div className="wrapper">
      <div className="backgroundImage aboutBgImage">
        <div className="header ">
        <div className="aboutInfo">
            <h2>
              Want to learn more about FakeStore? Well we are a fake store that provides no value to our customers, largely because we are the leading producer of getting duncan-io a job!
            </h2>
          </div>
          <div className="mainWelcome aboutWelcome">
            <h2>Here at FakeStore</h2>
            <h1>Gardening is <br></br> in our DNA</h1>
          </div>

          
        </div>
      </div>
      <div className="infoSection">
                <div className="right aboutImage">
                    <img src="./images/teamPhoto.jpg" alt="" className="infoImage"/>
                </div>
                <div className="left">
                    <div>
                    <h3>Here is some more about our team!</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    
                    
                </div>
                
            </div>
    </div>
  );
};

export default About;
