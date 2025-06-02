import React from 'react';
import ResCard from './ResCard';

const ShimmerCard = () => {
  return (
    <div className='bg-gray-200 w-20 h-60 rounded-xl'></div>
  );
};

const Shimmer = () => {
  return (
    <div className='flex flex-wrap gap-6'>
      {Array.from({ length: 14 }).map((_, index) => (
        <ShimmerCard key={index} />
      ))}
    </div>
  );
};

export default Shimmer;
