import Header from "./components/Header";
import RestaurantList from "./components/RestaurantList";

function App() {
  return (
    <div className="flex flex-col gap-10">
      <Header />
      <div className="mx-11 flex flex-col gap-10">
        <RestaurantList />
      </div>
    </div>
  );
}

export default App;
