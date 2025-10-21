import { useDeleteModal } from "../hooks/useDeleteModal";
import { useFavorites } from "../hooks/useFavorite";
import Modal from "./Modal";
import RestaurantItem from "./RestaurantItem";

const FavoriteRestaurant = () => {
  const { data, deleteFavorite } = useFavorites();
  const { selectedPlaceId, closeDeleteModal } = useDeleteModal();

  const handleConfirmDelete = () => {
    if (selectedPlaceId) {
      deleteFavorite.mutate(selectedPlaceId);
      closeDeleteModal();
    }
  };

  if (!data) return null;

  return (
    <div>
      <Modal
        isOpen={!!selectedPlaceId}
        onConfirm={handleConfirmDelete}
        onCancel={closeDeleteModal}
      />
      <h3 className="mb-3 text-center text-2xl font-semibold dark:text-white">
        Saved Restaurants
      </h3>
      {data.length === 0 ? (
        <p className="w-full text-center text-[12px] text-gray-500">
          맛집을 저장해보세요!
        </p>
      ) : (
        <div className="bg-card">
          {data.map((place) => (
            <RestaurantItem key={place.id} place={place} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteRestaurant;
