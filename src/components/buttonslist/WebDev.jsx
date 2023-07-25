import React, {useState} from 'react'
import frontIcon from "../../assets/images/forward.png"
import backIcon from "../../assets/images/Back.png"
import ProjectItem from '../projectitems/ProjectItem';
import findhut from '../../assets/images/findhut1.png';
import portfolio from '../../assets/images/portfolio final.png'

function WebDev() {
    const [showAllProject, setShowAllProject] = useState(false);
    const handleAllProjectsButtonClick = () => {
        setShowAllProject(prev => !prev);
    }
    const projects = [
        {
            id: 1,
            image: portfolio,
            title: 'FindHut',
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
            desc: 'FindHut is a website that helps users find the best accomodations in their preferred location.',
            links: {
                Demo: 'https://newt-leggings.cyclic.app/',
                GitHub: 'https://github.com/sshiwangi/TheFindHut',
            },
        },
        {
            id: 3,
            image: findhut,
            title: 'Portfolio',
            desc: 'FindHut is a website that helps users find the best accomodations in their preferred location.',
            links: {
                Demo: 'https://newt-leggings.cyclic.app/',
                GitHub: 'https://github.com/sshiwangi/TheFindHut',
            },
        },
        {
            id: 4,
            image: findhut,
            title: 'Portfolio',
            desc: 'FindHut is a website that helps users find the best accomodations in their preferred location.',
            links: {
                Demo: 'https://newt-leggings.cyclic.app/',
                GitHub: 'https://github.com/sshiwangi/TheFindHut',
            },
        }
    ];
    const featuredProject = projects.slice(0, 2);
    const allProject = projects.slice(2, 4);
    
  return (
    <div className="projects-container">
        <ProjectItem projects = {featuredProject} />
        <div className="see-all-btn" onClick={handleAllProjectsButtonClick}>
            See All
        </div>
        {showAllProject && <ProjectItem projects={allProject}/>}
    </div>
  )
}

export default WebDev