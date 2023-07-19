import React from 'react'
import ImageGallery from '../../components/imagegallery/ImageGallery'
import ImageItem from '../../components/imagegallery/ImageItem'

function WebTech() {
      /* requiring images */
  const images = [
    require('../../assets/images/react.png'),
    require('../../assets/images/nodejs.png'),
    require('../../assets/images/express.png'),
    require('../../assets/images/mongodb.png'),
    require('../../assets/images/tailwind.png'),
    require('../../assets/images/Html 5.png'),
    require('../../assets/images/css1.png'),
    require('../../assets/images/bootstrap.png')

  ];
  return (
    // <div>WebTech</div>
    <div className="btn-items">
        <ImageGallery images={images} />
        
      </div>
  )
}

export default WebTech