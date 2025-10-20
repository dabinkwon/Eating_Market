import { usePlaces } from "../hooks/usePlaces";
import Loading from "./Loading";
import RestaurantItem from "./RestaurantItem";
import { useSortedPlaces } from "../hooks/useSortedPlaces";
import { useState } from "react";

const RestaurantList = () => {
  const [isClick, setIsClick] = useState(false);
  const { data, isLoading, error } = usePlaces();
  const { sortedPlaces, getLocation, isGeoLoading, geoError } = useSortedPlaces(
    data || [],
  );
  if (isLoading || isGeoLoading) return <Loading />;
  if (error) return <div>error : {error.message}</div>;
  if (geoError) return <div>{geoError}</div>; // 이후에 어떻게 할지 수정할 필요 있음
  if (!data) return null;

  return (
    <div>
      <h3 className="mb-3 text-center text-2xl font-semibold">
        Restaurant List
      </h3>
      <button
        className="transform transition duration-1000 ease-in-out hover:scale-120 hover:text-blue-800"
        onClick={() => {
          getLocation();
          setIsClick((prev) => !prev);
        }}
      >
        {isClick ? "Show Default" : "Show Nearest"}
      </button>
      <div className="bg-card">
        {(isClick ? sortedPlaces : data).map((place) => (
          <RestaurantItem key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
