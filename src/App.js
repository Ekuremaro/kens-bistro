import Home from "./pages/home";
import About from "./pages/about";
import Error from "./pages/error";
import Category from "./pages/category";
import Order from "./pages/order";
import Navbar from "./components/Navbar";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/order" element={<Order />} />
        <Route path="/category" element={<Category />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
