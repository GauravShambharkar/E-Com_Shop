import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Products from "../Products";
import Shop from "../Shop";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/products" element={<Products />}>
          Products
        </Route>
        <Route path="/shop" element={<Shop />}>
          Shop
        </Route>
      </Routes>
    </>
  );
};

export default Routing;
