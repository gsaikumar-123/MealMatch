import React from 'react';
import ItemList from "./ItemList";
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-bold text-2xl text-gray-800">Cart</h1>
        <button
          onClick={handleClearCart}
          className="px-4 py-2 text-md font-bold bg-black text-white rounded-md hover:bg-gray-800 transition"
        >
          Clear Cart
        </button>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <ItemList cards={cartItems} />
      )}
    </div>
  );
};

export default Cart;
