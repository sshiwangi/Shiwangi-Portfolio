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
  const [activeText, setActiveText] = useState('Home');
//handling active text state
  const handleTextClick = (item) => {
    setActiveText(item);
  };
  
  const [showAllProject, setShowAllProject] = useState(false);
  //handling all project buttn click function
    const handleAllProjectsButtonClick = () => {
        setShowAllProject(prev => !prev);
    }
  return (
    <div className="about-ele-section">
      <div className="container">
        <div className="heading-container">
        <SectionHeading name="Projects" />
        <p className={`buttons ${activeText === 'See All' ? 'active-text' : 'see-all-text'}`} onClick={()=> {handleTextClick('See All'); handleAllProjectsButtonClick();}}>See all</p>
        </div>
        
        <div className="btn-container skills-btn">
           <Buttons name="Web Development" className="skills-btn-item" onClick={handleButtonClick} isActive={activeButton === 'Web Development'}/>
           <Buttons name="Web Design" className="skills-btn-item" onClick={handleButtonClick} isActive={activeButton === 'Web Design'} />
        </div>

         {activeButton === 'Web Development' && <WebDev activeButton={showAllProject}/>}
         {activeButton === 'Web Design' && <WebDesign activeButton={showAllProject}/>}
      </div>
    </div>
  )
}

export default Projects