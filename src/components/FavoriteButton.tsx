import { IoHeartCircle } from "react-icons/io5";
import { IoHeartCircleOutline } from "react-icons/io5";
import { useFavorites } from "../hooks/useFavorite";
import type { ResturantItemProps } from "../types/place";

const FavoriteButton = ({ place, onDeleteClick }: ResturantItemProps) => {
  const { addFavorite, isFavorite } = useFavorites();
  const isCurrentlyFavorite = isFavorite(place.id);

  const handleClick = () => {
    if (isCurrentlyFavorite && onDeleteClick) {
      onDeleteClick();
    } else {
      addFavorite.mutate(place);
    }
  };

  return (
    <div className="mx-auto cursor-pointer p-1 transition-transform duration-700 ease-in-out hover:scale-150">
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
