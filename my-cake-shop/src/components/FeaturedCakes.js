import React from 'react';

const featuredCakes = [
  { id: 1, name: "Chocolate Delight", price: "$20", imageUrl: "https://example.com/chocolate.jpg" },
  { id: 2, name: "Fruit Fusion", price: "$25", imageUrl: "https://example.com/fruit.jpg" },
  // More cakes...
];

const FeaturedCakes = () => (
  <div className="featured-cakes">
    {featuredCakes.map(cake => (
      <div key={cake.id} className="cake">
        <img src={cake.imageUrl} alt={cake.name} />
        <h2>{cake.name}</h2>
        <p>Special Offer: {cake.price}</p>
      </div>
    ))}
  </div>
);

export default FeaturedCakes;
