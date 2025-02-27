import React, { useState } from "react";
import Item from "./Item";
import items from "../data/items";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);

  };

  const filteredItems = items.filter(item => 
    selectedCategory === 'All' || item.category === selectedCategory
  )

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleCategoryChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
