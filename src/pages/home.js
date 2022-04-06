import React from "react";
import Meal from "../components/meal.component";

const Home = () => {
  return (
    <div className="container h-screen  py-4 bg-gradient-to-r from-purple-500 to-pink-500">
      <div className=" mx-auto gap-4 px-4 justify-center content-around grid grid-cols-2">
        <Meal />
        <Meal />
        <Meal />
        <Meal />
      </div>
    </div>
  );
};

export default Home;
