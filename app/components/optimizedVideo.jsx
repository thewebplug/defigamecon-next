import { getOptimizedImageUrl } from "../utils/imageUtils";
import { getOptimizedVideoUrl } from "../utils/videoUtils";

export default function OptimizedVideo({ src, poster, ...props }) {
  const optimizedVideoUrl = src ? getOptimizedVideoUrl(src) : null;
  const optimizedPosterUrl = poster ? getOptimizedImageUrl(poster) : null;
  console.log("src", src);
  // const videoRef = useRef(null);

  // const handleVideoError = (e) => {
  //   console.error("Video error:", e);
  // };

  return (
    <div>
      <video
        // ref={videoRef}
        className="poetry-video"
        autoPlay // Enable autoplay
        loop
        muted
        playsInline
        poster={poster}
        preload="metadata"
        // onError={handleVideoError}
        {...props}
      >
        <source src={src} type="video/webm" />
        {src && <source src={src.replace('.webm', '.mp4')} type="video/mp4" />}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}