import React, { useEffect, useState } from 'react';
import ResCard from './ResCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filterResList, setFilterResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.705584&lng=81.1119274&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setResList(restaurants);
      setFilterResList(restaurants);
    };
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) return <h1 className="text-center text-red-600 text-2xl font-semibold mt-20">Ooops!!! Check your Internet Connection</h1>;

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <div className="flex gap-4">
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl"
            onClick={() => {
              const topRated = resList.filter((res) => res.info?.avgRating > 4.1);
              setFilterResList(topRated);
            }}
          >
            Top-Rated
          </button>

          <button
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl"
            onClick={() => {
              const vegRes = resList.filter((res) => res.info?.veg === true);
              setFilterResList(vegRes);
            }}
          >
            Veg
          </button>
        </div>

        <div className="flex gap-2 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search by name"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl"
            onClick={() => {
              const filteredList = resList.filter((res) => res.info?.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilterResList(filteredList);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {resList.length === 0 ? (
          <Shimmer />
        ) : (
          filterResList.map((res) => (
            <Link key={res.info.id} to={`/restaurant/${res.info.id}`}>
              <ResCard {...res.info} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
