// Maybe use people's tweets?
import { useEffect, useState } from "react";
import Image9 from "@/public/assets/Rectangle 41.png";
import Image1 from "@/public/assets/Rectangle 70.png";
import Image10 from "@/public/assets/Rectangle 64.png";
import Image11 from "@/public/assets/Rectangle 640.png";
import Image from "next/image";

const testimonials = [
  {
    image: Image9,
    text: "Finally tried OTG once again at the @DefiGameCon. Although It was tough I managed to kill and win a match 🏆. Web3 gaming remains inevitable.",
    username: "SwatB2k"
  },
  {
    image: Image1,
    text: "Finally tried OTG once again at the @DefiGameCon. Although It was tough I managed to kill and win a match 🏆. Web3 gaming remains inevitable.",
    username: "SwatB2k"
  },
  {
    image: Image10,
    text: "Finally tried OTG once again at the @DefiGameCon. Although It was tough I managed to kill and win a match 🏆. Web3 gaming remains inevitable.",
    username: "SwatB2k"
  },
  {
    image: Image11,
    text: "Finally tried OTG once again at the @DefiGameCon. Although It was tough I managed to kill and win a match 🏆. Web3 gaming remains inevitable.",
    username: "SwatB2k"
  },
]



export default function Testimonials() {
  const [duplicateCount, setDuplicateCount] = useState(2);

  useEffect(() => {
    const calculateDuplicates = () => {
      const viewportWidth = window.innerWidth;
      const newDuplicateCount = Math.ceil((viewportWidth * 3) / (300 + 20)) + 1;
      setDuplicateCount(newDuplicateCount);
    };

    calculateDuplicates();
    window.addEventListener('resize', calculateDuplicates);
    return () => window.removeEventListener('resize', calculateDuplicates);
  }, []);

  const duplicatedItems = Array(duplicateCount).fill(testimonials).flat();

  useEffect(() => {
    document.documentElement.style.setProperty('--item-count', testimonials.length);
  }, [testimonials.length]);

  return (
    <div className="testimonials">
      <div className="testimonials__slider">
        {duplicatedItems?.map((testimonial, index) => 
        <div className="testimonials__slider__card" key={index}>
        <div className="testimonials__slider__card__img">
          <Image src={testimonial?.image} alt="" />
          <div className="testimonials__slider__card__img__text">
            <svg
              fill="#fff"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              stroke="#fff"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="7935ec95c421cee6d86eb22ecd12f847">
                  {" "}
                  <path
                    style={{ display: "inline" }}
                    d="M459.186,151.787c0.203,4.501,0.305,9.023,0.305,13.565 c0,138.542-105.461,298.285-298.274,298.285c-59.209,0-114.322-17.357-160.716-47.104c8.212,0.973,16.546,1.47,25.012,1.47 c49.121,0,94.318-16.759,130.209-44.884c-45.887-0.841-84.596-31.154-97.938-72.804c6.408,1.227,12.968,1.886,19.73,1.886 c9.55,0,18.816-1.287,27.617-3.68c-47.955-9.633-84.1-52.001-84.1-102.795c0-0.446,0-0.882,0.011-1.318 c14.133,7.847,30.294,12.562,47.488,13.109c-28.134-18.796-46.637-50.885-46.637-87.262c0-19.212,5.16-37.218,14.193-52.7 c51.707,63.426,128.941,105.156,216.072,109.536c-1.784-7.675-2.718-15.674-2.718-23.896c0-57.891,46.941-104.832,104.832-104.832 c30.173,0,57.404,12.734,76.525,33.102c23.887-4.694,46.313-13.423,66.569-25.438c-7.827,24.485-24.434,45.025-46.089,58.002 c21.209-2.535,41.426-8.171,60.222-16.505C497.448,118.542,479.666,137.004,459.186,151.787z"
                  >
                    {" "}
                  </path>{" "}
                </g>{" "}
              </g>
            </svg>
            {testimonial?.text}
          </div>
        </div>
        <div className="testimonials__slider__card__flex">
          <div>@{testimonial?.username}</div>
          <div>Twitter</div>
        </div>
      </div>
        )}
        {testimonials?.map((testimonial, index) => 
        <div className="testimonials__slider__card" key={index}>
        <div className="testimonials__slider__card__img">
          <img src={testimonial?.image} alt="" />
          <div className="testimonials__slider__card__img__text">
            <svg
              fill="#fff"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              stroke="#fff"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="7935ec95c421cee6d86eb22ecd12f847">
                  {" "}
                  <path
                    style={{ display: "inline" }}
                    d="M459.186,151.787c0.203,4.501,0.305,9.023,0.305,13.565 c0,138.542-105.461,298.285-298.274,298.285c-59.209,0-114.322-17.357-160.716-47.104c8.212,0.973,16.546,1.47,25.012,1.47 c49.121,0,94.318-16.759,130.209-44.884c-45.887-0.841-84.596-31.154-97.938-72.804c6.408,1.227,12.968,1.886,19.73,1.886 c9.55,0,18.816-1.287,27.617-3.68c-47.955-9.633-84.1-52.001-84.1-102.795c0-0.446,0-0.882,0.011-1.318 c14.133,7.847,30.294,12.562,47.488,13.109c-28.134-18.796-46.637-50.885-46.637-87.262c0-19.212,5.16-37.218,14.193-52.7 c51.707,63.426,128.941,105.156,216.072,109.536c-1.784-7.675-2.718-15.674-2.718-23.896c0-57.891,46.941-104.832,104.832-104.832 c30.173,0,57.404,12.734,76.525,33.102c23.887-4.694,46.313-13.423,66.569-25.438c-7.827,24.485-24.434,45.025-46.089,58.002 c21.209-2.535,41.426-8.171,60.222-16.505C497.448,118.542,479.666,137.004,459.186,151.787z"
                  >
                    {" "}
                  </path>{" "}
                </g>{" "}
              </g>
            </svg>
            {testimonial?.text}
          </div>
        </div>
        <div className="testimonials__slider__card__flex">
          <div>@{testimonial?.username}</div>
          <div>Twitter</div>
        </div>
      </div>
        )}
       
       
      </div>

      
    </div>
  );
}
