import RestaurantItem from "./RestaurantItem";

const RestaurantList = () => {
  return (
    <div>
      <h3 className="text-center mb-3 text-xl font-semibold">맛집 목록</h3>
      <div className="bg-card">
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
      </div>
    </div>
  );
};

export default RestaurantList;
