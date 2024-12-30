import { useEffect, useState } from "react";
import OptimizedImage from "./optimizedImage";




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
            <div className={image?.public_id === selectedImage?.public_id ? "event__grid__preview__active event__grid__preview__image" : "event__grid__preview__image"}>
               <OptimizedImage  src={image?.url} alt=""
            onClick={() => setSelectedImage(image)}
            key={index}
            />
            </div>
           
            )}
          </div>

          <div className="event__grid__view">
          <OptimizedImage  src={selectedImage?.url} alt="" />
          </div>
         
        </div>
    )
}