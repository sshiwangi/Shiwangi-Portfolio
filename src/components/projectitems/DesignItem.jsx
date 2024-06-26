import React from "react";
import figmaIcon from "../../assets/images/figmaIcon.png";

const DesignItem = ({ designs }) => {
  return (
    <div className="project-item-container">
      {designs.map((design) => (
        <div key={design.id} className="project-item">
          <img
            className="margin-style"
            height="250px"
            src={design.image}
            alt=""
          />
          <h3 className="project-title margin-style">{design.title}</h3>
          <p className="project-desc margin-style">{design.desc}</p>
          <div className="links-btn-container">
            <span className="project-date">{design.date}</span>
            <a href={design.Figma} target="_blank" rel="noopener noreferrer">
              {" "}
              <img height="44px" src={figmaIcon} alt="" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DesignItem;
