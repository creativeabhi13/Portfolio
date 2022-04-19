import React from 'react'
import "./experience.css"
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="expereince">
    
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      
<br /><br />
      <div className="container experience_container">
        <div className="experience_fronted">
          <h3>Frontend Development</h3>
          <div className="experience_content">
          <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon' />
              <div><h4>HTML</h4>
              <small className='text-light'>Experienced</small></div>
              
            </article>
            
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon' />
              <div><h4>CSS</h4>
              <small className='text-light'>Experienced</small></div>
              
            </article>
            
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon' />
              <div><h4>Javascript</h4>
              <small className='text-light'>Beginner</small></div>
            </article>
            
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon' />
              <div><h4>Reactjs</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>
            
            <article className='experience_details'>
             <BsPatchCheckFill className='experience_details_icon' />
              <div><h4>Angularjs</h4>
              <small className='text-light'>Beginner</small></div>
            </article>
            
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details_icon' /> 
              <div><h4>Bootstrap</h4>
              <small className='text-light'>Intermediate</small></div>
           </article>
          </div>
        </div>
        {/*  End OF Fronted */}
        <div className="experience_backened">
           <h3>Backened Development</h3>
          <div className="experience_content">
          <article className='experience_details'>
          <BsPatchCheckFill className='experience_details_icon' /> 
              <div><h4>PHP</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
            
            <article className='experience_details'>
             <BsPatchCheckFill className='experience_details_icon' />
              <div><h4>C++</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
            
            <article className='experience_details'>
          <BsPatchCheckFill className='experience_details_icon' />
              <div><h4>Nodejs</h4>
              <small className='text-light'>Beginner</small></div>
            </article>
            
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details_icon' />
              <div><h4>Python</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>
            
            <article className='experience_details'>
             <BsPatchCheckFill className='experience_details_icon' />
              <div><h4>Java</h4>
              <small className='text-light'>Beginner</small></div>
            </article>
            
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon' />
              <div><h4>Mysql</h4>
              <small className='text-light'>Intermediate</small></div>
           </article>
          </div>

        </div>
      </div>
    </section>
  
  )
}

export default Experience;