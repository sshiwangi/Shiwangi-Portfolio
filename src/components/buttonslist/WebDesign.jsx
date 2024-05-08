import React, { useState } from "react";
import Spinder from "../../assets/images/spinder1.png";
import hustlersHelp from "../../assets/images/hustlershelp.png";
import portfolio from "../../assets/images/portfolio final.png";
import findhut from "../../assets/images/findhut final.png";
import DesignItem from "../projectitems/DesignItem";
import habittracker from "../../assets/images/Frame 6.png";
import legalease from "../../assets/images/file cover - 1.png";
import learnai from "../../assets/images/Frame 2.png";

function WebDesign({ activeButton }) {
  const [showAllDesign, setShowAllDesign] = useState(false);
  const handleAllDesignsButtonClick = () => {
    setShowAllDesign((prev) => !prev);
  };
  const designs = [
    {
      id: 1,
      image: habittracker,
      title: "Habit Tracker",
      desc: "Figma prototype of a Habit Tracker",
      date: "May, 2024",
      Figma:
        "https://www.figma.com/file/UE8gMfAnaVoUz4YQe8lx4M/Untitled?type=design&node-id=0%3A1&mode=design&t=sx7ccwcM2yAZrrBq-1",
    },
    {
      id: 2,
      image: legalease,
      title: "LegalEase",
      desc: "Figma prototype of a legal platform",
      date: "Sep, 2023",
      Figma:
        "https://www.figma.com/file/dXS0ompZhugHeu7oZPBM2M/LegalEase-Prototype?type=design&node-id=0%3A1&mode=design&t=sx7ccwcM2yAZrrBq-1",
    },
    {
      id: 3,
      image: Spinder,
      title: "Spinder",
      desc: "Match-Making",
      date: "May, 2023",
      Figma:
        "https://www.figma.com/file/so5ZMArdzTO4c2qn9OL1n6/Spinder-final-ui?type=design&node-id=0%3A1&mode=design&t=CTCXhhj5UTtI0kBs-1",
    },
    {
      id: 4,
      image: hustlersHelp,
      title: "hustlersHelp",
      desc: "Ed-Tech",
      date: "July, 2023",
      Figma:
        "https://www.figma.com/file/d9genT0kuICvsxw5Pr9AkA/Untitled?type=design&mode=design&t=CTCXhhj5UTtI0kBs-1",
    },
    {
      id: 5,
      image: portfolio,
      title: "Portfolio",
      desc: "personal",
      date: "April, 2023",
      Figma:
        "https://www.figma.com/file/sP3blX3UUgfNxWSt16rpu3/Untitled?type=design&mode=design&t=CTCXhhj5UTtI0kBs-1",
    },
    {
      id: 6,
      image: findhut,
      title: "FindHut",
      desc: "House Hunt",
      date: "Feb, 2023",
      Figma:
        "https://www.figma.com/file/mJvtyFzMElhjzBZSWHuVpw/Untitled?type=design&mode=design&t=CTCXhhj5UTtI0kBs-1",
    },
    {
      id: 7,
      image: learnai,
      title: "LearnAi",
      desc: "Learning Platform Figma UI",
      date: "Feb, 2024",
      Figma:
        "https://www.figma.com/file/UKclS6xQP2HXHzripEk9XF/Untitled?type=design&node-id=0%3A1&mode=design&t=sx7ccwcM2yAZrrBq-1",
    },
  ];
  const featuredDesigns = designs.slice(0, 2);
  const allDesigns = designs.slice(2, 7);
  return (
    <div className="projects-container">
      <DesignItem designs={featuredDesigns} />
      {/* <div className="see-all-btn" onClick={handleAllDesignsButtonClick}>
            See All
        </div> */}
      {activeButton && <DesignItem designs={allDesigns} />}
    </div>
  );
}

export default WebDesign;
