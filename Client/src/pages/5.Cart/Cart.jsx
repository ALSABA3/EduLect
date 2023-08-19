import React, { useState, useEffect } from "react";

const Cart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Load items from cookies when component mounts
    const savedItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setItems(savedItems);
  }, []);

  useEffect(() => {
    // Save items to cookies whenever the items list changes
    localStorage.setItem("cartItems", JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {};

  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <a href="/courses">Expolre courses</a>
    </div>
  );
};

export default Cart;
