import { usePlaces } from "../hooks/usePlaces";
import Loading from "./Loading";
import RestaurantItem from "./RestaurantItem";
import { useSortedPlaces } from "../hooks/useSortedPlaces";
import { useState } from "react";

const RestaurantList = () => {
  const [isNearest, setIsNearest] = useState(false);
  const { data, isLoading, error } = usePlaces();
  const { sortedPlaces, getLocation, isGeoLoading, geoError } = useSortedPlaces(
    data || [],
  );
  if (isLoading || isGeoLoading) return <Loading />;
  if (error) return <div>error : {error.message}</div>;
  if (geoError) {
    alert("위치 정보 접근이 거부되었습니다.");
  }
  if (!data) return null;

  return (
    <div>
      <h3 className="mb-3 text-center text-2xl font-semibold">
        Restaurant List
      </h3>
      <button
        className="transform cursor-pointer transition duration-1000 ease-in-out hover:scale-120 hover:text-blue-800"
        onClick={() => {
          getLocation();
          setIsNearest((prev) => !prev);
        }}
      >
        {isNearest ? "Show Default" : "Show Nearest"}
      </button>
      <section className="bg-card">
        {(isNearest && !geoError ? sortedPlaces : data).map((place) => (
          <RestaurantItem key={place.id} place={place} />
        ))}
      </section>
    </div>
  );
};

export default RestaurantList;
