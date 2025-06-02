import React from 'react';
import { IMG_URL } from '../utils/constants';

const ItemList = ({ cards }) => {
  return (
    <div className="space-y-4">
      {cards.map((card) => {
        const info = card.card.info;
        return (
          <div key={info.id} className="flex gap-4 bg-white p-4 rounded shadow-sm">
            <div className="w-9/12">
              <h3 className="text-lg font-medium">{info.name}</h3>
              <p className="text-sm text-black">₹{(info.price || info.defaultPrice || 0) / 100}</p>
              <p className="text-xs text-gray-500">{info.description}</p>
            </div>
            {info.imageId && (
              <div className="w-3/12">
                <img
                  className="w-full h-24 object-cover rounded"
                  src={IMG_URL + info.imageId}
                  alt={info.name}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
