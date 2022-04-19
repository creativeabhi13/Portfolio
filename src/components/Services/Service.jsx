import React from 'react'
import "./services.css"
import {BiCheck} from 'react-icons/bi'

function Service() {
    return (
      <section id="services">
        <h5>What I Offer</h5>
        <h2>Services</h2>
 <br /><br />
        <div className="container services_container">
          <article className='service'>
            <div className="service_head">
              <h3>UI/UX Design</h3>
            </div>
            <ul className='service__list'>
              <li>
                <BiCheck className='service_list_icon' />
                <p>Cognito’s custom animation  In Ui/Ux</p>
              </li>
            </ul>

            <ul className='service__list'>
              <li>
                <BiCheck className='service_list_icon' />
                <p>Spotify’s color gradients In Ui/Ux</p>
              </li>
            </ul>

            <ul className='service__list'>
              <li>
                <BiCheck className='service_list_icon' />
                <p>Dribbble’s card design In Ui/Ux</p>
              </li>
            </ul>

            <ul className='service__list'>
              <li>
                <BiCheck className='service_list_icon' />
                <p>Pinterest’s waterfall effect In Ui/Ux</p>
              </li>
            </ul>

            <ul className='service__list'>
              <li>
                <BiCheck className='service_list_icon' />
                <p>Hello Monday’s white space In Ui/Ux</p>
              </li>
            </ul>

            <ul className='service__list'>
              <li>
                <BiCheck className='service_list_icon' />
                <p> Current app’s color palette In Ui/Ux</p>
              </li>
            </ul>

          </article>
          {/* End of Ui /ux */}

          <article className='service'>
            <div className="service_head">
              <h3>Web Development</h3>
            </div>
            <ul className='service__list'>
              <li>
                <BiCheck className='service_list_icon' />
                <p>Responsive design Layout</p>
              </li>
            </ul>

            <ul className='service__list'>
              <li>
                <BiCheck className='service_list_icon' />
                <p>Liquid or Fluid design Layout</p>
              </li>
            </ul>

            <ul className='service__list'>
              <li>
                <BiCheck className='service_list_icon' />
                <p>Single page design Layout</p>
              </li>
            </ul>

            <ul className='service__list'>
              <li>
                <BiCheck className='service_list_icon' />
                <p>Dynamic Website Layout</p>
              </li>
            </ul>

            <ul className='service__list'>
              <li>
                <BiCheck className='service_list_icon' />
                <p>Static Page Layout</p>
              </li>
            </ul>

            <ul className='service__list'>
              <li>
                <BiCheck className='service_list_icon' />
                <p>Portfolio and Personal Website</p>
              </li>
            </ul>

          </article>
          {/* ENd of Web development */}
          <article className='service'>
            <div className="service_head">
              <h3>Content Creation</h3>
            </div>
            <ul className='service__list'>
              <li>
                <BiCheck className='service_list_icon' />
                <p>Graphic Design Services</p>
              </li>
            </ul>

            <ul className='service__list'>
              <li>
                <BiCheck className='service_list_icon' />
                <p>Video Marketing Services</p>
              </li>
            </ul>

            <ul className='service__list'>
              <li>
                <BiCheck className='service_list_icon' />
                <p>Blog Writing Services</p>
              </li>
            </ul>

            <ul className='service__list'>
              <li>
                <BiCheck className='service_list_icon' />
                <p>eBook Marketing Services</p>
              </li>
            </ul>

            <ul className='service__list'>
              <li>
                <BiCheck className='service_list_icon' />
                <p>Creating Integrated Content Campaigns</p>
              </li>
            </ul>

            <ul className='service__list'>
              <li>
                <BiCheck className='service_list_icon' />
                <p> Website Content Creation Servies</p>
              </li>
            </ul>

          </article>
          {/* end of  COntent creator*/}
        </div>
     </section>
   
  )
}

export default Service;