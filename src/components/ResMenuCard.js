import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import ResCategory from "./ResCategory";

const ResMenuCard = () => {
  const { resId } = useParams();
  const resInfo = useRestrauntMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const cardInfo = resInfo?.data?.cards[2]?.card?.card?.info;

  const itemCards = resInfo.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    .find(c => c.card?.card?.itemCards)?.card?.card?.itemCards;

  const categories = resInfo.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    .filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  console.log(categories);

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
      <ul className="space-y-4">
        {categories.map((category) => (
          <li key={category.card?.card?.title}>
            <ResCategory data={category} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResMenuCard;
