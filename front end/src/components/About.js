import React from 'react';
import video from "../assets/about.mp4"

const About = () => {
  return (
    <div>
      <div className='our-story background'>
        <video src={video} autoPlay loop muted/>
        <div className="our-service">About Us</div>
      </div>
      <section className="hero">
        <div className="heading">
          <h1><span>A</span>bout Us</h1>
        </div>

        <div className="container" style={{marginTop:"50px"}}>
          <div className="content">
          <div className="hero-content">
            <h2>Cooking is love<br/> made visible</h2>
            <p>
              Welcome to Food Hub, where culinary excellence meets warm hospitality!<br/>At Food Hub, we are passionate about bringing people together to enjoy delicious food in a vibrant atmosphere. Our restaurant is more than just a place to eat; it's a gathering spot for friends, families, and food enthusiasts alike. Nestled in the heart of Noida, Food Hub is dedicated to serving exceptional
             cuisine made from the finest ingredients. Our talented chefs craft each dish with care and creativity, ensuring a memorable dining experience 
             with every visit. Whether you're craving classic comfort foods or exploring bold flavors from around the world, our diverse menu has something to 
             satisfy every palate. 
            </p>
          </div>

          <div className="columns-container">
            <div className="column" style={{ backgroundColor: 'rgb(222, 161, 189)' }}>
              <i className="fa-solid fa-utensils"></i>
              <p>SavoryCraze</p>
            </div>
            <div className="column" style={{ backgroundColor: 'rgb(222, 161, 189)' }}>
              <i className="fa-solid fa-mug-saucer"></i>
              <p>FlavorFusion</p>
            </div>
            <div className="column" style={{ backgroundColor: 'rgb(222, 161, 189)' }}>
              <i className="fa-solid fa-glass-cheers"></i>
              <p>CulinaryHaven</p>
            </div>
          </div>
        </div>

          <div className="hero-image">
            <img src="https://th.bing.com/th/id/OIP.UZilMiv9vb4-L8xpllIkSwHaE8?rs=1&pid=ImgDetMain" alt="Front Image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
