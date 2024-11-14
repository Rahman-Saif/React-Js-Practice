import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";


function App() {

  const coffees=useLoaderData();

  return (
    <>
      <h1>Coffee length:{coffees.length}</h1>
      {
        coffees.map(coffee => <CoffeeCard key={coffee.id} coffee={coffee} ></CoffeeCard>)
      }
    </>
  );
}

export default App
