import { useEffect, useState } from "react";
import { getAllGames } from "@/app/apis";
import { useSelector } from "react-redux";
import StaticGameCard from "./statisGameCard";

export default function Explore() {
  const auth = useSelector((state) => state.auth);
  const [activeNav, setActiveNav] = useState("recom");

  const [games, setGames] = useState([]);
  const [gamesFixed, setGamesFixed] = useState([]);

  const handleGetGames = async () => {
    const response = await getAllGames(auth?.token);
    if (response?.status === 200) {
      setGames(response?.data);
      setGamesFixed(response?.data);
    }
  };

  useEffect(() => {
    handleGetGames();
  }, []);
  useEffect(() => {
    if (activeNav !== "recom") {
      setGames(
        gamesFixed.filter((game) => game?.categories.includes(activeNav))
      );
    } else {
      setGames(gamesFixed);
    }
  }, [activeNav]);

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
          className={activeNav === "action" ? "exploreMain__nav__active" : ""}
          onClick={() => setActiveNav("action")}
        >
          Action
        </div>
        <div
          className={
            activeNav === "adventure" ? "exploreMain__nav__active" : ""
          }
          onClick={() => setActiveNav("adventure")}
        >
          Adventure
        </div>
        <div
          className={
            activeNav === "multi-player" ? "exploreMain__nav__active" : ""
          }
          onClick={() => setActiveNav("multi-player")}
        >
          Multi player
        </div>
        <div
          className={
            activeNav === "single-player" ? "exploreMain__nav__active" : ""
          }
          onClick={() => setActiveNav("single-player")}
        >
          Single player
        </div>
      </div>

      <div className="exploreMain__grid">
        {games?.map((game) => (
         <StaticGameCard game={game} key={game?._id} />
        ))}
      </div>

      {/* <button className="exploreMain__button">Load more</button> */}
    </div>
  );
}
