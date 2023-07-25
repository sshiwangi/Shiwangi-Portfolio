import React from 'react'

const Socials = ({icons}) => {
  return (
    <div className="icon-container">
        {icons.map((item) => (
            <div key = {item.id} className='social-icon-container'>
                <img height="32px" src={item.image} alt="" />
            </div>
        ))}
    </div>
  )
}

export default Socials