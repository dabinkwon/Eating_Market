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
  if (!data) return null;
  if (isLoading || isGeoLoading) return <Loading />;
  if (error) return <div>error : {error.message}</div>;
  if (geoError) return <div>{geoError}</div>;

  return (
    <div>
      <h3 className="mb-3 text-center text-xl font-semibold">
        Restaurant List
      </h3>
      <button
        className="transform transition duration-1000 ease-in-out hover:scale-120 hover:text-blue-800"
        onClick={() => {
          getLocation();
          setIsClick((prev) => !prev);
        }}
      >
        Show nearest
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
