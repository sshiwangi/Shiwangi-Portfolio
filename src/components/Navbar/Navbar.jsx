import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import menuIcon from '../../assets/images/icon-menu-small.png'
import './navbar.css'
import Collapsed from '../Collapsed/Collapsed'

function Navbar() {

  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const [isCrossShow, setIsCrossShow] = useState(false);

  //handling active state of nav items
  // const [activeNavItem, setActiveNavItem] = useState('');

  // const handleNavItemClick = (navItem) => {
  //   setActiveNavItem(navItem);
  // };
  
  //handing collapse
  function handleNavCollapse () {
    setIsCrossShow(!isCrossShow);
    setIsNavCollapsed(!isNavCollapsed)
  }
  
  return (
    <header className=' header-section'>
       <nav className="container navbar-section">
        <div className="brand-name"><span className='my-name'>Shiwangi</span>.in</div>
        <div className="menu-bar">
          <Link to="/" className="menu-content">Home</Link>
          <Link to="/about" className="menu-content">About</Link>
          <Link to="/projects" className="menu-content">Projects</Link>
          <Link to="/experience" className="menu-content">Experience</Link>
          <Link to="/contact" className="menu-content">Contact</Link>
       </div>
       <div onClick={handleNavCollapse} className='menu-icon hide-menu'>
        <img height="32px" src={menuIcon} alt="menu-icon" />
       </div>
       </nav>
       {isNavCollapsed && <Collapsed operation = {handleNavCollapse}/>}
    </header>
  )
}

export default Navbar