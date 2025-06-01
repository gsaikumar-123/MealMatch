import React, { useEffect, useRef, useState } from 'react';
import ResCard from './ResCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filterResList,setFilterResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchData = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.705584&lng=81.1119274&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setResList(restaurants);
        setFilterResList(restaurants);

        console.log(restaurants);
    };
    fetchData();
    },[]);

    const onlineStatus = useOnlineStatus();

    if(!onlineStatus) return <h1>Ooops!!! Check your Internet Connection</h1>;
  
  return (
    <div>
        <div className='body-top'>
            <button className='top-rated' onClick={()=>
                {
                    const topRated = resList.filter((res) => res.info?.avgRating > 4.1);
                    setFilterResList(topRated);
                }
            }>Top-Rated</button>
            
            <button className='veg-res' onClick={()=>{
                const vegRes = resList.filter((res)=>res.info?.veg === true);
                setFilterResList(vegRes);
            }}>Veg</button>
            
            <input
                type="text"
                placeholder="Search by name"
                className='search-bar'
                value={searchText}
                onChange={(e) => {setSearchText(e.target.value)}}
            />

            <button className='search-button' onClick={() => {
                const filteredList = resList.filter((res) => 
                    res.info?.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilterResList(filteredList);
            }}> Search</button>

        </div>

        <div className="body-container">
            {resList.length === 0 ? (
                <Shimmer />
            ) : (
                filterResList.map((res) => (
                    <Link key={res.info.id} to={"/restaurant/"+res.info.id}> <ResCard {...res.info} /> </Link>
                ))
            )}
        </div>
    </div>
  );
};

export default Body;
