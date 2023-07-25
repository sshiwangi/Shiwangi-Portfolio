import React from 'react'
import './contact.css'
import SectionHeading from '../../components/sectionHeading/SectionHeading'
import linkedin from '../../assets/images/LinkedIn final.png'
import github from '../../assets/images/GitHub (4).png'
import twitter from '../../assets/images/Twitter Squared.png'
import medium from '../../assets/images/Medium Monogram.png'
import leetcode from '../../assets/images/leetcode final.png'
import Socials from '../../components/Icons/Socials'

function Contact() {
  const icons = [
    {
      id: 1,
      image: linkedin,
    },
    {
      id: 2,
      image: github,
    },
    {
      id: 3,
      image: twitter,
    },
    {
      id: 4,
      image: medium,
    },
    {
      id: 5,
      image: leetcode,
    },
  ]
  return (
    <div className="about-ele-section">
      <div className="container">
        <SectionHeading name="Experience" />
        <h2 style={{marginBottom: '2rem', marginTop: '2.5rem'}}>Love to hear from you, <br /> Get in touch 👋</h2>

         <div className="contact-section">
          <h4 style={{marginBottom: '0.6rem'}}>Your Name</h4>
          <input type="text" name="name" className='input-style' />
          <h4 style={{marginBottom: '0.6rem'}}>Your Email</h4>
          <input type="email" name="email" className='input-style' />
          <h4 style={{marginBottom: '0.6rem'}}>Your Message</h4>
          <textarea name="message" id="" cols="30" rows="5"></textarea>
         <div className='send-btn'>Send</div>
         <Socials icons={icons} />
         </div>
      </div>
    </div>
  )
}

export default Contact