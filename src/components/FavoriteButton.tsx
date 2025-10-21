import { IoHeartCircle } from "react-icons/io5";
import { IoHeartCircleOutline } from "react-icons/io5";
import { useFavorites } from "../hooks/useFavorite";
import type { ResturantItemProps } from "../types/place";
import { useDeleteModal } from "../hooks/useDeleteModal";

const FavoriteButton = ({ place }: ResturantItemProps) => {
  const { addFavorite, isFavorite } = useFavorites();
  const isCurrentlyFavorite = isFavorite(place.id);
  const { openDeleteModal } = useDeleteModal();

  const handleClick = () => {
    if (isCurrentlyFavorite) {
      openDeleteModal(place.id);
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
