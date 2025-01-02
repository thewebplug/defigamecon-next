"use client"

import { useEffect } from "react";
import GameCard from "./gameCard";

export default function GameSlide({games}) {
    function assignPositions() {
        const list = document.querySelectorAll(
          ".auction__slide__slide-inner__card"
        );
    
        // console.log('listhere', list, list?.length);
        
        const middleIndex = Math.floor(list.length / 2);
    
        list[middleIndex - 2].className = "auction__slide__slide-inner__card";
        list[middleIndex - 2].classList.add(
          "auction__slide__slide-inner__first-left-visible"
        );
    
        list[middleIndex - 1].className = "auction__slide__slide-inner__card";
        list[middleIndex - 1].classList.add(
          "auction__slide__slide-inner__second-left-visible"
        );
    
        list[middleIndex].className = "auction__slide__slide-inner__card";
        list[middleIndex].classList.add("auction__slide__slide-inner__middle-item");
    
        list[middleIndex + 2].className = "auction__slide__slide-inner__card";
        list[middleIndex + 2].classList.add(
          "auction__slide__slide-inner__first-right-visible"
        );
    
        list[middleIndex + 1].className = "auction__slide__slide-inner__card";
        list[middleIndex + 1].classList.add(
          "auction__slide__slide-inner__second-right-visible"
        );
    
        const slide = document.querySelector(".auction__slide__slide-inner");
        // console.log("slide after", slide);
      }
    
      useEffect(() => {
        if(games?.length > 0) {
          assignPositions();
        }
      }, [games]);

      const slideNext = () => {
        const list = document.querySelectorAll(
          ".auction__slide__slide-inner__card"
        );
        const array = Array.from(list);
    
        // console.log("array", array);
        const lastItem = array.pop();
        array.unshift(lastItem);
    
        const slide = document.querySelector(".auction__slide__slide-inner");
        // console.log("slide", slide);
        slide.innerHTML = "";
    
        array.forEach((item) => {
          slide.appendChild(item);
        });
    
        setTimeout(() => {
          assignPositions();
        }, 0);
      };
      const slidePrev = () => {
        const list = document.querySelectorAll(
          ".auction__slide__slide-inner__card"
        );
        const array = Array.from(list);
    
        // console.log("array", array);
        const firstItem = array.shift();
        // console.log("firstItem", firstItem);
        array.push(firstItem);
    
        const slide = document.querySelector(".auction__slide__slide-inner");
        // console.log("slide", slide);
        slide.innerHTML = "";
    
        array.forEach((item) => {
          slide.appendChild(item);
        });
    
        setTimeout(() => {
          assignPositions();
        }, 0);
      };
    return (
        <div className="auction" id="games">
        <div className="auction__title">
          <div>Games</div>
          <svg
            width="88"
            height="92"
            viewBox="0 0 88 92"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_204_1430)">
              <path
                d="M39.4444 15L15 43.8H37L34.5556 63L59 34.2H37L39.4444 15Z"
                stroke="#E1943F"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                shapeRendering="crispEdges"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_204_1430"
                x="0.499977"
                y="0.499939"
                width="87"
                height="91.0001"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="7" dy="7" />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.780392 0 0 0 0 0 0 0 0 0.55 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_204_1430"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_204_1430"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="auction__slide">
          <svg
            width="43"
            height="52"
            viewBox="0 0 43 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={slidePrev}
          >
            <path
              d="M16.4545 5C7.81066 11.2512 -4.29076 28.4028 16.4545 47"
              stroke="#710CF6"
              strokeWidth="0.5"
            />
            <path
              d="M37.5528 12.856L33.5381 8.81824L16.4545 26.0001L33.5381 43.1819L37.5528 39.1441L24.5123 26.0001L37.5528 12.856Z"
              fill="#710CF6"
            />
          </svg>
          <div className="auction__slide__slide-inner">
            
            
            {games?.map((game, index) => 
             <GameCard game={game} key={index} />

            )
            }
            {games?.map((game, index) => 
             <GameCard game={game} key={index} />

            )
            }
            
           
            
         
            
           
           
            
          </div>
          <svg
            width="43"
            height="52"
            viewBox="0 0 43 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={slideNext}
          >
            <path
              d="M26.2801 47C34.924 40.7488 47.0254 23.5972 26.2801 5"
              stroke="#710CF6"
              strokeWidth="0.5"
            />
            <path
              d="M5.18186 39.144L9.1965 43.1818L26.2801 25.9999L9.19651 8.81813L5.18186 12.8559L18.2223 25.9999L5.18186 39.144Z"
              fill="#710CF6"
            />
          </svg>
        </div>
      </div>
    )
}