import React from "react";
import { BsCartPlusFill } from "react-icons/bs";
import { BsCartCheckFill } from "react-icons/bs";
import { GrFavorite } from "react-icons/gr";

const Meal = () => {
  return (
    <div className=" bg-gray-300 h-60 rounded-md p-3 min-w-max shadow-md relative overflow-hidden  ">
      {" "}
      <img
        src="https://www.thefooddictator.com/wp-content/uploads/2015/11/egusi-soup-23-1-4.jpg"
        style={{ height: "100px" }}
        alt=""
      />
      <h3>Egusi Soup</h3>
      <div className="flex justify-between">
        <p>NGN 3500</p>
        <button>
          <GrFavorite />
        </button>
      </div>
      <div className=" flex justify-center pt-4">
        <button className="inline-block py-1 px-4 rounded-md text-white bg-gray-600">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Meal;
