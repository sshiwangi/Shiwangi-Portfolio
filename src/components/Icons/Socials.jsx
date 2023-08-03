import React from 'react'

const Socials = ({icons}) => {
  return (
    <div className="icon-container">
        {icons.map((item) => (
            <div key = {item.id} className='social-icon-container'>
              <a style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} href={item.link} target="_blank" rel="noopener noreferrer"> <img id='social-icon-sm' src={item.image} alt="" /></a>
            </div>
        ))}
    </div>
  )
}

export default Socials