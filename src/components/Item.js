import React, { useState } from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false);
  
  function handleCartButton() {
    setIsInCart((prevState)=> !prevState)
  }
  return (
    <li className={isInCart ? 'in-cart' : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCartButton} className="add">{isInCart ? 'Remove From Cart' : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
