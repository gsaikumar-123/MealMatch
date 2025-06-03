import React from 'react';
import { IMG_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const ItemList = ({ cards }) => {
  const dispatch = useDispatch();

  const handleItem = (card) => {
    dispatch(addItem(card));
  };

  return (
    <div className="space-y-6">
      {cards.map((card) => {
        const info = card.card.info;
        return (
          <div
            key={info.id}
            className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-lg shadow-md"
          >
            <div className="md:w-9/12">
              <h3 className="text-lg font-semibold text-gray-800">{info.name}</h3>
              <p className="text-sm text-gray-700 mb-1">
                ₹{(info.price || info.defaultPrice || 0) / 100}
              </p>
              <p className="text-xs text-gray-500">{info.description}</p>
            </div>

            {info.imageId && (
              <div className="md:w-3/12 w-full relative flex flex-col items-center">
                <img
                  className="w-full h-24 object-cover rounded-md"
                  src={IMG_URL + info.imageId}
                  alt={info.name}
                />
                <button
                  onClick={() => handleItem(card)}
                  className="mt-2 px-4 py-1 text-sm bg-black text-white rounded-md hover:bg-gray-800 transition"
                >
                  Add
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
