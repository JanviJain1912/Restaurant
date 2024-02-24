import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ cartItemCount}) => {
  const auth = localStorage.getItem('users');
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/register");
  };

  return (
    <div>
      <section className="header">
        <img src="https://th.bing.com/th/id/OIP.ihmdFUsOYb-UXsWgZMaeMAHaHa?rs=1&pid=ImgDetMain" alt="GlamAura Logo" className="logo" style={{ height: "50px", width: "50px" }} />  
        <Link to ="/" className="logo"> FoodHub </Link>
        <nav className="navbar" style={{ justifyContent: "end" }}>
          <div id="close-navbar" className="fas fa-times"></div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/service">Services</Link>
          {auth ?
            <>
              <Link to="/logout" onClick={logout}> LogOut </Link>
              <Link to="/cart" className="link headerCart">
                <img className="cartImg" src="/images/cart.jpg" alt="cart" />
                {cartItemCount > 0 && (
                  <div className="cartCounter">{cartItemCount <= 9 ? cartItemCount : "9+"}</div>
                )}
              </Link>
            </> :
            <Link to="/register">Register</Link>}
        </nav>

        <div id="menu-btn" className="fas fa-bars"></div>

      </section>
    </div>
  );
};

export default Header;
