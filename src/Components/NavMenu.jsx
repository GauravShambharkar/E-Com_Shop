import React from 'react'
import { NavLink } from 'react-router-dom';

const NavMenu = ({setIsMenu}) => {
  return (
    <>
        
    <div className="w-full fixed  top-0 right-0 mt-25 p-2 rounded-2xl bg-[#ffffff16] backdrop-blur-md">
   <div className="flex flex-col border items-end w-full p-2 rounded-2xl">
    <NavLink
            to="/"
            onClick={()=>setIsMenu('')}
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
            onClick={()=>setIsMenu('')}
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
            onClick={()=>setIsMenu('')}
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
            onClick={()=>setIsMenu('')}
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
    </>
  )
}

export default NavMenu