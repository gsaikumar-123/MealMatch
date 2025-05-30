import React, { useState } from 'react';
import mockData from '../utils/mockData';
import ResCard from './ResCard';

const Body = () => {
  const [resList, setResList] = useState(mockData);
  const [searchText, setSearchText] = useState("");
  
  return (
    <div>
        <div className='body-top'>
            <button className='top-rated' onClick={()=>
                {
                    const topRated = mockData.filter((res) => res.avgRating > 4.1);
                    setResList(topRated);
                }
            }>Top-Rated</button>

            <input
                type="text"
                placeholder="Search by name"
                className='search-bar'
                value={searchText}
                onChange={(e) => {setSearchText(e.target.value)}}
            />

            <button className='search-button' onClick={() => {
                const filteredList = mockData.filter((res) => 
                    res.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setResList(filteredList);
            }}> Search</button>

        </div>
            <div className="body-container">
            {resList.map((res, index) => (
                <ResCard key={index} {...res} />
            ))}
        </div>
    </div>
  );
};

export default Body;
