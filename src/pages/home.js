import React from "react";
import Meal from "../components/meal.component";

const Home = () => {
  return (
    <div className=" my-4">
      <div className="  flex flex-wrap justify-center gap-3">
        <Meal />
        <Meal />
        <Meal />
      </div>
    </div>
  );
};

export default Home;
