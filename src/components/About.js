import React from 'react';
import UserClass from './UserClass';

const About = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-center bg-gradient-to-br from-blue-50 to-purple-100 rounded-xl shadow-md mt-10">
      <h1 className="text-4xl font-bold text-purple-700 mb-4">About MealMatch</h1>
      <p className="text-lg text-gray-700 mb-6">Discover what makes our service unique and how we connect hungry customers with their favorite meals.</p>
    </div>
  );
};

export default About;