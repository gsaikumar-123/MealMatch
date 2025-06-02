import React from 'react';

const ResCard = ({ name, cloudinaryImageId, costForTwo, cuisines, avgRating }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 transition-transform hover:scale-105">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt={name}
        className="rounded-lg w-full h-40 object-cover mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-500 text-sm">{cuisines.join(", ")}</p>
      <p className="text-sm text-gray-700">{costForTwo}</p>
      <p className="text-sm text-green-600 font-medium">⭐ {avgRating}</p>
    </div>
  );
};


export const withVegLabel=(ResCard)=>{
  return(props) => {
    return (
      <div>
        <label className='absolute m-2 p-2 bg-green-500 rounded-b-md'>Veg</label>
        <ResCard {...props}/>
      </div>
    )
  }
}

export default ResCard;
