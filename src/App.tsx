import FavoriteRestaurant from "./components/FavoriteRestaurant";
import Header from "./components/Header";
import RestaurantList from "./components/RestaurantList";

function App() {
  return (
    <div className="flex flex-col gap-10">
      <Header />
      <main className="mx-11 flex flex-col gap-10">
        <FavoriteRestaurant />
        <RestaurantList />
      </main>
    </div>
  );
}

export default App;
