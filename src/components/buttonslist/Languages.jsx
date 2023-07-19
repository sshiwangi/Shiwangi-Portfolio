import React from 'react'
import ImageGallery from '../../components/imagegallery/ImageGallery'
import ImageItem from '../../components/imagegallery/ImageItem'

function Languages() {
    const images = [
        require('../../assets/images/c++.png'),
        require('../../assets/images/js.png'),
        require('../../assets/images/Java.png'),
        require('../../assets/images/Python.png'),
      ];
  return (
    <div className="btn-items">
        <ImageGallery images={images} />
        
      </div>
  )
}

export default Languages