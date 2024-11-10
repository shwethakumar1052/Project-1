import React from 'react';

const ShoppingCart = () => {
  const cartItems = [
    { id: 1, name: "Chocolate Delight", quantity: 1, price: 20 },
    // More items...
  ];

  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <h3>{item.name}</h3>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.price}</p>
        </div>
      ))}
      <h3>Total Cost: ${totalCost}</h3>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default ShoppingCart;
