import React, {useState} from 'react'
import Spinder from '../../assets/images/spinder1.png'
import hustlersHelp from '../../assets/images/hustlershelp.png'
import portfolio from '../../assets/images/portfolio final.png'
import findhut from '../../assets/images/findhut final.png'
import DesignItem from '../projectitems/DesignItem';

function WebDesign({activeButton}) {
  const [showAllDesign, setShowAllDesign] = useState(false);
  const handleAllDesignsButtonClick = () => {
      setShowAllDesign(prev => !prev);
  }
  const designs = [
    {
        id: 1,
        image: Spinder,
        title: 'Spinder',
        desc: 'Match-Making',
        date: 'April, 2023',
        Figma: 'https://github.com/sshiwangi/TheFindHut',
    },
    {
      id: 2,
      image: hustlersHelp,
      title: 'hustlersHelp',
      desc: 'Ed-Tech',
      date: 'April, 2023',
      Figma: 'https://github.com/sshiwangi/TheFindHut',
    },
    {
      id: 3,
      image: portfolio,
      title: 'Portfolio',
      desc: 'personal',
      date: 'April, 2023',
      Figma: 'https://github.com/sshiwangi/TheFindHut',
    },
    {
      id: 4,
      image: findhut,
      title: 'FindHut',
      desc: 'House Hunt',
      date: 'April, 2023',
      Figma: 'https://github.com/sshiwangi/TheFindHut',
    }
];
const featuredDesigns = designs.slice(0, 2);
const allDesigns = designs.slice(2, 4);
  return (
    <div className="projects-container">
        <DesignItem designs = {featuredDesigns} />
        {/* <div className="see-all-btn" onClick={handleAllDesignsButtonClick}>
            See All
        </div> */}
        {activeButton && <DesignItem designs={allDesigns}/>}
    </div>
  )
}

export default WebDesign