import React, { useState } from 'react'
import './style.css'
import Menu from "./serviceApi.js"
import MenuCard from './ServiceCard'
import Navbar from './Navbar.js'

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];


const Service = () => {
    const[menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);


    const filterItem = (category) =>{
      if(category === "All"){
          setMenuData(Menu)
          return
      }
      const updatedList = Menu.filter((curElem)=>{
          return curElem.category === category
      })
      setMenuData(updatedList)
      // updatedlist use filter function to filter out the list and this updatedlist is passed in setmenudata which is a update function

  }


  return (
    /* this is prop as menuCard component and menuData attribute is called and using prop to make attribute for looping    */
    /* this is prop as navbar component and filteritem attribute is called and using prop to make attribute for looping    */
    <>
      <Navbar filterItem = {filterItem} menuList = {menuList}/>
      <MenuCard menuData={menuData}/>
    </>
  )
}

export default Service
