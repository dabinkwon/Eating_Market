import { usePlaces } from "../hooks/usePlaces";
import Loading from "./Loading";
import RestaurantItem from "./RestaurantItem";

const RestaurantList = () => {
  const { data, isLoading, error } = usePlaces();

  if (isLoading) return <Loading />;
  if (error) return <div>error : {error.message}</div>;
  if (!data) return null;

  return (
    <div>
      <h3 className="text-center mb-3 text-xl font-semibold">맛집 목록</h3>
      <div className="bg-card">
        {data.map((place) => (
          <RestaurantItem key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
