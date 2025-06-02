import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");
  const {loggedInUser} = useContext(UserContext);

  return (
    <header className="flex flex-col md:flex-row items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="flex items-center gap-4">
        <img className='w-16 h-16 rounded-full' src='https://cdn2.f-cdn.com/contestentries/2426851/74260034/6689bc27dfb41_thumb900.jpg' alt='logo' />
        <h1 className='text-2xl font-bold text-purple-700'>MealMatch</h1>
      </div>
      <nav className='flex gap-6 mt-4 md:mt-0 items-center'>
        <Link className='text-gray-600 hover:text-purple-600 transition' to="/">Home</Link>
        <Link className='text-gray-600 hover:text-purple-600 transition' to="/about">About</Link>
        <Link className='text-gray-600 hover:text-purple-600 transition' to="/contact">Contact</Link>
        <span className='text-gray-600'>Cart</span>
        <li className='px-2 font-bold'>{loggedInUser}</li>
        <button
          className='bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl'
          onClick={() => setIsLoggedIn(isLoggedIn === "Login" ? "Logout" : "Login")}
        >
          {isLoggedIn}
        </button>
      </nav>
    </header>
  );
};

export default Header;