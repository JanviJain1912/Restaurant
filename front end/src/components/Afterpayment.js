import React from 'react'
import { Link } from 'react-router-dom'

const Afterpayment = () => {
  return (
    <div>
      <div className="logout-body logout-container">
        <div className='logout-bg'>
          <h1>Order Successfull</h1>
          <h1>Thank you for using Food Hub</h1><br />
          <h3>Your Parcel is on the way  <i class="fa-solid fa-truck"></i></h3><br/>
          <div className="logout-btn">
            <Link to="/service" className='logout-btn2'>Order again</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Afterpayment
