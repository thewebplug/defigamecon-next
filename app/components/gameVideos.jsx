"use client"
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getAllGames } from "@/app/apis";
import OptimizedImage from "./optimizedImage";
import OptimizedVideo from "./optimizedVideo";

export default function GameVideos() {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleGetGames = async () => {
    const response = await getAllGames();
    console.log('response getAllGames', response);
    
    if (response?.length > 0) {
      const temp = response?.flatMap((item) =>
        item.videos.map((video) => ({
          title: item.title,
          video: video,
          link: item.link,
          image: item.image,
        }))
      );
      setVideos(temp);
    }
  };

  useEffect(() => {
    handleGetGames();
  }, []);

  useEffect(() => {
    if (!selectedVideo?.video?.url) return;
  
    const video = document.querySelector(".poetry-video");
    if (!video) return;
  
    // Reset video state
    video.pause();
    video.currentTime = 0;
    
    // Load the video first
    video.load();
  
    // Play after loading
    video.addEventListener('loadeddata', () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error("Playback error:", error);
        });
      }
    }, { once: true }); // Remove listener after first execution
  
    // Cleanup
    return () => {
      video.pause();
    };
  }, [selectedVideo]);

  return (
    <div className="game-video">
      <div className="game-video__preview">
        {videos?.map((video, index) => (
          <div className={
            video?.image?.public_id === selectedVideo?.image?.public_id
              ? "game-video__preview__active game-video__preview__image"
              : "game-video__preview__image"
          } key={index}>
            <OptimizedImage
              src={video?.image?.url}
              alt=""
              
              onClick={() => setSelectedVideo(video)}
              objectFit="cover"
              layout="fill"
            />
          </div>
        ))}
      </div>
      <div className="game-video__inner">
        <div className="game-video__inner__flex">
          <div className="game-video__inner__flex__title">Games</div>
          {selectedVideo?.link && (
            <a
              className="game-video__inner__flex__subtitle"
              onClick={() => window.open(selectedVideo?.link, "_blank")}
            >
              Get game
            </a>
          )}
        </div>
        <OptimizedVideo
  id="video"
  className="poetry-video"
  poster={selectedVideo?.image?.url}
  src={selectedVideo?.video?.url}
  // onError={(e) => console.error("Video element error:", e)}
/>
        <div className="game-video__inner__previews">
          {videos?.map((video, index) => (
            <div onMouseOver={() => setSelectedVideo(video)} key={index}>
              {/* <div className="game-video__inner__previews__title">{video?.title}</div> */}
              <div className="game-video__inner__previews__image">
                <OptimizedImage src={video?.image?.url} alt="" objectFit="cover" layout="fill" />
              </div>
              <svg
                viewBox="-0.5 0 7 7"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>play [#ddcccc]</title>{" "}
                  <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    {" "}
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-347.000000, -3766.000000)"
                      fill="#ddcccc"
                    >
                      {" "}
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        {" "}
                        <path
                          d="M296.494737,3608.57322 L292.500752,3606.14219 C291.83208,3605.73542 291,3606.25002 291,3607.06891 L291,3611.93095 C291,3612.7509 291.83208,3613.26444 292.500752,3612.85767 L296.494737,3610.42771 C297.168421,3610.01774 297.168421,3608.98319 296.494737,3608.57322"
                          id="play-[#ddcccc]"
                        >
                          {" "}
                        </path>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
          ))}

          {/* <img src={Image1} alt="" />
              <img src={Image1} alt="" /> */}
        </div>
        <div className="tint">
          {!selectedVideo && (
            <div>Hover or click on a game to play trailer.</div>
          )}
        </div>
      </div>
    </div>
  );
}
