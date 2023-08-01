import React from 'react'

const ProjectItem = ({projects}) => {
  return (
    <div className="project-item-container">
        {projects.map((project) =>(
            <div key = {project.id} className='project-item'>
                <img className='margin-style' height="250px" src={project.image} alt="" />
                <h3 className='project-title margin-style'>{project.title}</h3>
                <p className="project-desc margin-style tech-stack">{project.technology}</p>
                <p className='project-desc margin-style'>{project.desc}</p>
                <div className="links-btn-container">
                <a className='project-btns' href={project.links.Demo} target="_blank">Demo</a>
                <a className = 'project-btns' href={project.links.GitHub} target="_blank">GitHub</a>
                </div>
                
            </div>
        ))}
    </div>
  );
};

export default ProjectItem