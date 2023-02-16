import React from "react";

const Shop = () => {
  const items = [
    {
      itemName: "Tulips",
      itemImage: "./images/tulips.jpg",
      itemPrice: 15,
    },
    {
      itemName: "Roses",
      itemImage: "./images/roses.jpg",
      itemPrice: 20,
    },
    {
      itemName: "Daisies",
      itemImage: "./images/daisies.jpg",
      itemPrice: 12,
    },
    {
      itemName: "Watering Can",
      itemImage: "./images/wateringCan.jpg",
      itemPrice: 25,
    },
    {
      itemName: "Shovel",
      itemImage: "./images/shovel.jpg",
      itemPrice: 10,
    },
    {
      itemName: "Gardening Gloves",
      itemImage: "./images/gardeningGloves.jpg",
      itemPrice: 14,
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
                <button className="homeButton">Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
