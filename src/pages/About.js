import React from 'react'
import Multiple from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{ backgroundImage: `url(${Multiple})` }}>

      </div>
      <div className='aboutBottom'>
        <h1>ABOUT US</h1>
        <p>
        Welcome to Michael's Pizzeria, where passion for pizza meets culinary excellence! Established in the heart of our vibrant community, we have been serving up the finest handcrafted pizzas since our inception. With every slice, we aim to deliver an unforgettable dining experience that will leave you craving for more.
        At Michael's Pizzeria, we believe that a great pizza starts with the finest ingredients. Our dedicated team of skilled chefs meticulously select the freshest produce, premium meats, and authentic Italian cheeses to create the perfect harmony of flavors. We take pride in our homemade pizza dough, prepared daily, which forms the foundation of our exceptional pizzas.
        We are proud to be an integral part of the community and value the relationships we have built with our customers over the years. Whether you choose to dine in, order takeout, or have your favorite pizza delivered to your doorstep, we strive to exceed your expectations with every bite.
        Thank you for choosing Michael's Pizzeria. We invite you to join us on a culinary journey filled with passion, flavor, and the irresistible aroma of freshly baked pizzas. Come and savor the taste of perfection, one slice at a time!
        </p>
      </div>
    </div>
  )
}

export default About
