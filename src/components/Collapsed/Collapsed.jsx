import React from 'react'
import {Link} from 'react-router-dom'
import './Collapsed.css'
import crossIcon from '../../assets/images/icon-cross-white.png'

function Collapsed(props) {
  return (
    <div className='collapsed-menu-container'>
        <div onClick={props.operation} className="cross-icon-container">
            <img src={crossIcon} alt="cross-icon" />
        </div>
        <div className="collapsed-menu-content">
        <Link to="/" className="menu-content" onClick={props.operation}>Home</Link>
        <Link to="/about" className="menu-content" onClick={props.operation}>About</Link>
        <Link to="/projects" className="menu-content" onClick={props.operation}>Projects</Link>
        <Link to="/experience" className="menu-content" onClick={props.operation}>Experience</Link>
        <Link to="/contact" className="menu-content" onClick={props.operation}>Contact</Link>
        </div>
        
    </div>
  )
}

export default Collapsed