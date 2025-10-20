import { useState } from "react";
import { useFavorites } from "../hooks/useFavorite";
import Modal from "./Modal";
import RestaurantItem from "./RestaurantItem";

const FavoriteRestaurant = () => {
  const { data, deleteFavorite } = useFavorites();
  const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null);

  const handleConfirmDelete = () => {
    if (selectedPlaceId) {
      deleteFavorite.mutate(selectedPlaceId);
      setSelectedPlaceId(null);
    }
  };

  const handleCancel = () => setSelectedPlaceId(null);

  if (!data) return null;

  return (
    <div>
      <Modal
        isOpen={!!selectedPlaceId}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancel}
      />
      <h3 className="mb-3 text-center text-2xl font-semibold">
        Saved Restaurants
      </h3>
      {data.length === 0 ? (
        <p className="w-full text-center text-[12px] text-gray-500">
          맛집을 저장해보세요!
        </p>
      ) : (
        <div className="bg-card">
          {data.map((place) => (
            <RestaurantItem
              key={place.id}
              place={place}
              onDeleteClick={() => setSelectedPlaceId(place.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteRestaurant;
