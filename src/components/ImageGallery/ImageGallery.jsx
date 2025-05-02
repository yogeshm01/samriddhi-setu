import { useState } from 'react'
import './ImageGallery.css'

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null)
  
  const openLightbox = (index) => {
    setSelectedImage(index)
  }
  
  const closeLightbox = () => {
    setSelectedImage(null)
  }
  
  const goToPrev = (e) => {
    e.stopPropagation()
    setSelectedImage((prev) => (prev > 0 ? prev - 1 : images.length - 1))
  }
  
  const goToNext = (e) => {
    e.stopPropagation()
    setSelectedImage((prev) => (prev < images.length - 1 ? prev + 1 : 0))
  }
  
  const getGridClass = () => {
    const count = images.length
    if (count === 1) return 'gallery-single'
    if (count === 2) return 'gallery-two'
    if (count === 3) return 'gallery-three'
    if (count === 4) return 'gallery-four'
    return 'gallery-many'
  }
  
  return (
    <div className="image-gallery">
      <div className={`gallery-grid ${getGridClass()}`}>
        {images.slice(0, 5).map((image, index) => (
          <div 
            key={index} 
            className={`gallery-item ${index >= 4 && images.length > 5 ? 'has-more' : ''}`}
            onClick={() => openLightbox(index)}
          >
            <img src={image} alt={`Gallery image ${index + 1}`} />
            {index === 4 && images.length > 5 && (
              <div className="more-overlay">
                <span>+{images.length - 5}</span>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {selectedImage !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>×</button>
          <button className="lightbox-prev" onClick={goToPrev}>‹</button>
          <button className="lightbox-next" onClick={goToNext}>›</button>
          
          <div className="lightbox-content">
            <img 
              src={images[selectedImage]} 
              alt={`Lightbox image ${selectedImage + 1}`}
            />
            <div className="lightbox-counter">
              {selectedImage + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ImageGallery