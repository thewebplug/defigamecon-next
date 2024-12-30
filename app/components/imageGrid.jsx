import { useEffect, useState } from "react";




export default function ImageGrid({images}) {   
    const [selectedImage, setSelectedImage] = useState(null);
    

    useEffect(() => {
      if(images?.length > 0) {
        setSelectedImage(images[0])
      }
    }, [images])
    
    return (
        <div className="event__grid">
          <div className="event__grid__preview">
            {images?.map((image, index) => 
            <img className={image?.public_id === selectedImage?.public_id ? "event__grid__preview__active" : ""} src={image?.url} alt=""
            onClick={() => setSelectedImage(image)}
            key={index}
            />
            )}
          </div>
          <img className="event__grid__view" src={selectedImage?.url} alt="" />
        </div>
    )
}