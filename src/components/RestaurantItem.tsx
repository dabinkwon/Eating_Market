import type { ResturantItemProps } from "../types/place";

const RestaurantItem = ({ place }: ResturantItemProps) => {
  return (
    <div className=" w-47 flex flex-col rounded-sm bg-[rgb(208,207,207)]">
      <img
        src={`${import.meta.env.VITE_API_BASE_URL}/${place.image.src}`}
        alt={place.image.alt}
        className="w-full h-40 rounded-t-sm object-cover"
      />
      <div className="text-center p-1 ">{place.title}</div>
    </div>
  );
};

export default RestaurantItem;
