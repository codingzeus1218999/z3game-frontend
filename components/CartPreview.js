import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import Link from 'next/link';

const CartPreview = () => {
  const { cartDetails, totalPrice, closeCartPreview  } = useShoppingCart();

  return (
    <div className="fixed top-[55px] right-[140px] p-4 bg-gray-100 shadow-lg rounded-lg z-10">
        <button onClick={closeCartPreview}>Close X</button>
      <ul>
        {Object.values(cartDetails).map((product) => (
          <li key={product.id} className="flex items-center space-x-2">
                <img src={product.image} alt={product.name} className="w-10 h-10 object-cover rounded" />
                <div>
                <div className="font-bold">{product.name}</div>
                <div>{product.quantity} x {product.formattedValue}</div>
                </div>
          </li>
        ))}
      </ul>
      <Link  href="/cart">
        <div className="font-bold mt-4">Total: {totalPrice}</div>
      </Link>
    </div>
  );
};

export default CartPreview;
