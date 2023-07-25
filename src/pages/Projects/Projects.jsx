import React, {useState} from 'react'
import './Projects.css'
import SectionHeading from '../../components/sectionHeading/SectionHeading'
import Buttons from '../../components/button/Buttons'
import WebDesign from '../../components/buttonslist/WebDesign'
import WebDev from '../../components/buttonslist/WebDev'

function Projects() {
  const [activeButton, setActiveButton] = useState('Web Development')
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  }
  return (
    <div className="about-ele-section">
      <div className="container">
        <SectionHeading name="Projects" />
        <div className="btn-container skills-btn">
           <Buttons name="Web Development" className="skills-btn-item" onClick={handleButtonClick} />
           <Buttons name="Web Design" className="skills-btn-item" onClick={handleButtonClick} />
        </div>

         {activeButton === 'Web Development' && <WebDev/>}
         {activeButton === 'Web Design' && <WebDesign/>}
      </div>
    </div>
  )
}

export default Projects