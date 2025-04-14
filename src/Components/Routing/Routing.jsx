import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Products from "../Products";
import Shop from "../Shop";
import Login from "../Login";

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
        <Route path="/cart" element={<Shop />}>
          Cart
        </Route>
        <Route path="/loginPage" element={<Login/>}>
          Login
        </Route>
      </Routes>
    </>
  );
};

export default Routing;
