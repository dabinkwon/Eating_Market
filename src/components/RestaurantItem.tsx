import type { ResturantItemProps } from "../types/place";

const RestaurantItem = ({ place }: ResturantItemProps) => {
  return (
    <div className="flex w-47 flex-col rounded-sm bg-[rgb(208,207,207)]">
      <img
        src={`${import.meta.env.VITE_API_BASE_URL}/${place.image.src}`}
        alt={place.image.alt}
        className="h-40 w-full rounded-t-sm object-cover"
      />
      <div className="p-1 text-center">{place.title}</div>
    </div>
  );
};

export default RestaurantItem;
