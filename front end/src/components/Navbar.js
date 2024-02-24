import React from 'react'
import video from '../assets/service.mp4'

const Navbar = ({filterItem,menuList}) => {
    // passing the prop attribute filterItem which is used for filtering the category
    // passing the prop attribute menuList which is used for repeatedly use the navbar button
  return (
    <>
    <div className='our-story background'>
        <video src={video} autoPlay loop muted/>
        <div className="our-service">Our Services</div>
        <div className='our-service-content'>Food is our common ground, a universal experience.</div>
    </div>
        <nav className='navbar'>
            <div className='btn-group'>
                {menuList.map((curElem)=>{
                    return(
                        <button className='btn-group__item' onClick={ ()=> filterItem(curElem)}>{curElem}</button>
                    )
                })}
                
            </div>
       </nav>
    </>
  )
}

export default Navbar
