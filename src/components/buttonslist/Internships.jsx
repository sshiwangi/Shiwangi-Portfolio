import React from "react";
import aarish from "../../assets/images/aarish_technologies_inc_logo.jpeg";

function Internships() {
  const internships = [
    {
      id: 1,
      image: aarish,
      title: "Frontend Developer",
      company: "Aarish Technologies Inc.",
      date: "Jan, 2024 - Present",
      desc: "Contributing as a frontend developer in web development projects.",
      skill:
        "React JS, JavaScript/TypeScript, Tailwind CSS, HTML/CSS, UI/UX, Figma",
    },
  ];
  return (
    <div className="experience-item-container">
      {internships.map((item, index, array) => (
        <div key={item.id} className="experience-item">
          <div className="experience-item-content-container">
            <div className="image-container">
              <img
                className="margin-style experience-img"
                src={item.image}
                alt=""
              />
            </div>

            <div className="item-content">
              <h3 className="project-title margin-style">{item.title}</h3>
              <h4 className="item-margin">{item.company}</h4>
              <h4 className="item-margin">{item.date}</h4>
              <p className="item-desc margin-style">{item.desc}</p>
              <p>Skills: {item.skill}</p>
            </div>
          </div>

          {index < 4 && index < array.length - 1 && <hr className="hr-line" />}
        </div>
      ))}
    </div>
  );
}

export default Internships;
