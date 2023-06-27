import './Contact_Me.css'
import React, { useRef } from 'react';

import {AiOutlineMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com';
import { useEffect, useState } from "react";

export const Contact_Me = () => {

      const form = useRef();

      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      const sendEmail = (e) => {
            e.preventDefault();
        
            emailjs.sendForm('service_e27rsij', 'template_wwn8rir', form.current, 'uY9OySxYq2ZyW_E28')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });

              e.target.reset()
      };
      return (
            <section id="contacts" >
                  <div className="container contact__container">
                        <div className="contact__options">
                              <article className="contact__option">
                                    <AiOutlineMail className="contact__option-icon" />
                                    <h4>Email</h4>
                                    <h5>singhaadarsh5050@gmail.com</h5>
                                    <a href="mailto:singhaadarsh5050@gmail.com" target="_blank" rel="noopener noreferrer">Send a message</a>
                              </article>

                              <article className="contact__option">
                                    <BsWhatsapp className="contact__option-icon" />
                                    <h4>Whatsapp</h4>
                                    <h5>+91 7634868809</h5>
                                    <a href="https://wa.me/+917634868809?text=Hi" target="_blank">Send a message</a>
                              </article>

                              <article className="contact__option">
                                    <BsMessenger className="contact__option-icon" />
                                    <h4>Messenger</h4>
                                    <h5>Aadarsh Singh</h5>
                                    <a href="https://m.me/100005524576316" target="_blank">Send a message</a>
                              </article>


                        </div>

                        <form ref={form}>
                              <input type="text" name="name" id="name" placeholder="Your Full Name" required />
                              <input type="email" name="email" id="email" placeholder="Your Email" required />
                              <textarea name="message" id="message" rows="7" placeholder="Your message here!"></textarea>
                              <button type="submit" className="send_message_button" onClick={sendEmail}>Send Message</button>
                        </form>
                  </div>
            </section>
      )
}

export default Contact_Me;
