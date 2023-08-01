import React from 'react'

function Buttons({name, onClick, isActive}) {
  return (
    <button className={`buttons ${isActive ? 'active-button' : 'skills-btn-item'}`} onClick={() => onClick(name)}>
        {name}
    </button>
  )
}

export default Buttons