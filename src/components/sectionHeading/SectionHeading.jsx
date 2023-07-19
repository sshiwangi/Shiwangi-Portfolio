import React from 'react'


function SectionHeading(props) {
  return (
    <div>
    <h2 className='section-heading'>{props.name}</h2>
    <div className="section-heading-underline"></div>
    </div>
  )
}

export default SectionHeading