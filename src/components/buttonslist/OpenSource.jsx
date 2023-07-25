import React from 'react'
import gssoc from '../../assets/images/gssoc.jpeg'
import hacktoberfest from '../../assets/images/hacktoberfest.jpeg'
import ssoc from '../../assets/images/social.jpeg'

function OpenSource() {
    const experiences = [
        {
            id: 1,
            image: gssoc,
            title: 'Open Source Contributor',
            company: 'GirlScript Summer of Code 23',
            date: 'May 2023 - Present',
            desc: 'Contributed to Full Stack development and DSA related projects',
            skill: 'React JS, Node JS, Express JS, Mongo DB, HTML, CSS, JavaScript, Bootstrap, DSA'
        },
        {
            id: 2,
            image: hacktoberfest,
            title: 'Open Source Contributor',
            company: 'Hacktoberfest 22',
            date: 'Oct 2022 - Nov 2022',
            desc: 'Successfully merged 10+ prs in the field of web development',
            skill: 'Full Stack Development'
        },
        {
            id: 3,
            image: ssoc,
            title: 'Open Source Contributor',
            company: 'social Summer of Code',
            date: 'July 2022 - Sep 2022',
            desc: 'Contributed to frontend based projects',
            skill: 'HTML, CSS, JavaScript'
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
                
                {index <3 && index <array.length -1 && <hr className='hr-line'/>}
                
                
            </div>
        ))}
    </div>
  )
}

export default OpenSource