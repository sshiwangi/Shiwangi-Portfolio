import React from 'react'
import gdsc from '../../assets/images/gdsc.jpeg'
import codessCafe from '../../assets/images/codesscafe.jpeg'
import WWWCODEDelhi from '../../assets/images/wwcode.jpeg'
import MLSA from '../../assets/images/microsoft (1).jpeg'
import postman from '../../assets/images/postman.jpeg'

function Community() {
    const experiences = [
        {
            id: 1,
            image: gdsc,
            title: 'Google Developer Student Clubs Lead',
            company: 'Google Developer Student Clubs',
            date: 'July 2023 - Present',
            desc: 'Google Developer Student Clubs are community groups for college and university students interested in Google developer technologies.',
            skill: 'Team Management, Leadership, Team Building'
        },
        {
            id: 2,
            image: codessCafe,
            title: 'OSS Mentee @Codess.Cafe',
            company: 'Codess.Cafe',
            date: 'May 2023 - Present',
            desc: 'I was mentee in the open source cohort 4.0 of Codess.Cafe',
            skill: 'Open Source'
        },
        {
            id: 3,
            image: WWWCODEDelhi,
            title: 'Mentee @Women Who Code Delhi',
            company: 'Women Who Code Delhi',
            date: 'May 2023 - July 2023',
            desc: 'Selected as one of the 45 mentees among 1500+ applicants in the Mentorship Program 5.0',
            skill: 'Data Structures and Algorithms, Open Source, Full Stack Development'
        },
        {
            id: 4,
            image: MLSA,
            title: 'Beta Microsoft Learn Student Ambassador',
            company: 'Microsoft',
            date: 'July 2022 - Present',
            desc: 'I have conducted sessions on Microsft technologies, lead my team in the social impact project league and have completed various cloud and AI skill challenges on Microsoft Learn Platform',
            skill: 'Azure Static Web App, CodeSpaces, Git and GitHub, MERN'
        },
        {
            id: 5,
            image: postman,
            title: 'Postman Student Expert',
            company: 'Postman',
            date: 'Dec 2022 - Present',
            desc: 'Postman Student Experts are proficient in the essential skills involved in building and testing API requests in Postman.',
            skill: 'API, API Teating, API Documentation'
        }
    ];
  return (
    <div className="experience-item-container">
        {experiences.map((item, index, array) =>(
            <div key = {item.id} className='experience-item'>
                <div className="experience-item-content-container">
                <div className="image-container">
                <img className='margin-style experience-img' src={item.image} alt="" />
                </div>
                
                <div className="item-content">
                    <h3 className='project-title margin-style'>{item.title}</h3>
                    <h4 className='item-margin'>{item.company}</h4>
                    <h4 className='item-margin'>{item.date}</h4>
                    <p className='item-desc margin-style'>{item.desc}</p>
                    <p>Skills: {item.skill}</p>
                    
                </div>
                </div>
                
                {index <4 && index <array.length -1 && <hr className='hr-line'/>}
                
                
            </div>
        ))}
    </div>
  )
}

export default Community