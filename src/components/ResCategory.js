import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = ({ data }) => {
  const [expand, setExpand] = useState(false);

  const handleExpand = () => {
    setExpand(!expand);
  };

  return (
    <div className="rounded-lg shadow-md bg-white">
      <div
        className="w-full px-6 py-3 bg-gray-100 cursor-pointer flex justify-between items-center"
        onClick={handleExpand}
      >
        <span className="font-semibold text-lg text-black">{data.card.card.title}</span>
        <span className="text-black">{expand ? "▲" : "▼"}</span>
      </div>
      {expand && (
        <div className="p-4 bg-gray-50">
          <ItemList cards={data.card.card.itemCards} />
        </div>
      )}
    </div>
  );
};

export default ResCategory;
