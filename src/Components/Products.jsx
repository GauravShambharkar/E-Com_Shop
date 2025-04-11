// import React from "react";

import { useContext } from "react";
import { Context } from "./Context/Context";

const Products = () => {
  const [data] = useContext(Context);

  return (
    <>
      <div className="border border-[#b5b5b5] rounded-3xl w-full h-screen p-4 overflow-hidden">
        <div className="w-full flex justify-end p-2">
          <button className="px-3 py-2 bg-black text-white cursor-pointer text-xs w-fit rounded-full">
            Filter
          </button>
        </div>

        {/* Responsive grid layout */}
        <div className="productsContainer grid gap-6 mt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* card */}
          {data.map( (elem , id)=> {

          return <div key={id} className="bg-gray-50 p-4 border border-[#c5c5c5] rounded-xl shadow hover:shadow-lg transition">
            <img
              src={elem.image}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-gray-700">{elem.item}</h3>
            <p className="text-gray-500 mb-2">
              Short product description goes here.
            </p>
            <span className="text-lg font-semibold text-gray-900">{elem.price}</span>
          </div>
            
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
