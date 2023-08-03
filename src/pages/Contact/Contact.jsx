import React from 'react'
import './contact.css'
import SectionHeading from '../../components/sectionHeading/SectionHeading'
import linkedin from '../../assets/images/LinkedIn final.png'
import github from '../../assets/images/GitHub (4).png'
import twitter from '../../assets/images/Twitter Squared.png'
import medium from '../../assets/images/Medium Monogram.png'
import leetcode from '../../assets/images/leetcode final.png'
import Socials from '../../components/Icons/Socials'
import emailjs from 'emailjs-com';
import { useRef } from 'react';

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r5fxtno', 'template_3hq9y0j', form.current, 'E7-ioIwwRpqe3BjxV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  const icons = [
    {
      id: 1,
      image: linkedin,
      link: 'https://www.linkedin.com/in/shiwangi-kumari-5b0b3b1b7/'
    },
    {
      id: 2,
      image: github,
      link: 'https://github.com/sshiwangi'
      
    },
    {
      id: 3,
      image: twitter,
      link: 'https://twitter.com/sshiwangi770'
    },
    {
      id: 4,
      image: medium,
      link: 'https://medium.com/@sshiwangi770'
    },
    {
      id: 5,
      image: leetcode,
      link: 'https://leetcode.com/shiwangi14/'
    },
  ]
  return (
    <div className="about-ele-section">
      <div className="container">
        <div className="heading-container">
        <SectionHeading name="Experience" />
        </div>
        
        <h2 style={{marginBottom: '2rem', marginTop: '2.5rem'}}>Love to hear from you, <br /> Get in touch 👋</h2>
        <form ref={form} onSubmit={sendEmail}>
         <div className="contact-section">
          
          <h4 style={{marginBottom: '0.6rem'}}>Your Name</h4>
          <input type="text" name="name" className='input-style' />
          <h4 style={{marginBottom: '0.6rem'}}>Your Email</h4>
          <input type="email" name="email" className='input-style' />
          <h4 style={{marginBottom: '0.6rem'}}>Subject</h4>
          <input type="text" name="subject" className='input-style' />
          <h4 style={{marginBottom: '0.6rem'}}>Your Message</h4>
          <textarea name="message" id="" cols="30" rows="5"></textarea>
         <button className='send-btn' type="submit">Send</button>
         <Socials icons={icons} />
         </div>
         </form>
      </div>
    </div>
  )
}

export default Contact