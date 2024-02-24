import React from 'react';
import { useCart } from './context';

const ServiceCard = ({ menuData}) => {
  // passing the prop attribute menuData
  const {addToCart} = useCart();


  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {

          const { id, name, category, image, description, Price } = curElem;
          // destructuring in JavaScript
          return (
            <div className="card-container" key={id}>
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle">{id}</span>
                  <span className="card-author subtle"> {category} </span>
                  <h2 className="card-title"> Dish : {name} </h2>
                  <span className="card-author subtle"> Price : {Price} </span><br />
                  <span className="card-description subtle">{description}</span><br />
                  {/* Button added here */}
                  <button className="card-button" onClick={()=>addToCart(curElem)}>Add To cart</button>
                  <div className="card-read">Read</div>
                  
                </div>
                <img src={image} alt="images" className="card-media" />
                
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ServiceCard;
