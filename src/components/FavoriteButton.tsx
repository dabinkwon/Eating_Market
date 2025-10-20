import { IoHeartCircle } from "react-icons/io5";
import { IoHeartCircleOutline } from "react-icons/io5";
import { useFavorites } from "../hooks/useFavorite";
import type { Place } from "../types/place";

interface FavoriteButtonProps {
  place: Place;
}

const FavoriteButton = ({ place }: FavoriteButtonProps) => {
  const { addFavorite, isFavorite, deleteFavorite } = useFavorites();

  const isCurrentlyFavorite = isFavorite(place.id);

  const handleClick = () => {
    if (isCurrentlyFavorite) {
      deleteFavorite.mutate(place.id);
    } else {
      addFavorite.mutate(place);
    }
  };

  return (
    <div className="mx-auto transform cursor-pointer p-1 transition duration-700 ease-in-out hover:scale-150">
      {isCurrentlyFavorite ? (
        <IoHeartCircle
          onClick={handleClick}
          className="text-2xl text-red-600"
        />
      ) : (
        <IoHeartCircleOutline onClick={handleClick} className="text-2xl" />
      )}
    </div>
  );
};

export default FavoriteButton;
