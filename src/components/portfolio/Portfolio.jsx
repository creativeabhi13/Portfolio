import React from 'react'
import "./portfolio.css"
import port from "../../assets/port.jpg"
import port1 from "../../assets/port1.jpg"
import port2 from "../../assets/port2.jpg"
import port3 from "../../assets/port3.jpg"
import port4 from "../../assets/port4.jpg"
import port5 from "../../assets/port5.jpg"
import port6 from "../../assets/port6.jpg"


export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
<br /><br />
      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item_img">
            <img src={port} alt="" />
          </div>
          <h3>This is a Portfolio Website</h3>
          <div className="portfolio_item_cta"><a href="https://github.com/creativeabhi13/creativeabhi13.github.io" target="blank" className='btn'>Github</a>
            <a href="https://creativeabhi13.github.io/" target="blank" className='btn btn-primary'>Live Demo</a>
           </div>
            
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item_img">
            <img src={port1} alt="" />
          </div>
          <h3>Education single Page Design</h3>
          <div className="portfolio_item_cta"><a href="https://github.com/education-technology/education-technology.github.io" target="blank" className='btn'>Github</a>
            <a href="https://education-technology.github.io/" target="blank" className='btn btn-primary'>Live Demo</a></div>
            
           
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item_img">
            <img src={port2} alt="" />
          </div>
          <h3>This is a Edutech Website </h3>
          <div className="portfolio_item_cta"><a href="https://github.com/education-technology/education-technology.github.io" target="blank" className='btn'>Github</a>
            <a href="https://education-technology.github.io/" target="blank" className='btn btn-primary'>Live Demo</a></div>
            
           
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item_img">
            <img src={port3} alt="" />
          </div>
          <h3>Apartment Management System</h3>
          <div className="portfolio_item_cta"><a href="https://github.com/education-technology/education-technology.github.io" target="blank" className='btn'>Github</a>
            <a href="https://education-technology.github.io/" target="blank" className='btn btn-primary'>Live Demo</a></div>
            
           
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item_img">
            <img src={port4} alt="" />
          </div>
          <h3>This is a Restaurant Website</h3>
          <div className="portfolio_item_cta"><a href="https://github.com/121restaurant/121restaurant.github.io" target="blank" className='btn'>Github</a>
            <a href="https://121restaurant.github.io/" target="blank" className='btn btn-primary'>Live Demo</a></div>
            
           
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item_img">
            <img src={port5} alt="" />
          </div>
          <h3>The HandCricket Game</h3>
          <div className="portfolio_item_cta">
             <a href="https://github.com/creativeabhi13/HandCricket" target="blank" className='btn'>Github</a>
            <a href="https://education-technology.github.io/" target="blank" className='btn btn-primary'>Live Demo</a>
           
          </div>
           
        </article>
      </div>
   </section>
    
  )
}
export default Portfolio;