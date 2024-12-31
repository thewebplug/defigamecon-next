import OptimizedImage from "./optimizedImage";

export default function EventBanner({image}) {
  return (
    <div className="banner">
      <OptimizedImage 
        src={image?.url} 
        alt="" 
        className="banner__image"
        objectFit="cover"
        width={1920} 
        height={1080} 
      />
    </div>
  );
}