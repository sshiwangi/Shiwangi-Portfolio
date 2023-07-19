import React from 'react'
import ImageItem from './ImageItem'


const ImageGallery = ({images}) => {
  return (
    <div className=" container image-gallery">
        {images.map((image, index) => (
            <div className="image-item">
                <ImageItem image={image} />
            </div>
        ))}
    </div>
  );
};

export default ImageGallery