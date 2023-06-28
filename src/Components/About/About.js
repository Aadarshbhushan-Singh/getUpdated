import React from 'react'
import './About.css'
import { Button } from 'bootstrap'
import { Contact_Me } from './Contact_Me'
export const About = () => {

      const portfolio_web_link= "https://aadarshbhushan-singh.github.io/my_portfolio_website/"
      
      return (
            <section className='about_me_section'>
                  <div className="heading_intro">
                        <h1>Hello I'm <span id='intro_name'>Aadarshbhushan Singh</span></h1>
                  </div>

                  <hr  className='horizontal_line'/>

                  <div className="know_more_about_me">
                        <h3>Know More About Me</h3>
                        <p>A skilled and dedicated computer enthusiast with prior experience in  <b className="bold__letters">Web Development</b> and <b className="bold__letters">Data Analysis</b>; proficient in <b className="bold__letters">Python, Java and React</b>; ready to drive success in goal-oriented companies and become an asset.</p>
                  </div>

                  <div className="about_this_project">
                        <h3>About This Project</h3>
                        <p>In today's fast-paced world, staying up-to-date with the latest information in our chosen fields can be challenging. That's why I created this web application, which offers a convenient solution to <b> keep yourself informed on various categories of news that are both current and reliable.</b> By providing a centralized platform, it saves you valuable time that would otherwise be spent searching for news across different categories.</p>
                  </div>

                  <div className="portfolio_button">
                        <h3>Visit my portfolio</h3>
                        <a href={portfolio_web_link} target="_blank">View Portfolio</a>
                  </div>

                  <div className="contact_me">
                        <div className='heading_contact_me'>
                              <h3>Contact Me</h3>
                        </div>
                        <Contact_Me/>
                  </div>

            </section>
      )
}
