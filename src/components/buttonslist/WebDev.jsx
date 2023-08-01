import React, {useState} from 'react'
import frontIcon from "../../assets/images/forward.png"
import backIcon from "../../assets/images/Back.png"
import ProjectItem from '../projectitems/ProjectItem';
import findhut from '../../assets/images/findhut1.png';
import portfolio from '../../assets/images/portfolio final.png'
import hustlersHelp from '../../assets/images/hustlershelp.png'
import memegenerator from '../../assets/images/memegenerator.png'
import reactquiz from '../../assets/images/reactquiz.png'
function WebDev({activeButton}) {
    // const [showAllProject, setShowAllProject] = useState(false);
    // const handleAllProjectsButtonClick = () => {
    //     setShowAllProject(prev => !prev);
    // }
    const projects = [
        {
            id: 1,
            image: findhut,
            title: 'FindHut',
            technology: 'Handlebars JS, Express JS, MongoDB, REST API, Node JS',
            desc: 'FindHut is a website that helps users find the best accomodations in their preferred location.',
            links: {
                Demo: 'https://newt-leggings.cyclic.app/',
                GitHub: 'https://github.com/sshiwangi/TheFindHut',
            },
        },
        {
            id: 2,
            image: portfolio,
            title: 'Portfolio',
            technology: 'React JS',
            desc: 'A dynamic and responsive portfolio website that showcases my skills, experiences, and projects in an elegant and user-friendly interface.',
            links: {
                Demo: 'https://shiwangikumari.vercel.app/',
                GitHub: 'https://github.com/sshiwangi/Shiwangi-Portfolio',
            },
        },
        {
            id: 3,
            image: hustlersHelp,
            title: 'HustlersHelp',
            technology: 'React JS, Tailwind CSS, Express js, Node js, Mongo DB',
            desc: 'HustlersHelp is a comprehensive platform for entrepreneurs, offering a diverse range of courses, team building, mentorship opportunities, event updates, and a convenient equipment marketplace, all designed to empower and support business growth.',
            links: {
                Demo: 'https://hustlers-help.vercel.app/',
                GitHub: 'https://github.com/sshiwangi/HustlersHelp',
            },
        },
        {
            id: 4,
            image: reactquiz,
            title: 'React Quiz',
            technology: 'React JS',
            desc: 'It is an interactive and engaging React Quiz web application to test users knowledge on a wide range of topics with multiple-choice questions, immediate feedback, and final score calculation.',
            links: {
                Demo: 'https://react-quiz-six-steel.vercel.app/',
                GitHub: 'https://github.com/sshiwangi/React-Quiz',
            },
        },
        {
            id: 5,
            image: memegenerator,
            title: 'Meme Generator',
            technology: 'React JS',
            desc: 'The meme generator is a web-based meme generator that allows users to create their own memes combining text and images in a humorous or satirical way.',
            links: {
                Demo: 'https://get-memes-five.vercel.app/',
                GitHub: 'https://github.com/sshiwangi/Meme-Generator',
            },
        }
    ];
    const featuredProject = projects.slice(0, 2);
    const allProject = projects.slice(2, 5);
    
  return (
    <div className="projects-container">
        <ProjectItem projects = {featuredProject} />
        {/* * <div className="see-all-btn" onClick={handleAllProjectsButtonClick}>
            See All
        </div> */}
        {activeButton && <ProjectItem projects={allProject}/>} 
    </div>
  )
}

export default WebDev