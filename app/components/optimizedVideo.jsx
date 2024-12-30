// components/OptimizedVideo.js
import { getOptimizedImageUrl } from '../utils/imageUtils';
import { getOptimizedVideoUrl } from '../utils/videoUtils';

export default function OptimizedVideo({ src, poster, ...props }) {
   
    
//   const optimizedVideoUrl = src ? getOptimizedVideoUrl(src) : null;
//   const optimizedPosterUrl = poster ? getOptimizedImageUrl(poster) : null;
// console.log('optimizedVideoUrl', optimizedVideoUrl);

  return (
    <video
      src={src}
      poster={poster}
      playsInline // Better mobile experience
      preload="metadata" // Loads only video metadata initially
      {...props}
    >
      {/* Fallback for browsers that don't support the video format */}
      {/* <source src={optimizedVideoUrl} type="video/webm" />
      <source src={optimizedVideoUrl} type="video/mp4" /> Fallback format */}
      Your browser does not support the video tag.
    </video>
  );
}