import React from 'react';

const CakeDetails = ({ cake }) => (
  <div className="cake-details">
    <h2>{cake.name}</h2>
    <img src={cake.imageUrl} alt={cake.name} />
    <p>{cake.description}</p>
    <p>Ingredients: {cake.ingredients}</p>
    <div>
      <label>Size: </label>
      <select>
        <option>Small</option>
        <option>Medium</option>
        <option>Large</option>
      </select>
    </div>
    <div>
      <label>Quantity: </label>
      <input type="number" defaultValue={1} min={1} />
    </div>
    <button>Add to Cart</button>
  </div>
);

export default CakeDetails;
