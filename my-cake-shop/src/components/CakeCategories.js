import React from 'react';

const categories = [
  { id: 'chocolate', name: 'Chocolate Cakes' },
  { id: 'fruit', name: 'Fruit Cakes' },
  { id: 'custom', name: 'Custom Cakes' },
  // More categories...
];

const CakeCategories = () => (
  <div className="cake-categories">
    {categories.map(category => (
      <div key={category.id} className="category">
        <h3>{category.name}</h3>
        {/* Add image or additional content as needed */}
      </div>
    ))}
  </div>
);

export default CakeCategories;
