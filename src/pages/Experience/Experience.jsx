import React, {useState} from 'react'
import './experience.css'
import Community from '../../components/buttonslist/Community'
import OpenSource from '../../components/buttonslist/OpenSource'
import Buttons from '../../components/button/Buttons'
import SectionHeading from '../../components/sectionHeading/SectionHeading'

function Experience() {
  const [activeButton, setActiveButton] = useState('Community')
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  }
  return (
    <div className="about-ele-section">
      <div className="container">
        <SectionHeading name="Experience" />
        <div className="btn-container skills-btn">
           <Buttons name="Community" className="skills-btn-item" onClick={handleButtonClick} />
           <Buttons name="Open Source" className="skills-btn-item" onClick={handleButtonClick} />
        </div>

         {activeButton === 'Community' && <Community/>}
         {activeButton === 'Open Source' && <OpenSource/>}
      </div>
    </div>
  )
}

export default Experience