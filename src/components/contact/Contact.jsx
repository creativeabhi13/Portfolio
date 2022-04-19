import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7949pgc', 'template_pnchjdf', form.current, 'Q28OXirbo3qHtJxa9')
    
    e.target.reset()

      
  };


  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
<br /><br />
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option_icon'/>
            <h4>Email</h4>
            <h5>creativeabhi13@gmail.com</h5>
            <a href="mailto:creativeabhi13@gmail.com" target="blank">Send Message</a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className='contact_option_icon'/>
            <h4>Messanger</h4>
            <h5>creativeabhi13</h5>
            <a href="https://m.me/creativeabhi13" target="blank">Send Message</a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className='contact_option_icon'/>
            
            <h4>Whatsapp</h4>
            
            <a href="https://wa.me/send?phone+918292553090" target="blank">Send Message</a>
          </article>
        </div>
        {/*ENd of COntact Option */}
        <form ref={form} on onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
    
  )
}

export default Contact;