import { usePlaces } from "../hooks/usePlaces";
import Loading from "./Loading";
import RestaurantItem from "./RestaurantItem";
import { useSortedPlaces } from "../hooks/useSortedPlaces";

const RestaurantList = () => {
  const { data, isLoading, error } = usePlaces();
  const { sortedPlaces, isGeoLoading, geoError } = useSortedPlaces(data || []);

  if (isLoading || isGeoLoading) return <Loading />;
  if (error) return <div>error : {error.message}</div>;
  if (geoError) return <div>{geoError}</div>;

  return (
    <div>
      <h3 className="text-center mb-3 text-xl font-semibold">
        Restaurant List
      </h3>
      <div className="bg-card">
        {sortedPlaces.map((place) => (
          <RestaurantItem key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
