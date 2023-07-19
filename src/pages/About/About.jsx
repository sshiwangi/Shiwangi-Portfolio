import React, {useState} from 'react'
import './about.css'
import SectionHeading from "../../components/sectionHeading/SectionHeading"
import Buttons from "../../components/button/Buttons"
import WebTech from '../../components/buttonslist/WebTech'
import DesignTools from '../../components/buttonslist/DesignTools'
import Languages from '../../components/buttonslist/Languages'
// import ImageGallery from '../../components/imagegallery/ImageGallery'
// import ImageItem from '../../components/imagegallery/ImageItem'
function About() {
  const [activeButton, setActiveButton] = useState('Web Technologies')
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  }

  // /* requiring images */
  // const images = [
  //   require('../../assets/images/react.png'),
  //   require('../../assets/images/nodejs.png'),
  //   require('../../assets/images/express.png'),
  //   require('../../assets/images/mongodb.png'),
  //   require('../../assets/images/tailwind.png'),
  //   require('../../assets/images/Html 5.png'),
  //   require('../../assets/images/css.png'),
  //   require('../../assets/images/bootstrap.png')

  // ];
  return (
    <div className="about-ele-section">
      <div className="container">
          <SectionHeading name="About Me" />
           <div className="about-container-hover">
            <div className="about-container">
            I am a Pre-final year computer science engineering undergrad with a passion for front-end development. I have a keen interest in contributing to open-source projects and have actively participated in various Open Source programs. I truly enjoy being part of a community where I can learn from others and contribute my skills. Currently, I am working towards becoming a Full Stack Developer with a specialization in the MERN stack.
            </div>

           </div>
           <SectionHeading name="Skills"/>
           <div className="btn-container skills-btn">
           <Buttons  name = "Web Technologies" onClick={handleButtonClick}/>
           <Buttons  name = "Languages" onClick={handleButtonClick}/>
           <Buttons name = "Design Tools" onClick={handleButtonClick}/>
           </div>
           
         
         {activeButton === 'Web Technologies' && <WebTech/>}
         {activeButton === 'Languages' && <Languages/>}
         {activeButton === 'Design Tools' && <DesignTools/>}
      {/* <div className="btn-items">
        <ImageGallery images={images} />
      </div> */}
      </div>
    </div>
  )
}

export default About