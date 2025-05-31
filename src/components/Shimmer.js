import React from 'react'
import ResCard from './ResCard'

const ShimmerCard=()=>{
    return (
    <div className='shimmercard-container'>
        
    </div>
  )
}

const Shimmer = () => {
  return (
    <div className='shimmer-container'>
        {Array.from({ length: 14 }).map((_, index) => (
            <ShimmerCard key={index} />
        ))}
    </div>
  )
}

export default Shimmer;
