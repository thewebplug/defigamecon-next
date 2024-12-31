import Image2 from "@/public/assets/gunzilla.png";
import OptimizedImage from "./optimizedImage";
import Image from "next/image";
import { memo, useCallback } from "react";

const GameCard = memo(function GameCard({ game }) {
  // Memoize click handlers to prevent unnecessary re-renders
  const handleGetGame = useCallback(() => {
    window.open(game?.link, '_blank');
  }, [game?.link]);

  const handleView = useCallback(() => {
    window.open(game?.link, '_blank');
  }, [game?.link]);

  return (
    <div className="auction__slide__slide-inner__card">
      <div className="auction__slide__slide-inner__card__image">
        <OptimizedImage 
          src={game?.image?.url} 
          alt={game?.title || 'Game image'} 
          objectFit="cover" 
          layout="fill" 
        />
      </div>
      
      <div className="auction__slide__slide-inner__card__title-flex">
        <div>
          <div>{game?.title}</div>
          <div className="creator">
            <Image src={Image2} alt="Creator icon" />
            By {game?.creator}
          </div>
        </div>
        <button>
          <span>Available</span>
        </button>
      </div>

      <div className="auction__slide__slide-inner__card__button-group">
        <button onClick={handleGetGame}>Get game</button>
        <button onClick={handleView}>View</button>
      </div>
    </div>
  );
}, (prevProps, nextProps) => {
  // Enhanced comparison function
  return prevProps?.game?._id === nextProps?.game?._id &&
         prevProps?.game?.title === nextProps?.game?.title &&
         prevProps?.game?.image?.url === nextProps?.game?.image?.url &&
         prevProps?.game?.link === nextProps?.game?.link &&
         prevProps?.game?.creator === nextProps?.game?.creator;
});

export default GameCard;