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
        Figma: 'https://www.figma.com/file/so5ZMArdzTO4c2qn9OL1n6/Spinder-final-ui?type=design&node-id=0%3A1&mode=design&t=CTCXhhj5UTtI0kBs-1',
    },
    {
      id: 2,
      image: hustlersHelp,
      title: 'hustlersHelp',
      desc: 'Ed-Tech',
      date: 'April, 2023',
      Figma: 'https://www.figma.com/file/d9genT0kuICvsxw5Pr9AkA/Untitled?type=design&mode=design&t=CTCXhhj5UTtI0kBs-1',
    },
    {
      id: 3,
      image: portfolio,
      title: 'Portfolio',
      desc: 'personal',
      date: 'April, 2023',
      Figma: 'https://www.figma.com/file/sP3blX3UUgfNxWSt16rpu3/Untitled?type=design&mode=design&t=CTCXhhj5UTtI0kBs-1',
    },
    {
      id: 4,
      image: findhut,
      title: 'FindHut',
      desc: 'House Hunt',
      date: 'April, 2023',
      Figma: 'https://www.figma.com/file/mJvtyFzMElhjzBZSWHuVpw/Untitled?type=design&mode=design&t=CTCXhhj5UTtI0kBs-1',
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