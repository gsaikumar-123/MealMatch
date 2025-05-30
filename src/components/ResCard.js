import React from 'react'
import { useEffect } from 'react'

const ResCard = () => {
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://www.swiggy.com/city/hyderabad/theobroma-banjara-hills-rest378344");
            const json = await response.json();
            console.log(json);
        }
        fetchData();
    }, []);
  
  
  
    return (
    <div className='rescard-container'>
      
    </div>
  )
}

export default ResCard
