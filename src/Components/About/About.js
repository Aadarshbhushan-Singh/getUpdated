import React from 'react'
import './About.css'
import { Button } from 'bootstrap'
import { Contact_Me } from './Contact_Me'
export const About = () => {
      
      return (
            <section className='about_me_section'>
                  <div className="heading_intro">
                        <h1>Hello I'm <span id='intro_name'>Aadarshbhushan Singh</span></h1>
                  </div>

                  <hr  className='horizontal_line'/>

                  <div className="know_more_about_me">
                        <h3>Know More About Me</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque tempora hic asperiores? Asperiores qui perspiciatis incidunt illum? Aspernatur quam magni distinctio. Officia atque nam ut magni suscipit facilis, aperiam laborum.</p>
                  </div>

                  <div className="about_this_project">
                        <h3>About This Project</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores molestias sunt, suscipit nesciunt quibusdam, ipsa ipsam vel deserunt nostrum quae libero ducimus repudiandae cupiditate sit dolor, aut commodi fuga vero?</p>
                  </div>

                  <div className="portfolio_button">
                        <h3>Visit my portfolio</h3>
                        <a href="#">View Portfolio</a>
                  </div>

                  <div className="contact_me">
                        <div className='heading_contact_me'>
                              <h3>Contact Me</h3>
                        </div>
                        {/* <div className='contact_me_section'>
                              <div className="form_section">
                                    <form action="">
                                          <input type="text" placeholder='Your Full Name'/>
                                          <input type="email" placeholder='Your Email'/>
                                          <input type="text" placeholder='Your Message'/>
                                    </form>
                              </div>
                              <div className="button_section">
                                    <a href="#">Contact BUtton 1</a>
                                    <a href="#">Contact BUtton 2</a>
                                    <a href="#">Contact BUtton 2</a>
                              </div>
                        </div> */}
                        <Contact_Me/>
                  </div>

            </section>
      )
}
