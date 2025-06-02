import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";

const ResMenuCard = () => {
  const { resId } = useParams();
  const resInfo = useRestrauntMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const cardInfo = resInfo?.data?.cards?.find(
    (card) => card?.card?.card?.info
  )?.card?.card?.info;

  const groupedCards = resInfo?.data?.cards?.find(
    (card) => card?.groupedCard
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const itemCards = groupedCards?.find(
    (c) => c?.card?.card?.itemCards
  )?.card?.card?.itemCards;

  if (!cardInfo || !itemCards) {
    return <p className="text-center text-gray-500">No menu data available.</p>;
  }

  const { name, avgRating, costForTwoMessage, cuisines } = cardInfo;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-slate-800 mb-2">{name}</h1>
      <p className="text-lg text-gray-700">⭐ {avgRating}</p>
      <p className="text-gray-600">{cuisines?.join(", ")}</p>
      <p className="text-gray-600 mb-4">{costForTwoMessage}</p>

      <h2 className="text-2xl font-semibold text-slate-700 mb-3">Menu</h2>
      <ul className="space-y-2">
        {itemCards.map((item) => {
          const info = item.card.info;
          const price = (info.price || info.defaultPrice || 0) / 100;

          return (
            <li key={info.id} className="p-3 bg-gray-100 rounded-lg shadow-sm">
              {info.name}-₹{price}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ResMenuCard;