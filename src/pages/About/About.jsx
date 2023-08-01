import React, {useState} from 'react'
import './about.css'
import SectionHeading from "../../components/sectionHeading/SectionHeading"
import Buttons from "../../components/button/Buttons"
import WebTech from '../../components/buttonslist/WebTech'
import DesignTools from '../../components/buttonslist/DesignTools'
import Languages from '../../components/buttonslist/Languages'

function About() {
  const [activeButton, setActiveButton] = useState('Web Technologies')
  const handleButtonClick = (buttonName) => {
    // if (buttonName === activeButton) {
    //   return;
    // }
    setActiveButton(buttonName);
  };

  return (
    <div className="about-ele-section">
      <div className="container about-container-item">
        <div className="heading-container">
        <SectionHeading name="About Me" />
        </div>
          
           <div className="about-container-hover">
            <div className="about-container">
            I am a Pre-final year computer science engineering undergrad with a passion for front-end development. I have a keen interest in contributing to open-source projects and have actively participated in various Open Source programs. I truly enjoy being part of a community where I can learn from others and contribute my skills. Currently, I am working towards becoming a Full Stack Developer with a specialization in the MERN stack.
            </div>

           </div>
           <div className="heading-container">
           <SectionHeading name="Skills"/>
           </div>

           <div className="btn-container skills-btn">
           <Buttons  name = "Web Technologies" onClick={ handleButtonClick} isActive={activeButton === 'Web Technologies'}/>
           <Buttons  name = "Languages" onClick={handleButtonClick} isActive={activeButton === 'Languages'}/>
           <Buttons name = "Design Tools" onClick={handleButtonClick} isActive={activeButton === 'Design Tools'}/>
           </div>
         
         {activeButton === 'Web Technologies' && <WebTech/>}
         {activeButton === 'Languages' && <Languages/>}
         {activeButton === 'Design Tools' && <DesignTools/>}
      </div>
    </div>
  )
}

export default About