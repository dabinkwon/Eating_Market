import { useFavorites } from "../hooks/useFavorite";
import RestaurantItem from "./RestaurantItem";

const FavoriteRestaurant = () => {
  const { data } = useFavorites();

  if (!data) return null;

  return (
    <div>
      <h3 className="mb-3 text-center text-2xl font-semibold">
        Saved Restaurants
      </h3>
      {data.length === 0 ? (
        <h4 className="w-full text-center text-[12px] text-gray-500">
          맛집을 저장해보세요!
        </h4>
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
