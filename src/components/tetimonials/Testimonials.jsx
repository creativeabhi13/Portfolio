import React from 'react'
import "./testimonial.css"
import team1 from '../../assets/team1.jpg'
import team2 from '../../assets/team2.jpeg'
import team3 from '../../assets/team3.jpg'
import team4 from '../../assets/team4.png'
import team5 from '../../assets/team5.jpeg'
import team6 from '../../assets/team6.jpeg'
import team7 from '../../assets/team7.jpg'
import team8 from '../../assets/team8.jpeg'
import team9 from '../../assets/team9.jpg'


// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';








export const Testimonials = () => {
  return (
    
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <br /><br />
      <Swiper className="container testimonials_container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }} >
      

        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={team2} alt="Avatar One" />
          </div>
            <h5 className="client_name">Aditya Krishnan</h5>
            <small className="client_review">
              The site loads quite quickly which is great.  I did not find any typos
or spelling mistakes within any of the pages, and I checked all of the
hyperlinks  and found that they all work well.  There are no meta tags
so they really need to be added.  Technical  branding  is done on each
page as directed, and the CharityFocus logo is present.

            </small>
        
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={team3} alt="Avatar One" /></div>
            <h5 className="client_name">Bhupinder Singh</h5> 
            <small className="client_review">
             The site loads  extremely fast because the only graphics are the small
welcome logo and the link  buttons.  Fast load time is always a 'great
site  factor'.  I have read  through the whole site and I did not find
any spelling or typing errors  except one on the main page:  "and peer
threatment  advocacy" you should remove the H in  'treatment'.  I have
checked all of the hyperlinks and all of them are working fine.
            </small>
          
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={team4} alt="Avatar One" /> </div>
            <h5 className="client_name">Ashwani Kumar</h5>
            <small className="client_review">
              The two color  scheme is good but try adding  one or two more  colors.
Orange/yellow  and blue go well  together, and the purple color of the
accessed links is nice.  Maybe a turquoise  color  somewhere  would be
good.  The  content  flows very well and is well  written.  All of the
information is in the appropriate  place.  The only thing with content
is the amount of it on the front page!
            </small>
         
        </SwiperSlide>
        
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={team5} alt="Avatar One" />  </div>
            <h5 className="client_name">Sandeep yadav</h5>
            <small className="client_review">
              This site definitely  appeals to the average person because the layout
is so  simple  but very  VERY  effective.  It is a clean  site  with a
flawless  look, and someone  without any  technical  background  would
definitely  appreciate  it.  The layout makes anyone feel  comfortable
because it is so well done and clean  looking.  You feel as if you are
in good hands and you know that you will be able to find  anything you
need on this site.
            </small>
        
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={team6} alt="Avatar One" /> </div>
            <h5 className="client_name">Rishikesh Yadav</h5>
            <small className="client_review">
             The design is very  professional and well done.  I love the washed-out
image of the  globe on the left  behind  the  links.  The  site  feels
great.  I suggest  that you change the fonts to Arial, a more  rounded
font, to go with the professional feel of the site.  There are minimum
graphics,  and the  graphics  there are small  and  fast-loading.  The
colors of the images go together nicely.
            </small>
         
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={team7} alt="Avatar One" /> </div>
            <h5 className="client_name">Ajin Sumesh</h5>
            <small className="client_review">
              
The main  colors are  perfect,  they are very warm and  inviting.  The
contents of the pages flows very well, and all of the  writing is very
well  done and easy to read.  Once  again  you can tell  that a lot of
heart has gone into this site.
            </small>
         
        </SwiperSlide>
<SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={team8} alt="Avatar One" /> </div>
            <h5 className="client_name">Harsh Soni</h5>
            <small className="client_review">
             Overall, excellent page with lots of heart.  I just love the warm feel
of it.  Beautiful  work!  The  only  touch  ups are  minor  and do not
effect  the  average  persons  experience.  Oh and one more  thing, it
seems like Y2K has effected the date counter!



            </small>
         
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={team1} alt="Avatar One" /> </div>
            <h5 className="client_name">Tushar Thakur</h5>
            <small className="client_review">
              It is easy to navigate  this site  because  all of the links are right
there on the left hand side, and people without image-loading browsers
can access the links via the text at the  bottom  which is very  handy
and essential  for a good site.  It is a good idea having a highlights
section  right in the middle of the screen  because it is obvious, and
all important information can be accessed by the reader easily.
         </small>
        </SwiperSlide>
       
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={team9} alt="Avatar One" /> </div>
            <h5 className="client_name">Lakshya Srivastav</h5>
            <small className="client_review">
           The design is mostly  consistent  except for the changes in the fonts-
on the main page the font for the middle section is Times while on the
About Us page  the  font is  Arial/Helvetica.  The  load  time is very
fast,  which I know  everyone  appreciates!  I did not find any typos,
and all the links that I checked  worked  fine.  Great job!  Meta tags
are present on all of the pages that I checked.
         </small>
        </SwiperSlide>
       
      </Swiper>
    </section>
    
    
  )
}
export default Testimonials;