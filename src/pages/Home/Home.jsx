import React from "react";
import "./home.css";
import shiwangiImg from "../../assets/images/shiwangi-img.jpeg";
import resumeIcon from "../../assets/images/resume-icon.png";
import linkedin from "../../assets/images/LinkedIn.png"
import twitter from "../../assets/images/Twitter Squared.png"
import github from "../../assets/images/github.png"
import ig from "../../assets/images/Instagram.png"
import medium from "../../assets/images/Medium Monogram.png"
import yt from "../../assets/images/YouTube.png"
import { Link } from "react-router-dom";
function Home() {
  const socialLinks = [
    {
      id: 1,
      image: linkedin,
      link: 'https://www.linkedin.com/in/shiwangi-kumari-5b0b3b1b7/',
      alt: 'linkedIn'
      
    },
    {
      id: 2,
      image: twitter,
      link: 'https://twitter.com/sshiwangi770',
      alt: 'twitter'
      
    },
    {
      id: 3,
      image: github,
      link: 'https://github.com/sshiwangi',
      alt: 'github'
      
    },
    {
      id: 4,
      image: medium,
      link: 'https://medium.com/@sshiwangi770',
      alt: 'medium'
      
    }
  
  ]
  return (
    <div className="nav-ele-section">
      <div className="container nav-ele-content home-content">
        <div className="nav-ele-text-content">
          <h1 className="name">
            Hi, I'm <br /> Shiwangi Kumari!
          </h1>
          <h2 className="hero-headline">
            A Frontend Developer and an Open Source Enthusiast from India.
          </h2>
          <div className="btn-container">
            <div className="btn filled-btn">
              Resume
              <img src={resumeIcon} alt="resume" />
            </div>
            <div className="btn stroked-btn">Contact</div>
          </div>
          <div className="socials-container">
          {socialLinks.map((item, index) => (
            <a href={item.link} target="_blank" key={index}>
              <img className="social-icon" src={item.image} alt={item.alt}/>
            </a>
      ))}   
          </div>
        </div>
        <div className="nav-ele-img-content">
          <div className="img-container">
            <img style={{borderRadius: '50%'}} height="297px" src={shiwangiImg} alt="shiwangi-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
