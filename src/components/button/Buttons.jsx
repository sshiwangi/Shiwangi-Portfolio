import React from 'react'

function Buttons({name, onClick}) {
  return (
    <button className="skills-btn-item" onClick={() => onClick(name)}>
        {name}
    </button>
  )
}

export default Buttons