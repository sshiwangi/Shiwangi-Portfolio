import React, { useState } from "react";
import frontIcon from "../../assets/images/forward.png";
import backIcon from "../../assets/images/Back.png";
import ProjectItem from "../projectitems/ProjectItem";
import findhut from "../../assets/images/findhut1.png";
import portfolio from "../../assets/images/portfolio final.png";
import hustlersHelp from "../../assets/images/hustlershelp.png";
import memegenerator from "../../assets/images/memegenerator.png";
import reactquiz from "../../assets/images/reactquiz.png";
import travelVista from "../../assets/images/Frame 1 (3).png";
import learnai from "../../assets/images/Frame 2.png";
import collegeapi from "../../assets/images/Frame 3.png";
import reactdashboard from "../../assets/images/Frame 4.png";
import questionpaper from "../../assets/images/Frame 5 (1).png";

function WebDev({ activeButton }) {
  // const [showAllProject, setShowAllProject] = useState(false);
  // const handleAllProjectsButtonClick = () => {
  //     setShowAllProject(prev => !prev);
  // }
  const projects = [
    {
      id: 1,
      image: travelVista,
      title: "TravelVista",
      technology: "React JS, Express JS, MongoDB, Node JS",
      desc: "TravelVista is a dynamic platform for enthusiasts to share and discover travel destinations.",
      links: {
        Demo: "https://travel-vista-nine.vercel.app/",
        GitHub: "https://github.com/sshiwangi/TravelVista",
      },
    },
    {
      id: 2,
      image: learnai,
      title: "LearnAi",
      technology: "React JS, Express JS, MongoDB, Node JS",
      desc: "LearnAi is a platform that solves information overload on YouTube by providing personalized learning video recommendations based on individual preferences and needs.",
      links: {
        Demo: "https://learn-ai-rose.vercel.app/",
        GitHub: "#",
      },
    },
    {
      id: 3,
      image: collegeapi,
      title: "College-API",
      technology: "ReactJS, Express JS, MongoDB, REST API, Node JS",
      desc: "This API showcases a collection of undergraduate engineering colleges in India that are approved by the All India Council for Technical Education (AICTE) along with their respective states.",
      links: {
        Demo: "https://college-api-git-main-sshiwangi.vercel.app/",
        GitHub: "https://github.com/sshiwangi/College-API",
      },
    },
    {
      id: 4,
      image: portfolio,
      title: "Portfolio",
      technology: "React JS",
      desc: "A dynamic and responsive portfolio website that showcases my skills, experiences, and projects in an elegant and user-friendly interface.",
      links: {
        Demo: "https://shiwangikumari.vercel.app/",
        GitHub: "https://github.com/sshiwangi/Shiwangi-Portfolio",
      },
    },
    {
      id: 5,
      image: reactdashboard,
      title: "React Dashboard",
      technology: "React JS, Tailwind CSS",
      desc: "A responsive and user friendly dashboard made with react js",
      links: {
        Demo: "https://react-dashboard-sable.vercel.app/",
        GitHub: "https://github.com/sshiwangi/React-Dashboard",
      },
    },
    {
      id: 6,
      image: hustlersHelp,
      title: "HustlersHelp",
      technology: "React JS, Tailwind CSS, Express js, Node js, Mongo DB",
      desc: "HustlersHelp is a comprehensive platform for entrepreneurs, offering a diverse range of courses, team building, mentorship opportunities, event updates, and a convenient equipment marketplace, all designed to empower and support business growth.",
      links: {
        Demo: "https://hustlers-help.vercel.app/",
        GitHub: "https://github.com/sshiwangi/HustlersHelp",
      },
    },
    {
      id: 7,
      image: reactquiz,
      title: "React Quiz",
      technology: "React JS",
      desc: "It is an interactive and engaging React Quiz web application to test users knowledge on a wide range of topics with multiple-choice questions, immediate feedback, and final score calculation.",
      links: {
        Demo: "https://react-quiz-six-steel.vercel.app/",
        GitHub: "https://github.com/sshiwangi/React-Quiz",
      },
    },
    {
      id: 8,
      image: memegenerator,
      title: "Meme Generator",
      technology: "React JS",
      desc: "The meme generator is a web-based meme generator that allows users to create their own memes combining text and images in a humorous or satirical way.",
      links: {
        Demo: "https://get-memes-five.vercel.app/",
        GitHub: "https://github.com/sshiwangi/Meme-Generator",
      },
    },
    {
      id: 9,
      image: questionpaper,
      title: "Question Paper Generator",
      technology: "React JS, Node JS, Express JS, Tailwind CSS",
      desc: "This web application enables users to generate personalized question papers based on specified criteria.",
      links: {
        Demo: "https://question-paper-generator-kohl.vercel.app/",
        GitHub: "https://github.com/sshiwangi/Question-Paper-Generator",
      },
    },
  ];
  const featuredProject = projects.slice(0, 2);
  const allProject = projects.slice(2, 9);

  return (
    <div className="projects-container">
      <ProjectItem projects={featuredProject} />
      {/* * <div className="see-all-btn" onClick={handleAllProjectsButtonClick}>
            See All
        </div> */}
      {activeButton && <ProjectItem projects={allProject} />}
    </div>
  );
}

export default WebDev;
