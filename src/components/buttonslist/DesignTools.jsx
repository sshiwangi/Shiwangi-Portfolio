import React from 'react'
import ImageGallery from '../../components/imagegallery/ImageGallery'
import ImageItem from '../../components/imagegallery/ImageItem'

function DesignTools() {
    const images = [
        require('../../assets/images/Figma.png'),
        require('../../assets/images/Adobe Illustrator.png'),
        require('../../assets/images/Adobe Photoshop.png'),
        
      ];
  return (
    <div className="btn-items">
        <ImageGallery images={images} />
        
      </div>
  )
}

export default DesignTools