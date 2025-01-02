import Image8 from "@/public/assets/Rectangle 60.png";
import Image12 from "@/public/assets/9999.png";
import Image13 from "@/public/assets/7878.webp";
import Header from "@/app/components/header";
import Explore from "@/app/components/explore";
import Footer from "@/app/components/footer";
import EventCard from "@/app/components/eventCard";
import Partners from "@/app/components/partners";
import GameVideos from "@/app/components/gameVideos";
import Testimonials from "@/app/components/testimonials";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { getAllEvents, getAllGames } from "./apis";
import OptimizedImage from "./components/optimizedImage";
import { getAuthToken } from "./utils/getAuth";
import GameCard from "./components/gameCard";
import TweetButton from "./components/tweetButton";
import GameSlide from "./components/gameSlide";


export async function generateMetadata() {
  return {
    title: "Home",
    description:
      "The biggest web3 gaming convention in Africa. Connect players, celebrate innovation, and redefine the gaming experience.",
  };
}

async function getEvents() {
  const events = await getAllEvents()
  return events || [];
}

async function getGames() {
  const games = await getAllGames();
  console.log('getAllGames', games);
  
  return games || [];
}


export default async function Home() {

  const [events, games] = await Promise.all([getEvents(), getGames()]);


  return (
    <>
      <main>
        <div className="nft-main">
          <Image
            className="nft-main__img"
            src={Image8}
            alt=""
            objectFit="cover"
            layout="fill"
          />
          <Header />
          <div className="nft-main__hero">
            <div className="nft-main__hero__inner">
              <div className="nft-main__hero__inner__title">
                {/* THE BIGGEST <br />WEB3 GAMING CONVENTION <br />
                  IN AFRICA */}
                AFRICA'S GAMING PORTAL
              </div>
              <div className="nft-main__hero__inner__subtitle">
                The biggest web3 gaming convention in Africa. Plan, host, and
                manage unforgettable Web3 gaming events with ease. Connect
                players, celebrate innovation, and redefine the gaming
                experience.
              </div>
              <div className="nft-main__hero__inner__button-group">
                <Link href="/events">Explore</Link>
                <Link href="/#upcoming-events">Upcoming events</Link>
              </div>
            </div>

            <div className="nft-main__hero__spot-light">
              <div className="nft-main__hero__spot-light__torch-group">
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="nft-main__hero__spot-light__torch-group__flash-light"
                >
                  <g>
                    <path
                      id="secondary"
                      d="M8.24,4 L3.12,6.12 L4,8.24 L8.24,5.41 L8.24,4Z"
                      fill="#000000"
                    />
                    <path
                      id="primary"
                      d="M21.41,15.76 L12.59,6.94 L11.78,3.29 L11.07,2.59 L8.24,2.59 L2.59,8.24 L2.59,11.07 L3.29,11.78 L6.94,12.59 L15.76,21.41 L18.59,21.41 L21.41,18.59 L21.41,15.76Z"
                      fill="#dc0909"
                    />
                  </g>
                </svg>
                <Image
                  className="nft-main__hero__spot-light__torch-group__torch"
                  src={Image13}
                  alt=""
                />
              </div>
              <Image
                className="nft-main__hero__spot-light__signs"
                src={Image12}
                alt=""
              />

              <svg
                className="nft-main__hero__spot-light__music"
                width="79"
                height="78"
                viewBox="0 0 79 78"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.3077 77.9805C60.7156 77.9805 78.0702 60.6259 78.0702 39.2179C78.0702 17.81 60.7156 0.455414 39.3077 0.455414C17.8997 0.455414 0.545151 17.81 0.545151 39.2179C0.545151 60.6259 17.8997 77.9805 39.3077 77.9805Z"
                  fill="url(#paint0_radial_220_671)"
                />
                <path
                  d="M39.3077 74.2986C58.6822 74.2986 74.3883 58.5925 74.3883 39.2179C74.3883 19.8434 58.6822 4.13733 39.3077 4.13733C19.9332 4.13733 4.22702 19.8434 4.22702 39.2179C4.22702 58.5925 19.9332 74.2986 39.3077 74.2986Z"
                  fill="url(#paint1_radial_220_671)"
                />
                <path
                  d="M50.5948 19.0219C51.8382 18.708 53.0333 19.6617 53.0333 20.9413C53.0333 29.2949 53.0333 37.6486 53.0333 46.0144C53.0333 47.6561 52.4297 49.0323 51.2225 50.1309C49.7739 51.4588 48.0235 52.0624 46.08 52.1469C43.8708 52.2314 41.879 51.664 40.201 50.1912C37.847 48.139 37.7142 44.8434 39.9234 42.6464C41.7945 40.7873 44.1243 40.2078 46.6956 40.4613C46.7077 40.4613 46.7077 40.4613 46.7198 40.4613C47.8907 40.5821 48.9168 39.6887 48.9168 38.5057V26.6392C48.8565 26.6392 48.8323 26.6271 48.8082 26.6392C43.5087 27.9067 38.2091 29.1742 32.9096 30.4297C32.6078 30.5021 32.5113 30.6228 32.5113 30.9246C32.5233 38.4454 32.5233 45.9661 32.5113 53.4868C32.5113 54.0663 32.4147 54.6698 32.2215 55.2131C31.5455 57.1083 30.0969 58.2552 28.2741 58.9071C27.5498 59.1727 26.7651 59.2813 25.9925 59.4382C25.8597 59.4623 25.7148 59.4865 25.5821 59.4865H24.8095C24.6646 59.4865 24.5197 59.4744 24.3869 59.4382C24.3386 59.4261 24.2904 59.4141 24.2421 59.4141C22.4796 59.233 20.9223 58.5932 19.5944 57.386C17.506 55.4907 17.2525 52.5211 19.0512 50.3723C20.874 48.1994 23.3246 47.5233 26.0649 47.7527C26.1253 47.7527 26.1736 47.7648 26.2339 47.7648C27.4049 47.8976 28.4431 46.9922 28.4431 45.8212V28.8604C28.4431 26.2046 30.2659 23.8989 32.8493 23.2832C32.9459 23.2591 33.0424 23.2349 33.139 23.2108C38.8007 21.8587 44.4623 20.5067 50.1119 19.1546C50.2689 19.0943 50.4379 19.0581 50.5948 19.0219Z"
                  fill="white"
                />
                <path
                  opacity="0.41"
                  d="M35.2033 10.4026C36.1207 12.5997 34.3582 15.4124 31.292 16.692C28.2258 17.9716 24.9905 17.2231 24.0731 15.0261C23.1556 12.829 24.9181 10.0163 27.9843 8.73668C31.0626 7.45707 34.2858 8.20553 35.2033 10.4026Z"
                  fill="url(#paint2_radial_220_671)"
                />
                <path
                  opacity="0.41"
                  d="M21.7674 17.6094C22.89 18.9494 22.2744 21.3155 20.4032 22.8848C18.5321 24.4542 16.0936 24.6473 14.9709 23.3073C13.8482 21.9674 14.4639 19.6013 16.335 18.032C18.2062 16.4626 20.6447 16.2695 21.7674 17.6094Z"
                  fill="url(#paint3_radial_220_671)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_220_671"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(63.53 8.21951) scale(133.498)"
                  >
                    <stop stopColor="#91191A" />
                    <stop offset="1" stopColor="#DC0909" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient
                    id="paint1_radial_220_671"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(10.8843 1.92059) scale(125.974 125.974)"
                  >
                    <stop stopColor="#91191A" />
                    <stop offset="0.1204" stopColor="#91191A" />
                    <stop offset="0.4185" stopColor="#DC0909" />
                    <stop offset="0.6751" stopColor="#DC0909" />
                    <stop offset="0.8773" stopColor="#DC0909" />
                    <stop offset="1" stopColor="#DC0909" />
                  </radialGradient>
                  <radialGradient
                    id="paint2_radial_220_671"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(28.8122 -0.448743) scale(41.5987 41.5987)"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient
                    id="paint3_radial_220_671"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(28.8123 -0.448619) scale(41.5986 41.5985)"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>

              <svg
                className="nft-main__hero__spot-light__music-link"
                width="92"
                height="28"
                viewBox="0 0 75 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M74.5 33H68.5L35.5 1H0" stroke="white" />
              </svg>

              {/* <svg
                className="nft-main__hero__spot-light__music-link"
                width="92"
                height="28"
                viewBox="0 0 92 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                
                
                <rect
                  x="0.766113"
                  y="0.549805"
                  width="90.466"
                  height="26.7873"
                  fill="url(#pattern1_220_600)"
                />
                
                
                <defs>
                  <pattern
                    id="pattern0_220_600"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_220_600"
                      transform="scale(0.25 0.5)"
                    />
                  </pattern>
                  <pattern
                    id="pattern1_220_600"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image1_220_600"
                      transform="scale(0.0131579 0.0434783)"
                    />
                  </pattern>
                  <pattern
                    id="pattern2_220_600"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image2_220_600"
                      transform="scale(0.25 0.5)"
                    />
                  </pattern>
                  <image
                    id="image0_220_600"
                    width="4"
                    height="2"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAYAAAB/qH1jAAAACXBIWXMAAAsSAAALEgHS3X78AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABhJREFUeNpiZIACxu7/jExAmokBDQAEGAAksAGSrM5v0AAAAABJRU5ErkJggg=="
                  />
                  <image
                    id="image1_220_600"
                    width="76"
                    height="23"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAXCAYAAACh3qkfAAAACXBIWXMAAAsSAAALEgHS3X78AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAkBJREFUeNrsmc1LFVEYxt8zM3cM6v9oFYi0DoKULIQKEZTwgpjCxahuunBnu6CFQV9G4cptUEhtWhQRGCQR6EIIUSuS0OpuhN4z56PnjHMxWsS5G2XgPPDwnHPnzDvMj3Nn5swIccuKSNhECBJw5BxHlESwyyShNI5tJYkpRbutmfitzW1D/1CR+N1iLMYX+7oaIkJNata2X54fT+eoxEqKNDDOi2zRzhMnqZEamcESA35jVIKsoF9B5u2iTm70Y2oakJBRUfsw9unu+SCPzHekM2UFJvbzYIB1AtOtBnBvn7and8sILNrPg2FmvQGsGbizd1nWAzAPYWa9xrXtDnxmYEVOUpCf+lfk6Yuf5LvqqrwRaHgKsHqG1nn50me+GWh4aniDz49+5fXaJt8ONDxV+8Z9l7/z9pUtfhBoeAqwBq5t8079Bz8ONDwFWIPXf7Iab/BsoOGp8V9cnWiwQQZo3tAaXMVMyzDjHgUaLfw9r+Kahmvb/UCjhRsB7p5buItOBxq+jxyb3IfntLXh8HDrL6wELgyt8dLgqpwKNFpYRmHtudB/wAt2USZogNWtDdW1phdPjqXTAZiHepfkKUAbM5ZePmtP7wVgHjr3UZ60lkYB7dV8R/owAPOQe90NaCOA9t4asWGJLPrGaDKYgdrASpPWipTSAkYqylxqJfKEM5Vv3x2DsVq77QZ1XA3UQ027a2HMhLBJWYG5191nF+UOWdGF7lHa+4Cj/rL8x/yfzIp2XOzrJpOmvY9Cuf8IMABrHCbBQlJ/JAAAAABJRU5ErkJggg=="
                  />
                  <image
                    id="image2_220_600"
                    width="4"
                    height="2"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAYAAAB/qH1jAAAACXBIWXMAAAsSAAALEgHS3X78AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABZJREFUeNpiYOr+z8iABJiAGEUAIMAAMPIBkSEgLccAAAAASUVORK5CYII="
                  />
                </defs>
              </svg> */}

              <svg
                className="nft-main__hero__spot-light__play"
                width="78"
                height="78"
                viewBox="0 0 78 78"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.7658 77.5682C60.1737 77.5682 77.5283 60.2137 77.5283 38.8057C77.5283 17.3977 60.1737 0.0431671 38.7658 0.0431671C17.3578 0.0431671 0.00325012 17.3977 0.00325012 38.8057C0.00325012 60.2137 17.3578 77.5682 38.7658 77.5682Z"
                  fill="url(#paint0_radial_220_679)"
                />
                <path
                  d="M38.7658 73.8863C58.1403 73.8863 73.8464 58.1802 73.8464 38.8057C73.8464 19.4312 58.1403 3.72504 38.7658 3.72504C19.3913 3.72504 3.68515 19.4312 3.68515 38.8057C3.68515 58.1802 19.3913 73.8863 38.7658 73.8863Z"
                  fill="url(#paint1_radial_220_679)"
                />
                <path
                  d="M33.4542 23.2814L52.7932 36.2344C54.6281 37.4657 54.6281 40.1577 52.7932 41.377L33.4542 54.33C31.402 55.7062 28.6376 54.2334 28.6376 51.7587V25.8526C28.6255 23.3779 31.3899 21.9052 33.4542 23.2814Z"
                  fill="white"
                />
                <path
                  opacity="0.41"
                  d="M34.6614 9.99032C35.5788 12.1874 33.8164 15.0001 30.7501 16.2797C27.6718 17.5593 24.4486 16.8109 23.5312 14.6138C22.6137 12.4168 24.3762 9.60404 27.4425 8.32443C30.5208 7.05689 33.756 7.79326 34.6614 9.99032Z"
                  fill="url(#paint2_radial_220_679)"
                />
                <path
                  opacity="0.41"
                  d="M21.2376 17.2093C22.3602 18.5492 21.7446 20.9153 19.8734 22.4846C17.9902 24.054 15.5638 24.2471 14.4411 22.9072C13.3184 21.5672 13.9341 19.2011 15.8052 17.6318C17.6764 16.0504 20.1149 15.8693 21.2376 17.2093Z"
                  fill="url(#paint3_radial_220_679)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_220_679"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(62.9924 7.81281) scale(133.498)"
                  >
                    <stop stopColor="#91191A" />
                    <stop offset="1" stopColor="#DC0909" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient
                    id="paint1_radial_220_679"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(10.3469 1.51385) scale(125.974 125.974)"
                  >
                    <stop stopColor="#91191A" />
                    <stop offset="0.1204" stopColor="#91191A" />
                    <stop offset="0.4185" stopColor="#DC0909" />
                    <stop offset="0.6751" stopColor="#DC0909" />
                    <stop offset="0.8773" stopColor="#DC0909" />
                    <stop offset="1" stopColor="#DC0909" />
                  </radialGradient>
                  <radialGradient
                    id="paint2_radial_220_679"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(28.2748 -0.855207) scale(41.5985 41.5984)"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient
                    id="paint3_radial_220_679"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(28.2749 -0.855347) scale(41.5987)"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>

              <svg
                className="nft-main__hero__spot-light__play-link"
                width="81"
                height="27"
                viewBox="0 0 65 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M65 30.5H43L20 0.5H0.5" stroke="white" />
              </svg>

              <svg
                className="nft-main__hero__spot-light__chain"
                width="78"
                height="78"
                viewBox="0 0 78 78"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.1408 77.9633C60.5488 77.9633 77.9034 60.6087 77.9034 39.2008C77.9034 17.7928 60.5488 0.438232 39.1408 0.438232C17.7329 0.438232 0.378281 17.7928 0.378281 39.2008C0.378281 60.6087 17.7329 77.9633 39.1408 77.9633Z"
                  fill="url(#paint0_radial_8_890)"
                />
                <path
                  d="M39.1408 74.2814C58.5153 74.2814 74.2215 58.5753 74.2215 39.2008C74.2215 19.8263 58.5153 4.12012 39.1408 4.12012C19.7663 4.12012 4.06018 19.8263 4.06018 39.2008C4.06018 58.5753 19.7663 74.2814 39.1408 74.2814Z"
                  fill="url(#paint1_radial_8_890)"
                />
                <path
                  opacity="0.41"
                  d="M35.0485 10.3855C35.9659 12.5825 34.2035 15.3953 31.1372 16.6749C28.071 17.9545 24.8357 17.206 23.9183 15.009C23.0008 12.8119 24.7633 9.99917 27.8295 8.71956C30.8958 7.45203 34.131 8.18841 35.0485 10.3855Z"
                  fill="url(#paint2_radial_8_890)"
                />
                <path
                  opacity="0.41"
                  d="M21.6126 17.6044C22.7352 18.9444 22.1196 21.3105 20.2485 22.8798C18.3653 24.4491 15.9388 24.6423 14.8162 23.3023C13.6935 21.9624 14.3091 19.5963 16.1803 18.0269C18.0514 16.4455 20.4899 16.2645 21.6126 17.6044Z"
                  fill="url(#paint3_radial_8_890)"
                />
                <path
                  d="M58.8782 26.3806L53.4459 21.0087C51.0436 18.6426 47.1444 18.6305 44.7301 20.9845L38.7062 26.8635C36.2919 29.2175 36.2798 33.0563 38.6821 35.4224L42.1226 32.1147C41.7725 31.0645 42.2071 29.8573 43.0521 29.0244L46.8909 25.2821C48.1102 24.0991 50.0538 24.1111 51.2489 25.2942L54.5082 28.5173C55.7033 29.7004 55.7034 31.6198 54.4962 32.7908L50.6573 36.533C49.8485 37.3298 48.5206 37.7523 47.4824 37.4746L44.1144 40.7823C46.5167 43.1484 50.4159 43.1604 52.8303 40.8064L58.8541 34.9395C61.2684 32.5735 61.2805 28.7467 58.8782 26.3806Z"
                  fill="white"
                />
                <path
                  d="M36.823 47.8926C37.1128 48.9187 36.6541 50.2587 35.8211 51.0675L32.2358 54.5683C31.0045 55.7634 29.0246 55.7634 27.7933 54.5562L24.4615 51.2848C23.2423 50.0776 23.2543 48.122 24.4736 46.9269L28.0589 43.426C28.9281 42.581 30.1836 42.1464 31.2821 42.5086L34.7346 39.0923C32.284 36.6779 28.3124 36.6658 25.8619 39.0681L20.0553 44.7419C17.5927 47.1442 17.5806 51.0433 20.0312 53.4577L25.5601 58.9262C27.9986 61.3406 31.9822 61.3527 34.4328 58.9504L40.2393 53.2766C42.6899 50.8743 42.702 46.9751 40.2635 44.5608L36.823 47.8926Z"
                  fill="white"
                />
                <path
                  d="M33.0446 46.3233C33.8534 47.1442 35.1933 47.1562 36.0142 46.3354L45.9372 36.4606C46.7581 35.6397 46.7702 34.3118 45.9493 33.491C45.1284 32.6701 43.8005 32.6701 42.9797 33.4789L33.0446 43.3536C32.2357 44.1745 32.2237 45.5024 33.0446 46.3233Z"
                  fill="white"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_8_890"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(63.3702 8.2103) scale(133.498)"
                  >
                    <stop stopColor="#91191A" />
                    <stop offset="1" stopColor="#DC0909" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient
                    id="paint1_radial_8_890"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(10.7245 1.91134) scale(125.974 125.974)"
                  >
                    <stop stopColor="#91191A" />
                    <stop offset="0.1204" stopColor="#91191A" />
                    <stop offset="0.4185" stopColor="#DC0909" />
                    <stop offset="0.6751" stopColor="#DC0909" />
                    <stop offset="0.8773" stopColor="#DC0909" />
                    <stop offset="1" stopColor="#DC0909" />
                  </radialGradient>
                  <radialGradient
                    id="paint2_radial_8_890"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(28.6525 -0.457779) scale(41.5985)"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient
                    id="paint3_radial_8_890"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(28.6526 -0.45776) scale(41.5987 41.5987)"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>

              <svg
                className="nft-main__hero__spot-light__chain-link"
                width="29"
                height="86"
                viewBox="0 0 29 86"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M28.5 85.5L0.5 57V0" stroke="white" />
              </svg>

              <svg
                className="nft-main__hero__spot-light__internet"
                width="78"
                height="79"
                viewBox="0 0 78 79"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.9991 78.2069C60.407 78.2069 77.7616 60.8523 77.7616 39.4444C77.7616 18.0364 60.407 0.681839 38.9991 0.681839C17.5911 0.681839 0.236526 18.0364 0.236526 39.4444C0.236526 60.8523 17.5911 78.2069 38.9991 78.2069Z"
                  fill="url(#paint0_radial_220_696)"
                />
                <path
                  d="M38.9991 74.525C58.3736 74.525 74.0797 58.8189 74.0797 39.4444C74.0797 20.0699 58.3736 4.36373 38.9991 4.36373C19.6246 4.36373 3.91845 20.0699 3.91845 39.4444C3.91845 58.8189 19.6246 74.525 38.9991 74.525Z"
                  fill="url(#paint1_radial_220_696)"
                />
                <path
                  d="M38.9993 61.8015C26.674 61.8015 16.6423 51.7698 16.6423 39.4445C16.6423 27.1192 26.674 17.0875 38.9993 17.0875C51.3246 17.0875 61.3563 27.1192 61.3563 39.4445C61.3563 51.7698 51.3246 61.8015 38.9993 61.8015ZM38.9993 19.1639C27.8208 19.1639 18.7308 28.2539 18.7308 39.4324C18.7308 50.6109 27.8208 59.701 38.9993 59.701C50.1778 59.701 59.2679 50.6109 59.2679 39.4324C59.2679 28.266 50.1778 19.1639 38.9993 19.1639Z"
                  fill="white"
                />
                <path
                  d="M38.9991 61.8013C38.4196 61.8013 37.9488 61.3305 37.9488 60.7511V18.1256C37.9488 17.5461 38.4196 17.0753 38.9991 17.0753C39.5785 17.0753 40.0493 17.5461 40.0493 18.1256V60.7632C40.0373 61.3305 39.5665 61.8013 38.9991 61.8013Z"
                  fill="white"
                />
                <path
                  d="M38.9991 61.8013C38.4196 61.8013 37.9488 61.3305 37.9488 60.7511C37.9488 60.1716 38.4196 59.7009 38.9991 59.7009C44.5038 59.7009 49.1515 50.5987 49.1515 39.8186C49.1515 29.0385 44.5038 19.9364 38.9991 19.9364C38.4196 19.9364 37.9488 19.4655 37.9488 18.8861C37.9488 18.3067 38.4196 17.8359 38.9991 17.8359C45.8679 17.8359 51.2399 27.4933 51.2399 39.8065C51.2399 52.1198 45.8559 61.8013 38.9991 61.8013Z"
                  fill="white"
                />
                <path
                  d="M38.9991 61.8013C32.1302 61.8013 26.7583 52.1439 26.7583 39.8307C26.7583 27.5174 32.1302 17.86 38.9991 17.86C39.5785 17.86 40.0493 18.3308 40.0493 18.9103C40.0493 19.4897 39.5785 19.9605 38.9991 19.9605C33.4943 19.9605 28.8467 29.0626 28.8467 39.8427C28.8467 50.6229 33.4943 59.725 38.9991 59.725C39.5785 59.725 40.0493 60.1958 40.0493 60.7752C40.0373 61.3305 39.5665 61.8013 38.9991 61.8013Z"
                  fill="white"
                />
                <path
                  d="M38.9991 30.3664C32.6131 30.3664 26.7221 28.6643 22.8229 25.7067C22.3642 25.3566 22.2796 24.7047 22.6297 24.246C22.9798 23.7873 23.6317 23.7028 24.0904 24.0528C27.5792 26.7086 33.1563 28.29 38.9991 28.29C44.8901 28.29 50.4914 26.6845 53.9681 24.0046C54.4268 23.6545 55.0787 23.739 55.4288 24.1977C55.7789 24.6564 55.6944 25.3083 55.2356 25.6584C51.3485 28.6401 45.4213 30.3664 38.9991 30.3664Z"
                  fill="white"
                />
                <path
                  d="M54.6079 55.0532C54.3906 55.0532 54.1613 54.9808 53.9681 54.8359C50.4794 52.156 44.8901 50.5504 38.9991 50.5504C33.1563 50.5504 27.5792 52.1318 24.0904 54.7876C23.6317 55.1377 22.9798 55.0411 22.6297 54.5945C22.2796 54.1357 22.3642 53.4839 22.8229 53.1338C26.7221 50.1762 32.6131 48.4741 38.9991 48.4741C45.4333 48.4741 51.3485 50.2003 55.2477 53.1942C55.7064 53.5442 55.7909 54.2082 55.4409 54.6548C55.2236 54.9204 54.9218 55.0532 54.6079 55.0532Z"
                  fill="white"
                />
                <path
                  d="M60.3058 40.4825H17.6682C17.0888 40.4825 16.618 40.0117 16.618 39.4323C16.618 38.8529 17.0888 38.382 17.6682 38.382H60.3058C60.8852 38.382 61.356 38.8529 61.356 39.4323C61.356 40.0238 60.8852 40.4825 60.3058 40.4825Z"
                  fill="white"
                />
                <path
                  opacity="0.41"
                  d="M34.8947 10.629C35.8121 12.8261 34.0496 15.6388 30.9834 16.9184C27.9051 18.198 24.6819 17.4496 23.7645 15.2525C22.847 13.0554 24.6095 10.2427 27.6757 8.96309C30.754 7.68348 33.9772 8.43193 34.8947 10.629Z"
                  fill="url(#paint2_radial_220_696)"
                />
                <path
                  opacity="0.41"
                  d="M21.4588 17.8359C22.5814 19.1758 21.9658 21.5419 20.0946 23.1112C18.2114 24.6806 15.785 24.8737 14.6623 23.5338C13.5397 22.1938 14.1553 19.8277 16.0265 18.2584C17.9097 16.689 20.3361 16.4959 21.4588 17.8359Z"
                  fill="url(#paint3_radial_220_696)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_220_696"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(63.2202 8.44521) scale(133.498 133.498)"
                  >
                    <stop stopColor="#91191A" />
                    <stop offset="1" stopColor="#DC0909" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient
                    id="paint1_radial_220_696"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(10.5745 2.14638) scale(125.974 125.974)"
                  >
                    <stop stopColor="#91191A" />
                    <stop offset="0.1204" stopColor="#91191A" />
                    <stop offset="0.4185" stopColor="#DC0909" />
                    <stop offset="0.6751" stopColor="#DC0909" />
                    <stop offset="0.8773" stopColor="#DC0909" />
                    <stop offset="1" stopColor="#DC0909" />
                  </radialGradient>
                  <radialGradient
                    id="paint2_radial_220_696"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(28.5024 -0.222943) scale(41.5987 41.5987)"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient
                    id="paint3_radial_220_696"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(28.5025 -0.222818) scale(41.5986 41.5986)"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>

              <svg
                className="nft-main__hero__spot-light__internet-link"
                width="33"
                height="72"
                viewBox="0 0 33 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 71.5L32.5 44V0" stroke="white" />
              </svg>

              <svg
                className="nft-main__hero__spot-light__gallery"
                width="78"
                height="78"
                viewBox="0 0 78 78"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.0393 77.8198C60.4473 77.8198 77.8019 60.4652 77.8019 39.0572C77.8019 17.6493 60.4473 0.294693 39.0393 0.294693C17.6314 0.294693 0.27681 17.6493 0.27681 39.0572C0.27681 60.4652 17.6314 77.8198 39.0393 77.8198Z"
                  fill="url(#paint0_radial_220_711)"
                />
                <path
                  d="M39.0394 74.1379C58.4139 74.1379 74.12 58.4317 74.12 39.0572C74.12 19.6827 58.4139 3.97659 39.0394 3.97659C19.6649 3.97659 3.95872 19.6827 3.95872 39.0572C3.95872 58.4317 19.6649 74.1379 39.0394 74.1379Z"
                  fill="url(#paint1_radial_220_711)"
                />
                <path
                  opacity="0.41"
                  d="M34.9349 10.2298C35.8524 12.4269 34.0899 15.2396 31.0237 16.5192C27.9575 17.7988 24.7222 17.0504 23.8047 14.8533C22.8873 12.6562 24.6498 9.84349 27.716 8.56388C30.7943 7.29635 34.0296 8.0448 34.9349 10.2298Z"
                  fill="url(#paint2_radial_220_711)"
                />
                <path
                  opacity="0.41"
                  d="M21.5111 17.4487C22.6338 18.7887 22.0181 21.1548 20.147 22.7241C18.2638 24.2934 15.8374 24.4866 14.7147 23.1466C13.592 21.8066 14.2077 19.4406 16.0788 17.8712C17.9499 16.3019 20.3884 16.1088 21.5111 17.4487Z"
                  fill="url(#paint3_radial_220_711)"
                />
                <path
                  d="M33.0397 35.0253C35.1931 35.0253 36.9389 33.2795 36.9389 31.1261C36.9389 28.9726 35.1931 27.2269 33.0397 27.2269C30.8862 27.2269 29.1405 28.9726 29.1405 31.1261C29.1405 33.2795 30.8862 35.0253 33.0397 35.0253Z"
                  fill="white"
                />
                <path
                  d="M12.0468 50.8755L22.175 37.9949C23.6116 36.1721 26.3398 36.0997 27.8729 37.8259L33.2449 43.898L43.9767 31.7538C45.4615 30.0758 48.0932 30.0879 49.566 31.79L66.044 50.8755H12.0468Z"
                  fill="white"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_220_711"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(63.2664 8.0571) scale(133.498)"
                  >
                    <stop stopColor="#91191A" />
                    <stop offset="1" stopColor="#DC0909" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient
                    id="paint1_radial_220_711"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(10.6207 1.75816) scale(125.974)"
                  >
                    <stop stopColor="#91191A" />
                    <stop offset="0.1204" stopColor="#91191A" />
                    <stop offset="0.4185" stopColor="#DC0909" />
                    <stop offset="0.6751" stopColor="#DC0909" />
                    <stop offset="0.8773" stopColor="#DC0909" />
                    <stop offset="1" stopColor="#DC0909" />
                  </radialGradient>
                  <radialGradient
                    id="paint2_radial_220_711"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(28.5486 -0.611162) scale(41.5987 41.5987)"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient
                    id="paint3_radial_220_711"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(28.5487 -0.611026) scale(41.5986 41.5985)"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
              <svg
                className="nft-main__hero__spot-light__gallery-link"
                width="92"
                height="28"
                viewBox="0 0 70 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.5 31H16L46 1H69.5" stroke="white" />
              </svg>

              <svg
                className="nft-main__hero__spot-light__smiley"
                width="79"
                height="78"
                viewBox="0 0 79 78"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.4815 77.7811C60.8895 77.7811 78.2441 60.4265 78.2441 39.0186C78.2441 17.6106 60.8895 0.256042 39.4815 0.256042C18.0736 0.256042 0.718979 17.6106 0.718979 39.0186C0.718979 60.4265 18.0736 77.7811 39.4815 77.7811Z"
                  fill="url(#paint0_radial_220_720)"
                />
                <path
                  d="M39.4815 74.0992C58.856 74.0992 74.5622 58.3931 74.5622 39.0186C74.5622 19.6441 58.856 3.93793 39.4815 3.93793C20.107 3.93793 4.40084 19.6441 4.40084 39.0186C4.40084 58.3931 20.107 74.0992 39.4815 74.0992Z"
                  fill="url(#paint1_radial_220_720)"
                />
                <path
                  d="M56.6838 36.8336V31.4375H57.8789C56.6476 28.4557 54.7161 25.8362 52.2776 23.796V25.1481H46.8815V20.5608C44.5879 19.6433 42.1011 19.1243 39.4815 19.1243C36.5964 19.1243 33.8681 19.752 31.3934 20.8505V24.5204H25.9973V24.4238C22.0619 28.0574 19.5872 33.2482 19.5872 39.0186C19.5872 40.938 19.8769 42.785 20.3839 44.5475H22.2913V48.9899C23.8727 51.706 26.0697 54.0118 28.7014 55.7139V54.1687H34.0975V58.1524C35.8117 58.6352 37.6224 58.9129 39.4936 58.9129C44.3706 58.9129 48.8251 57.1504 52.2897 54.2411V50.9455H55.3921C57.891 47.6137 59.4 43.4972 59.4 39.0065C59.4 38.2701 59.3517 37.5337 59.2793 36.8215H56.6838V36.8336ZM43.6946 30.2786H49.0907V35.6747H43.6946V30.2786ZM29.8844 30.2786H35.2805V35.6747H29.8844V30.2786ZM52.2776 45.7788H47.5817V49.9436H31.3934V45.7788H26.6975V40.3827H32.0936V44.5475H46.8815V40.3827H52.2776V45.7788Z"
                  fill="white"
                />
                <path
                  opacity="0.41"
                  d="M35.3892 10.2032C36.3066 12.4003 34.5442 15.213 31.4779 16.4926C28.3996 17.7722 25.1764 17.0238 24.259 14.8267C23.3415 12.6297 25.104 9.81692 28.1702 8.53731C31.2485 7.2577 34.4717 8.00615 35.3892 10.2032Z"
                  fill="url(#paint2_radial_220_720)"
                />
                <path
                  opacity="0.41"
                  d="M21.9533 17.4221C23.0759 18.7621 22.4603 21.1282 20.5891 22.6975C18.7059 24.2669 16.2795 24.46 15.1568 23.1201C14.0341 21.7801 14.6498 19.414 16.5209 17.8447C18.3921 16.2633 20.8306 16.0701 21.9533 17.4221Z"
                  fill="url(#paint3_radial_220_720)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_220_720"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(63.7124 8.02183) scale(133.498 133.498)"
                  >
                    <stop stopColor="#91191A" />
                    <stop offset="1" stopColor="#DC0909" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient
                    id="paint1_radial_220_720"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(11.0666 1.72299) scale(125.974 125.974)"
                  >
                    <stop stopColor="#91191A" />
                    <stop offset="0.1204" stopColor="#91191A" />
                    <stop offset="0.4185" stopColor="#DC0909" />
                    <stop offset="0.6751" stopColor="#DC0909" />
                    <stop offset="0.8773" stopColor="#DC0909" />
                    <stop offset="1" stopColor="#DC0909" />
                  </radialGradient>
                  <radialGradient
                    id="paint2_radial_220_720"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(28.9946 -0.646321) scale(41.5987 41.5987)"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient
                    id="paint3_radial_220_720"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(28.9947 -0.646224) scale(41.5986 41.5986)"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>

              <svg
                className="nft-main__hero__spot-light__smiley-link"
                width="92"
                height="28"
                viewBox="0 0 65 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.5 33H8L40 0.5H64.5" stroke="white" />
              </svg>

              <div className="nft-main__hero__spot-light__coin">
                <svg
                  width="204"
                  height="198"
                  viewBox="0 0 204 198"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M77.8848 1.9022C128.864 -7.22408 183.272 23.5469 199.387 70.639C215.515 117.719 187.243 163.302 136.264 172.428C85.2848 181.555 30.8772 150.784 14.7613 103.692C-1.35451 56.5995 26.9056 11.0285 77.8848 1.9022Z"
                    fill="#FFC03A"
                  />
                  <path
                    d="M77.8848 1.9022C128.864 -7.22408 183.272 23.5469 199.387 70.639C215.515 117.719 187.243 163.302 136.264 172.428C85.2848 181.555 30.8772 150.784 14.7613 103.692C-1.35451 56.5995 26.9056 11.0285 77.8848 1.9022Z"
                    fill="url(#paint0_radial_8_836)"
                  />
                  <path
                    d="M118.072 159.632C78.1262 159.632 40.4139 134.149 28.3904 99.0318C22.1976 80.9362 23.7186 62.575 32.7 47.3162C42.3213 30.959 59.2821 19.865 80.4319 16.0744C85.5383 15.157 90.8137 14.6982 96.1011 14.6982C136.047 14.6982 173.759 40.1818 185.782 75.2987C191.975 93.3943 190.454 111.755 181.473 127.014C171.852 143.372 154.891 154.466 133.741 158.256C128.635 159.161 123.359 159.632 118.072 159.632Z"
                    fill="#FFC03A"
                  />
                  <path
                    d="M118.072 159.632C78.1262 159.632 40.4139 134.149 28.3904 99.0318C22.1976 80.9362 23.7186 62.575 32.7 47.3162C42.3213 30.959 59.2821 19.865 80.4319 16.0744C85.5383 15.157 90.8137 14.6982 96.1011 14.6982C136.047 14.6982 173.759 40.1818 185.782 75.2987C191.975 93.3943 190.454 111.755 181.473 127.014C171.852 143.372 154.891 154.466 133.741 158.256C128.635 159.161 123.359 159.632 118.072 159.632Z"
                    fill="url(#paint1_radial_8_836)"
                  />
                  <g opacity="0.36">
                    <path
                      d="M54.1516 135.923L74.3478 115.727C101.364 88.7105 128.369 61.7059 155.386 34.6892C146.356 27.9049 136.023 22.5812 124.989 19.1528C94.4956 49.6462 63.9902 80.1516 33.4968 110.645C38.6153 120.17 45.7014 128.729 54.1516 135.923Z"
                      fill="url(#paint2_radial_8_836)"
                    />
                    <path
                      d="M115.271 143.722C138.606 120.471 161.965 97.2212 185.275 73.9347C182.39 66.0277 178.214 58.6277 172.998 51.9158L75.2532 149.661C83.3171 153.56 91.9605 156.421 100.906 158.063C105.686 153.283 110.479 148.49 115.271 143.722Z"
                      fill="url(#paint3_radial_8_836)"
                    />
                  </g>
                  <path
                    d="M185.782 75.2987C173.759 40.1818 136.047 14.6982 96.1011 14.6982C90.8136 14.6982 85.5383 15.157 80.4319 16.0744C63.3141 19.1407 48.9487 26.9994 38.9894 38.5521C48.1036 31.1521 59.5235 26.0457 72.549 23.7159C77.6554 22.7984 82.9308 22.3397 88.2182 22.3397C128.164 22.3397 165.876 47.8232 177.9 82.9401C184.092 101.036 182.571 119.397 173.59 134.656C171.755 137.77 169.655 140.704 167.301 143.42C172.986 138.808 177.767 133.304 181.473 127.026C190.442 111.768 191.975 93.3943 185.782 75.2987Z"
                    fill="#A1683C"
                  />
                  <mask
                    id="mask0_8_836"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="48"
                    width="199"
                    height="150"
                  >
                    <path
                      d="M198.023 126.121L188.161 149.106C178.201 172.332 156.17 190.077 126.413 195.413C75.4342 204.539 21.0266 173.768 4.91074 126.676C-1.80118 107.084 -0.823376 87.7446 6.27484 71.1942L16.1375 48.2095C9.0393 64.7599 8.06148 84.099 14.7734 103.691C30.8892 150.771 85.2968 181.555 136.276 172.428C166.045 167.093 188.064 149.347 198.023 126.121Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_8_836)">
                    <path
                      d="M147.648 169.676C144.002 170.798 140.199 171.716 136.276 172.416C85.2968 181.542 30.8892 150.771 14.7734 103.679C8.06146 84.0867 9.03928 64.7477 16.1375 48.1973L6.27483 71.182C-0.823391 87.7324 -1.80119 107.071 4.91073 126.664C21.0266 173.744 75.4342 204.527 126.413 195.401C130.337 194.701 134.139 193.783 137.785 192.66C161.784 185.297 179.517 169.253 188.161 149.105L198.023 126.121C189.38 146.281 171.646 162.312 147.648 169.676Z"
                      fill="#A1683C"
                    />
                  </g>
                  <mask
                    id="mask1_8_836"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="48"
                    width="199"
                    height="150"
                  >
                    <mask
                      id="mask2_8_836"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="48"
                      width="199"
                      height="150"
                    >
                      <path
                        d="M198.023 126.121L188.161 149.106C178.201 172.332 156.17 190.077 126.413 195.413C75.4342 204.539 21.0266 173.768 4.91074 126.676C-1.80118 107.084 -0.823376 87.7446 6.27484 71.1942L16.1375 48.2095C9.0393 64.7599 8.06148 84.099 14.7734 103.691C30.8892 150.771 85.2968 181.555 136.276 172.428C166.045 167.093 188.064 149.347 198.023 126.121Z"
                        fill="white"
                      />
                    </mask>
                    <g mask="url(#mask2_8_836)">
                      <path
                        d="M147.648 169.676C144.002 170.798 140.199 171.716 136.276 172.416C85.2968 181.542 30.8892 150.771 14.7734 103.679C8.06146 84.0867 9.03928 64.7477 16.1375 48.1973L6.27483 71.182C-0.823391 87.7324 -1.80119 107.071 4.91073 126.664C21.0266 173.744 75.4342 204.527 126.413 195.401C130.337 194.701 134.139 193.783 137.785 192.66C161.784 185.297 179.517 169.253 188.161 149.105L198.023 126.121C189.38 146.281 171.646 162.312 147.648 169.676Z"
                        fill="white"
                      />
                    </g>
                  </mask>
                  <g mask="url(#mask1_8_836)">
                    <path
                      opacity="0.32"
                      d="M24.8051 54.9456L-10.1428 122.608"
                      stroke="#FFC03A"
                      strokeWidth="3"
                      strokeMiterlimit="10"
                    />
                    <path
                      opacity="0.32"
                      d="M34.2331 83.7126L-0.714737 151.375"
                      stroke="#FFC03A"
                      strokeWidth="3"
                      strokeMiterlimit="10"
                    />
                    <path
                      opacity="0.32"
                      d="M43.6612 112.468L8.70129 180.13"
                      stroke="#FFC03A"
                      strokeWidth="3"
                      strokeMiterlimit="10"
                    />
                    <path
                      opacity="0.32"
                      d="M53.0772 141.235L18.1293 208.897"
                      stroke="#FFC03A"
                      strokeWidth="3"
                      strokeMiterlimit="10"
                    />
                    <path
                      opacity="0.32"
                      d="M75.0358 146.305L40.088 213.967"
                      stroke="#FFC03A"
                      strokeWidth="3"
                      strokeMiterlimit="10"
                    />
                    <path
                      opacity="0.32"
                      d="M97.0065 151.375L62.0465 219.025"
                      stroke="#FFC03A"
                      strokeWidth="3"
                      strokeMiterlimit="10"
                    />
                    <path
                      opacity="0.32"
                      d="M118.965 156.433L84.0172 224.096"
                      stroke="#FFC03A"
                      strokeWidth="3"
                      strokeMiterlimit="10"
                    />
                    <path
                      opacity="0.32"
                      d="M140.924 161.503L105.976 229.166"
                      stroke="#FFC03A"
                      strokeWidth="3"
                      strokeMiterlimit="10"
                    />
                    <path
                      opacity="0.32"
                      d="M170.62 151.375L135.672 219.025"
                      stroke="#FFC03A"
                      strokeWidth="3"
                      strokeMiterlimit="10"
                    />
                    <path
                      opacity="0.32"
                      d="M75.0358 146.305L40.088 213.967"
                      stroke="#FFC03A"
                      strokeWidth="3"
                      strokeMiterlimit="10"
                    />
                  </g>
                  <path
                    opacity="0.29"
                    d="M147.648 169.676C144.002 170.799 140.199 171.716 136.276 172.416C85.2968 181.543 30.8892 150.772 14.7734 103.679C8.06148 84.087 9.0393 64.7479 16.1375 48.1975L6.27484 71.1822C-0.823376 87.7327 -1.80118 107.072 4.91074 126.664C21.0266 173.744 75.4342 204.527 126.413 195.401C130.337 194.701 134.139 193.783 137.785 192.661C161.784 185.297 179.517 169.253 188.161 149.106L198.023 126.121C189.38 146.281 171.646 162.312 147.648 169.676Z"
                    fill="url(#paint4_radial_8_836)"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_8_836"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(115.222 246.117) scale(236.1 236.1)"
                    >
                      <stop stopColor="#F9BE8F" stopOpacity="0.8189" />
                      <stop
                        offset="0.4563"
                        stopColor="#EB865A"
                        stopOpacity="0.4622"
                      />
                      <stop
                        offset="0.8116"
                        stopColor="#E26237"
                        stopOpacity="0.1845"
                      />
                      <stop
                        offset="1"
                        stopColor="#DE542A"
                        stopOpacity="0.0373"
                      />
                    </radialGradient>
                    <radialGradient
                      id="paint1_radial_8_836"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(100.857 167.317) scale(123.28 123.28)"
                    >
                      <stop stopColor="#F97A42" stopOpacity="0.8189" />
                      <stop
                        offset="0.4224"
                        stopColor="#EC6F36"
                        stopOpacity="0.4887"
                      />
                      <stop
                        offset="1"
                        stopColor="#DE642A"
                        stopOpacity="0.0373"
                      />
                    </radialGradient>
                    <radialGradient
                      id="paint2_radial_8_836"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(184.02 43.2044) scale(155.583 155.583)"
                    >
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient
                      id="paint3_radial_8_836"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(184.02 43.2044) scale(155.583 155.583)"
                    >
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient
                      id="paint4_radial_8_836"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(145.561 236.904) scale(228.256 228.256)"
                    >
                      <stop stopColor="#FFE6A7" />
                      <stop
                        offset="0.1574"
                        stopColor="#F9BE8F"
                        stopOpacity="0.8189"
                      />
                      <stop
                        offset="0.3434"
                        stopColor="#F2977E"
                        stopOpacity="0.6463"
                      />
                      <stop
                        offset="0.6515"
                        stopColor="#E75D64"
                        stopOpacity="0.3606"
                      />
                      <stop
                        offset="0.8793"
                        stopColor="#E13854"
                        stopOpacity="0.1493"
                      />
                      <stop
                        offset="1"
                        stopColor="#DE2A4E"
                        stopOpacity="0.0373"
                      />
                    </radialGradient>
                  </defs>
                </svg>
                <svg
                  className="nft-main__hero__spot-light__coin__symbol"
                  width="102"
                  height="101"
                  viewBox="0 0 102 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32.8461 13.5415L45.9469 9.70013L68.491 86.5859L55.3903 90.4273L32.8461 13.5415Z"
                    fill="#A1683C"
                  />
                  <path
                    d="M88.0921 32.1325L91.8494 44.9468L13.245 67.9949L9.48767 55.1806L88.0921 32.1325Z"
                    fill="#A1683C"
                  />
                  <path
                    d="M61.8677 17.4983L77.6799 71.4252L39.4694 82.6291L23.6572 28.7022L61.8677 17.4983Z"
                    fill="#A1683C"
                  />
                  <path
                    d="M83.7142 60.6684L28.5819 76.834L17.6229 39.459L72.7552 23.2934L83.7142 60.6684Z"
                    fill="#A1683C"
                  />
                </svg>
              </div>
            </div>

            <div className="nft-main__hero__arrow">
              <svg
                width="106"
                height="106"
                viewBox="0 0 106 106"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_23_2331)">
                  <rect
                    x="15"
                    y="49.7117"
                    width="53.5103"
                    height="53.5103"
                    transform="rotate(-44.8098 15 49.7117)"
                    fill="#dc0909"
                  />
                </g>
                {/* <defs>
                    <filter
                      id="filter0_d_23_2331"
                      x="0"
                      y="0"
                      width="105.675"
                      height="105.675"
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
                      <feOffset dy="3" />
                      <feGaussianBlur stdDeviation="7.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.306167 0 0 0 0 0.245833 0 0 0 0 1 0 0 0 1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_23_2331"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_23_2331"
                        result="shape"
                      />
                    </filter>
                  </defs> */}
              </svg>

              <svg
                width="30"
                height="28"
                viewBox="0 0 30 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.2121 0.71167H18.7879V15.874L25.4167 9.97752L30 14.0545L15 27.3973L0 14.0545L4.58333 9.97752L11.2121 15.874V0.71167Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="collection" id="upcoming-events">
          <div className="collection__group">
            <h2>Upcoming Events</h2>
            <Link href="/events">View more</Link>
          </div>

          <div className="collection__grid">
            {events?.map((event) => (
              <EventCard event={event} key={event?._id} />
            ))}
          </div>
        </div>

        <GameCard />
<GameSlide games={games} />
        <GameVideos />

        <Partners />

        <div className="collection" id="past-events">
          <div className="collection__group">
            <h2>Past Events</h2>
            <Link href="/events">View more</Link>
          </div>

          <div className="collection__grid">
            {events?.map((event) => (
              <EventCard event={event} past={true} key={event?._id} />
            ))}
          </div>
        </div>

        <Testimonials />

        <div className="explore">
          <div className="explore__card1">
            <div className="explore__card1__title">
              EXPLORE OUR <br /> PAST AND <br /> CURRENT EVENTS
            </div>
            <div className="explore__card1__subtitle">
              We're all about gaming, exploring, Web3 and community development
              in africa
            </div>
            <TweetButton />
          </div>
          <div className="explore__card2">
            <OptimizedImage
              src={
                "https://res.cloudinary.com/thewebplug/image/upload/v1735608843/NFT_2_savixp.jpg"
              }
              alt=""
              objectFit="cover"
              layout="fill"
            />
          </div>
        </div>

        <Explore />
      </main>

      <Footer />
    </>
  );
}
