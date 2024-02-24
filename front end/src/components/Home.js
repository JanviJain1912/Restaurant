import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import video from '../assets/Animation.mp4';
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import "./style.css"


const Home = () => {

  return (
    <div>
      <section className="kv">
        <div className="slider-banner">
          <div className="slider-container">
            <div className="item item-kv-1 active">
              <div className="container">
                <div className="row">
                  <div className="item-kv-txt col-md-6 col-xl-6">
                    <h2>Welcome to FoodHub</h2>
                    <h3>Indulge in Delicious Culinary Creations</h3>
                    <Link to="/menu" className="btn">View Menu</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    <section style={{margin:"15px 0"}}>
      <video src={video1} autoPlay loop muted/>
      <div className='our-service' style={{top:"130%"}}>Our Cooks</div>
      <div className='our-service-content' style={{top:"140%"}}>Serving delicious meals made with love.</div>
    </section>

    <section className="doc-section">
    <div className="container">
        <div className="row">
            <h2 className="col-12">Meet Our Chefs</h2>
            <div className="col-12 col-md-6 col-xl-4 item">
                <div className="icon icon-pills"></div>
                <h3>Chef Auth</h3>
                <p>Chef Auth specializes in creating mouthwatering dishes with a focus on culinary innovation. Trained at the prestigious "Central Culinary Institute", Chef Auth brings a unique flair to every dish.</p>
            </div>
            <div className="col-12 col-md-6 col-xl-4 item">
                <div className="icon icon-doctor"></div>
                <h3>Chef Mary</h3>
                <p>Chef Mary is a master of flavor combinations and exquisite presentation. With years of experience working at renowned restaurants worldwide, Chef Mary crafts dishes that delight both the palate and the eyes.</p>
            </div>
            <div className="col-12 col-md-6 col-xl-4 item">
                <div className="icon icon-car"></div>
                <h3>Chef Nanah</h3>
                <p>Chef Nanah specializes in creating delectable desserts and sweet treats that leave a lasting impression. Trained under world-class pastry chefs, Chef Nanah's creations are the perfect ending to any meal.</p>
            </div>
        </div>
    </div>
</section>


    <section className="fill-banner banner-1-bg">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 col-xl-5">
          <h2>Indulge in Exquisite Culinary Delights</h2>
          <p>Embark on a gastronomic journey with our delectable selection of dishes crafted to tantalize your taste buds. Whether you crave traditional flavors, innovative creations, or international cuisines, we offer an extensive menu to satisfy every palate. Our team of culinary experts is dedicated to delivering a memorable dining experience, ensuring that each dish is prepared with the finest ingredients and utmost care. Say goodbye to ordinary dining and savor the extraordinary at our restaurant.</p>

            <Link to="/service" className="btn">Explore more menu</Link>
          </div>
        </div>
      </div>
    </section>

    <div className="services-container">
    <div className="inner-container">
      <h1 className="section-title">Our Services</h1>
      <div className="border"></div>
      <div className="service-container">
        <div className="service-box">
          <div className="service-icon">
            <img src="images/dine-in.png" />
          </div>
          <div className="service-title">
            <b>Dine-In</b>
          </div>
          <div className="description">Experience exquisite dining at our restaurant. From gourmet dishes to cozy ambiance, we provide an unforgettable dining experience for you and your loved ones.</div>
        </div>
        <div className="service-box">
          <div className="service-icon">
            <img src="images/take-away.webp" />
          </div>
          <div className="service-title">
            <b>Takeaway</b>
          </div>
          <div className="description">Enjoy our delicious food from the comfort of your home. Order online or by phone, and we'll have your favorite dishes packed and ready for pickup.</div>
        </div>
        <div className="service-box">
          <div className="service-icon">
            <img src="images/delivery.png" style={{ marginTop: '.3em' }} />
          </div>
          <div className="service-title">
            <b>Delivery</b>
          </div>
          <div className="description">Get our mouthwatering meals delivered right to your doorstep. Whether you're craving for pizza, pasta, or burgers, we'll bring the flavors of FoodHub to you.</div>
        </div>
        <div className="service-box">
          <div className="service-icon">
            <img src="images/catering.png" />
          </div>
          <div className="service-title">
            <b>Catering</b>
          </div>
          <div className="description">Make your special events even more memorable with our catering services. From weddings to corporate gatherings, we offer delicious menus tailored to your preferences and requirements.</div>
        </div>
        <div className="service-box">
          <div className="service-icon">
            <img src="images/reservation.png" />
          </div>
          <div className="service-title">
            <b>Reservation</b>
          </div>
          <div className="description">Ensure a table is ready for you by making a reservation in advance. Whether it's for a romantic dinner or a group celebration, we'll make sure your dining experience is seamless.</div>
        </div>
        <div className="service-box">
          <div className="service-icon">
            <img src="images/events.png" />
          </div>
          <div className="service-title">
            <b>Events</b>
          </div>
          <div className="description">Host your special events with us. Whether it's a birthday party, anniversary, or corporate event, our venue and catering services will make your occasion truly memorable.</div>
        </div>
      </div>
    </div>
  </div>

    <section style={{margin:"15px 0"}}>
  <video src={video2} autoPlay loop muted/>
  <div className='our-service-content' style={{top:"423%"}}>Experience the culinary brilliance of our chefs.</div>
</section>

<ul className="list-members">
  <li className="member">
    <div className="member-image">
      <img src="images/cook1.jpeg" />
    </div>
    <div className="member-info">
      <h3>Hazel Andrea</h3>
      <p>Chef de Cuisine</p>

      <div className="social-link">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-pinterest"></i>
      </div>
    </div>
  </li>
  <li className="member">
    <div className="member-image">
      <img src="images/cook2.jpg" />
    </div>
    <div className="member-info">
      <h3>Lucas Jenny</h3>
      <p>Sous Chef</p>

      <div className="social-link">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-pinterest"></i>
      </div>
    </div>
  </li>
  <li className="member">
    <div className="member-image">
      <img src="images/cook3.jpg" />
    </div>
    <div className="member-info">
      <h3>Amy Hantigont</h3>
      <p>Pastry Chef</p>

      <div className="social-link">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-pinterest"></i>
      </div>
    </div>
  </li>
  <li className="member">
    <div className="member-image">
      <img src="images/cook4.jpg" />
    </div>
    <div className="member-info">
      <h3>Jeniffer Henry</h3>
      <p>Head Bartender</p>
      <Link to="/staff"><p>view more <i class="fa-solid fa-arrow-right"></i></p></Link>
      <div className="social-link">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-pinterest"></i>
      </div>
    </div>
  </li>
</ul>

<section className="fill-banner banner-2-bg">
  <div className="container">
    <div className="row">
      <div className="col-12 col-md-10 col-xl-5">
        <h2>Discover Exquisite Dishes at FoodHub</h2>
        <p>Embark on a culinary journey with FoodHub and indulge in our finest selection of dishes crafted by our talented chefs. From traditional favorites to modern innovations, we offer a dining experience like no other.</p>
        <Link to="/register" className="btn">Book a Table</Link>
      </div>
    </div>
  </div>
</section>



<section className="blog" style={{marginTop:"15px",marginLeft:"10px",marginRight:"10px"}}>
  <div className="container">
    <div className="row">
      <h2 className="col-12">Our Latest Food Stories</h2>
      <article className="col-8 col-md-6 col-xl-4">
        <div className="post">
          <a className="img-hover" href="#">
            <img style={{ height: "250px", width: "100%" }} src="images/blog-1.jpg" />
          </a>
          <h2>
            <Link to="/recipes">Delicious Briyani Recipes</Link>
          </h2>
          <h3 className="time">Jan 19, 2023 at 5:12pm</h3>
          <p>Explore our collection of mouthwatering briyani recipes. From classic basmati carbonara to creamy fettuccine vegetables, these dishes are sure to satisfy your cravings.</p>
        </div>
      </article>
      <article className="col-8 col-md-6 col-xl-4">
        <div className="post">
          <a className="img-hover" href="#">
            <img style={{ height: "250px", width: "100%" }} src="images/blog2.jpg" />
          </a>
          <h2>
            <Link to="/recipes">Healthy vegetables Ideas</Link>
          </h2>
          <h3 className="time">Feb 1, 2024 at 9:45am</h3>
          <p>Start your day right with these nutritious stir fried vegetables recipes. Packed with fruits, vegetables, and superfoods, these vegetables are not only delicious but also good for you.</p>
        </div>
      </article>
      <article className="col-8 col-md-6 col-xl-4">
        <div className="post">
          <a className="img-hover" href="#">
            <img style={{ height: "250px", width: "100%" }} src="images/blog3.jpg" />
          </a>
          <h2>
            <Link to="/recipes">Tasty thali Variations</Link>
          </h2>
          <h3 className="time">Feb 05, 2024 at 5:12pm</h3>
          <p>Discover creative thali recipes to elevate your tummy game. From classic rice to gourmet toppings, these variations will take your thali experience to the next level.</p>
        </div>
      </article>
    </div>
  </div>
</section>

<section style={{margin:"15px 0"}}>
  <video src={video} autoPlay loop muted/>
</section>


    </div>
  );
};

export default Home;
