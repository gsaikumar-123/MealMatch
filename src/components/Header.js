import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState("Login");
  return (
    <div className="header-container">
        <img className='logo' src='https://cdn2.f-cdn.com/contestentries/2426851/74260034/6689bc27dfb41_thumb900.jpg' alt='logo'/>
        <h1 className='header-text'>MealMatch</h1>
        <ul className='header-options'>
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/about">About</Link></li>
            <li><Link to = "/contact">Contact</Link></li>
            <li>Cart</li>
            <button className='login-button' 
            onClick={()=>{
                isLoggedIn === "Login" ? setIsLoggedIn("Logout") : setIsLoggedIn("Login");
            }} onChange={(e)=>{e.target.value}}>{isLoggedIn}</button>
        </ul>
    </div>
  )
}

export default Header
