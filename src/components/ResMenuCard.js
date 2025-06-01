import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const ResMenuCard = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const menu = await fetch(MENU_API + resId);
      const json = await menu.json();
      setResInfo(json);
    } catch (error) {
      console.error("Failed to fetch menu:", error);
    }
  };

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
    return <p>No menu data available.</p>;
  }

  const { name, avgRating, costForTwoMessage, cuisines } = cardInfo;

  return (
    <div>
      <h1>{name}</h1>
      <p><strong>Rating:</strong> {avgRating}</p>
      <p><strong>Cuisines:</strong> {cuisines?.join(", ")}</p>
      <p><strong>Cost for Two:</strong> {costForTwoMessage}</p>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => {
          const info = item.card.info;
          const price = (info.price || info.defaultPrice || 0) / 100;

          return (
            <li key={info.id}>
              {info.name} - ₹{price}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ResMenuCard;
