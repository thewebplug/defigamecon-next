"use client"
import { useEffect } from "react";
import { useState } from "react"
import OptimizedVideo from "./optimizedVideo";

export default function Highlights({videos}) {


const [selectedVideo, setSelectedVideo] = useState(null);


useEffect(() => {
  
    if(!!selectedVideo) {
      const video = document.querySelector(".poetry-video");

    video.currentTime = 0;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then((_) => {
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
    }
  }, [selectedVideo]);

    

    return (
        <section className="highlights">
          <div className="highlights__flex">
            <div className="highlights__flex__title">Highlights</div>
            {/* <a
              className="highlights__flex__subtitle"
              onClick={() => {
                router.push("/poetry");
                window.scroll(0, 0);
              }}
            >
              See more
            </a> */}
          </div>
          <OptimizedVideo
                    id="video"
                    className="poetry-video"
                    src={selectedVideo}
                  />
          <div className="highlights__previews">
            {videos?.map((video, index) => (
              <div onMouseOver={() => setSelectedVideo(video?.url)} key={index}>
                <video src={video?.url}></video>
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
          {!selectedVideo && <div>Hover or click on a thumbnail to watch highlight.</div>}
          </div>
        </section>
    )
}  