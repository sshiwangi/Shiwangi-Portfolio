import React, { useState } from "react";
import "./experience.css";
import Community from "../../components/buttonslist/Community";
import OpenSource from "../../components/buttonslist/OpenSource";
import Buttons from "../../components/button/Buttons";
import SectionHeading from "../../components/sectionHeading/SectionHeading";
import Internships from "../../components/buttonslist/Internships";

function Experience() {
  const [activeButton, setActiveButton] = useState("Community");
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <div className="about-ele-section">
      <div className="container">
        <div className="heading-container">
          <SectionHeading name="Experience" />
        </div>

        <div className="btn-container skills-btn">
          <Buttons
            name="Internships"
            className="skills-btn-item"
            onClick={handleButtonClick}
            isActive={activeButton === "Internships"}
          />
          <Buttons
            name="Community"
            className="skills-btn-item"
            onClick={handleButtonClick}
            isActive={activeButton === "Community"}
          />
          <Buttons
            name="Open Source"
            className="skills-btn-item"
            onClick={handleButtonClick}
            isActive={activeButton === "Open Source"}
          />
        </div>
        {activeButton === "Internships" && <Internships />}
        {activeButton === "Community" && <Community />}
        {activeButton === "Open Source" && <OpenSource />}
      </div>
    </div>
  );
}

export default Experience;
