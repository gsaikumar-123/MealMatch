import { useState } from "react";
import ItemList from "./ItemList";


// Accordion

const ResCategory = ({ data,showItems,setShowIndex}) => {
    const handleClick = ()=>{
        setShowIndex();
    }
  return (
    <div className="rounded-lg shadow-md bg-white">
      <div
        className="w-full px-6 py-3 bg-gray-100 cursor-pointer flex justify-between items-center"
        onClick={handleClick}
      >
        <span className="font-semibold text-lg text-black">{data.card.card.title + " (" + data.card.card.itemCards.length + ")"}</span>
        <span className="text-black">{showItems ? "▲" : "▼"}</span>
      </div>
      {showItems && (
        <div className="p-4 bg-gray-50">
           {showItems && <ItemList cards={data.card.card.itemCards} />} 

        </div>
      )}
    </div>
  );
};

export default ResCategory;
