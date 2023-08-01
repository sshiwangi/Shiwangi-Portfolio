import React from 'react'

const Socials = ({icons}) => {
  return (
    <div className="icon-container">
        {icons.map((item) => (
            <div key = {item.id} className='social-icon-container'>
                <img id='social-icon-sm' src={item.image} alt="" />
            </div>
        ))}
    </div>
  )
}

export default Socials