import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className=" fixed top-0 left-0 bg-[#ffffff25] backdrop-blur-xl border-[#b5b5b5] mx-auto rounded-full mt-5 w-full h-20 text-xs px-10 py-5 flex items-center justify-between">
        <div className=" px-3 py-2 rounded-full text-[#000000] bg-[#ff7429]">
          E-COM-SHOP
        </div>
        <div className="flex items-center  gap-5 transition-all ease-in">
          {/* <Link to="/">Home</Link> */}
          {/* <Link to="/products">Products</Link> */}
          {/* <Link to="/shop">Shop</Link> */}
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive
                ? "bg-black text-white px-3 py-2 rounded-full duration-400"
                : " text-black px-3 py-2 hover:ring-1 transition-all ease-in-out duration-300 rounded-full";
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => {
              return isActive
                ? "bg-black text-white px-3 py-2 rounded-full duration-400"
                : " text-black  px-3 py-2 hover:ring-1 transition-all ease-in-out duration-300 rounded-full ";
            }}
          >
            Products
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) => {
              return isActive
                ? "bg-black text-white px-3 py-2 rounded-full duration-400 "
                : " text-black  px-3 py-2 hover:ring-1 transition-all ease-in-out duration-300 rounded-full";
            }}
          >
            Cart
          </NavLink>
          <NavLink
            to="/loginPage"
            className={({ isActive }) => {
              return isActive
                ? "bg-black text-white px-3 py-2 rounded-full duration-400 "
                : " text-black  px-3 py-2 hover:ring-1 transition-all ease-in-out duration-300 rounded-full";
            }}
          >
            Login
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Nav;
