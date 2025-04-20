import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import NavMenu from "../NavMenu";

const Nav = () => {
  const [isMenu, setIsmenu] = useState(false)
  function toggleMenu() {
    setIsmenu(!isMenu)
  }

  return (
    <>
      <div className=" fixed top-0  left-0 bg-[#ffffff25] backdrop-blur-xl border-[#b5b5b5] mx-auto rounded-full mt-5 w-full h-20 text-xs px-10 py-5 flex items-center justify-between">
        <div className=" px-3 py-2 rounded-full text-[#000000] bg-[#ff7429]">
          E-COM-X
        </div>

      <span onClick={()=>toggleMenu()}>
        {isMenu== true? <i className="ri-close-large-line p-2 text-lg max-sm:block sm:hidden"></i>: <i className="ri-menu-line p-2 text-lg max-sm:block sm:hidden"></i> }
      </span>
        <div className="flex items-center  gap-5 transition-all ease-in max-sm:hidden">
          {/* <Link to="/">Home</Link> */}
          {/* <Link to="/products">Products</Link> */}
          {/* <Link to="/shop">Shop</Link> */}
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive
                ? "bg-black text-white px-3 py-2 rounded-full duration-400"
                : " text-black px-3 py-2 ";
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => {
              return isActive
                ? "bg-black text-white px-3 py-2 rounded-full duration-400"
                : " text-black px-3 py-2";
            }}
          >
            Products
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) => {
              return isActive
                ? "bg-black text-white px-3 py-2 rounded-full duration-400 "
                : " text-black  px-3 py-2";
            }}
          >
            Cart
          </NavLink>
          <NavLink
            to="/loginPage"
            className={({ isActive }) => {
              return isActive
                ? "bg-black text-white px-3 py-2 rounded-full duration-400 "
                : " text-black  px-3 py-2";
            }}
          >
            Login
          </NavLink>
        </div>
      </div>
      {isMenu === true? <NavMenu setIsMenu={setIsmenu}/> : null }

    </>
  );
};

export default Nav;
