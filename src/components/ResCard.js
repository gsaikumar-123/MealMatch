import React from 'react';

const ResCard = ({ name, cloudinaryImageId, costForTwo, cuisines, avgRating, veg }) => {
  return (
    <div className="rescard-container">
      <img
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
        alt={name}
        className="rescard-img"
      />
      <p>{name}</p>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwo}</p>
      <p>{avgRating}</p>
    </div>
  );
};

export default ResCard;
