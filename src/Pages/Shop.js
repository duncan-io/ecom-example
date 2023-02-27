import React from "react";

const Shop = ({addCart}) => {
  const items = [
    {
      itemName: "Tulips",
      itemImage: "./images/tulips.jpg",
      itemPrice: 15,
      visible: true,
    },
    {
      itemName: "Roses",
      itemImage: "./images/roses.jpg",
      itemPrice: 20,
      visible: true,
    },
    {
      itemName: "Daisies",
      itemImage: "./images/daisies.jpg",
      itemPrice: 12,
      visible: true,
    },
    {
      itemName: "Watering Can",
      itemImage: "./images/wateringCan.jpg",
      itemPrice: 25,
      visible: true,
    },
    {
      itemName: "Shovel",
      itemImage: "./images/shovel.jpg",
      itemPrice: 10,
      visible: true,
    },
    {
      itemName: "Gardening Gloves",
      itemImage: "./images/gardeningGloves.jpg",
      itemPrice: 14,
      visible: true,
    },
  ];

  return (
    <div className="shopWrapper">
      <h2>Our Products</h2>
      <div className="productList">
        {items.map((item) => {
          
          return (
            <div key={item.itemName} className="itemCard">
              <img
                className="itemImage"
                src={item.itemImage}
                alt={item.itemName}
              />
              <div className="itemUtils">
                <div className="itemInfo">
                  <h5>{item.itemName}</h5>
                  <p>${item.itemPrice}</p>
                </div>
                <button className="homeButton" onClick={()=>addCart(item)}>Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
