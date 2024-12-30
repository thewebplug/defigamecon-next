import Image2 from "@/public/assets/gunzilla.png";
import { useEffect, useState } from "react";
import { getAllGames } from "@/app/apis";
import { useSelector } from "react-redux";
import moment from "moment/moment";

export default function Explore() {
  const auth = useSelector((state) => state.auth);
    const [activeNav, setActiveNav] = useState("recom");

    const [games, setGames] = useState([])
    const [gamesFixed, setGamesFixed] = useState([])

    const handleGetGames = async () => {
        const response = await getAllGames(auth?.token);
        console.log('getAllGames', response);
        if(response?.status === 200) {
          setGames(response?.data);
          setGamesFixed(response?.data);
        }
    }


    useEffect(() => {
        handleGetGames();
    }, [])
    useEffect(() => {
        if(activeNav !== "recom") {
          setGames(gamesFixed.filter((game) => game?.categories.includes(activeNav)));
        }else {
          setGames(gamesFixed);
        }
    }, [activeNav])



    return (
        <div className="exploreMain">
        <div className="exploreMain__title">Explore</div>
        <div className="exploreMain__nav">
          <div
            className={activeNav === "recom" ? "exploreMain__nav__active" : ""}
            onClick={() => setActiveNav("recom")}
          >
            Recommendations
          </div>
          <div
            className={
              activeNav === "action" ? "exploreMain__nav__active" : ""
            }
            onClick={() => setActiveNav("action")}
          >
            Action
          </div>
          <div
            className={activeNav === "adventure" ? "exploreMain__nav__active": ""}
            onClick={() => setActiveNav("adventure")}
          >
            Adventure
          </div>
          <div
            className={activeNav === "multi-player" ? "exploreMain__nav__active" : ""}
            onClick={() => setActiveNav("multi-player")}
          >
            Multi player
          </div>
          <div
            className={activeNav === "single-player" ? "exploreMain__nav__active": ""}
            onClick={() => setActiveNav("single-player")}
          >
            Single player
          </div>
        </div>

        <div className="exploreMain__grid">
       
          {games?.map((game) =>
          <div className="exploreMain__grid__card" onClick={() => window.open(game?.link, '_blank')} key={game?._id}>
          <img src={game?.image?.url} alt="" />
          <div className="exploreMain__grid__card__title">
            {game?.title}
          </div>
          <div className="exploreMain__grid__card__subtitle-group">
            <div>
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.5 8.25C1.5 4.52208 4.52208 1.5 8.25 1.5C11.9779 1.5 15 4.52208 15 8.25C15 11.9779 11.9779 15 8.25 15C4.52208 15 1.5 11.9779 1.5 8.25ZM8.25 0C3.69365 0 0 3.69365 0 8.25C0 12.8063 3.69365 16.5 8.25 16.5C12.8063 16.5 16.5 12.8063 16.5 8.25C16.5 3.69365 12.8063 0 8.25 0ZM9 3.75C9 3.33579 8.66421 3 8.25 3C7.83579 3 7.5 3.33579 7.5 3.75V8.25C7.5 8.53408 7.6605 8.79378 7.91459 8.92082L10.9146 10.4208C11.2851 10.6061 11.7356 10.4559 11.9208 10.0854C12.1061 9.71493 11.9559 9.26442 11.5854 9.07918L9 7.78647V3.75Z"
                  fill="white"
                  fillOpacity="0.5"
                />
              </svg>
              {moment(game?.createdAt).fromNow()}
            </div>

            <div>
              {/* 1 of 2 */}
              </div>
          </div>

          {/* <div className="exploreMain__grid__card__subsubtitle">
            Price: <span>0.5 ETH</span>
          </div>
          <div className="exploreMain__grid__card__subsubtitle">
            Highest bid: <span>1.2 ETH</span>
          </div> */}

          <div className="exploreMain__grid__card__divider"></div>
          <div className="exploreMain__grid__card__subsubtitle-group">
            <div>
              {" "}
              <img src={Image2} alt="" />
              By {game?.creator}
            </div>
            <div>
              {/* <svg
                width="12"
                height="10"
                viewBox="0 0 12 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.0747 0.884073C10.7815 0.603796 10.4333 0.38146 10.0502 0.229768C9.66699 0.0780762 9.25629 0 8.84153 0C8.42677 0 8.01606 0.0780762 7.63289 0.229768C7.24972 0.38146 6.90158 0.603796 6.60837 0.884073L5.99985 1.46547L5.39132 0.884073C4.79905 0.318198 3.99576 0.000293312 3.15816 0.000293318C2.32057 0.000293324 1.51728 0.318198 0.925005 0.884073C0.332734 1.44995 6.24059e-09 2.21744 0 3.0177C-6.24059e-09 3.81797 0.332734 4.58546 0.925005 5.15134L1.53353 5.73274L5.99985 10L10.4662 5.73274L11.0747 5.15134C11.368 4.87119 11.6007 4.53857 11.7595 4.17247C11.9183 3.80638 12 3.41398 12 3.0177C12 2.62143 11.9183 2.22903 11.7595 1.86293C11.6007 1.49684 11.368 1.16422 11.0747 0.884073Z"
                  fill="#B60000"
                />
              </svg>
              11K */}
            </div>
          </div>
        </div>
          )}
          

         
        </div>

        {/* <button className="exploreMain__button">Load more</button> */}
      </div>
    )
}