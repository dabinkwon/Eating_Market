import FavoriteRestaurant from "./components/FavoriteRestaurant";
import Header from "./components/Header";
import ModeToggle from "./components/ModeToggle";
import RestaurantList from "./components/RestaurantList";

function App() {
  return (
    <div className="flex flex-col gap-10">
      <Header />
      <div className="absolute top-8 right-10">
        <ModeToggle />
      </div>
      <main className="relative mx-11 flex flex-col gap-10">
        <FavoriteRestaurant />
        <RestaurantList />
      </main>
    </div>
  );
}

export default App;
