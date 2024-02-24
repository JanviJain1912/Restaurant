import React from 'react';
import { Link } from 'react-router-dom';

const Logout = () => {
  return (
    <div>
      <div className="logout-body logout-container">
        <div className='logout-bg'>
          <h1>Logged Out</h1>
          <h1>Thank you for using Glam Aura</h1><br />
          <p>You have been successfully logged out.</p><br/>
          <div className="logout-btn">
            <Link to="/register" className='logout-btn2'>Register again</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
