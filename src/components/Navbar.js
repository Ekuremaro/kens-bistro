import React from "react";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" bg-slate-300 text-2xl px-2 py-3 flex justify-between content-center">
      <div>
        <Link to="/">FAITH BISTRO</Link>{" "}
      </div>

      <ul className=" hidden">
        <Link to="/">
          <li>Order</li>
        </Link>
        <Link to="/">
          <li>Order</li>
        </Link>
        <Link to="/">
          <li>Order</li>
        </Link>
      </ul>
      <button>
        <FaAlignRight />
      </button>
    </nav>
  );
};

export default Navbar;
