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
function Home() {
  return (
    <div className="nav-ele-section">
      <div className="container nav-ele-content">
        <div className="nav-ele-text-content">
          <h1>
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
            
              <img className="social-icon" src={linkedin} alt="ig" />
              <img className="social-icon" src={twitter} alt="ig" />
              <img className="social-icon" src={github} alt="ig" />
              <img className="social-icon" src={ig} alt="ig" />
              <img className="social-icon" src={medium} alt="ig" />
              <img className="social-icon" src={yt} alt="ig" />
            
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
