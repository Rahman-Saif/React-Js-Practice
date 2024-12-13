import React from "react";
import { useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const coffees = useLoaderData(); // Fetches data from the loader
  return (
    <div>
      <h1>Home</h1>
      <p>Number of Coffees: {coffees.length}</p>
      {
        coffees.map((coffee)=> <CoffeeCard key={coffee._id} coffee={coffee}/>)
      }
    </div>
  );
};

export default Home;
