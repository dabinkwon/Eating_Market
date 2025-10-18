import type { ResturantItemProps } from "../types/place";

const RestaurantItem = ({ place }: ResturantItemProps) => {
  return (
    <div className="h-47 w-47 rounded-sm bg-[rgb(208,207,207)]">
      <img
        src={`${import.meta.env.VITE_API_BASE_URL}/${place.image.src}`}
        alt={place.image.alt}
      />
      <div>{place.title}</div>
    </div>
  );
};

export default RestaurantItem;
