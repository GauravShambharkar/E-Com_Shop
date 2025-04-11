// import React from "react";

const Products = () => {
  return (
    <>
      <div className="border border-[#b5b5b5] rounded-3xl w-full p-4 overflow-hidden">
        <div className="w-full flex justify-end p-2">
          <button className="px-3 py-2 bg-black text-white cursor-pointer text-xs w-fit rounded-full">
            Filter
          </button>
        </div>

        {/* Responsive grid layout */}
        <div className="productsContainer grid gap-6 mt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* card */}
          <div className="bg-gray-50 p-4 border border-[#c5c5c5] rounded-xl shadow hover:shadow-lg transition">
            <img
              src="https://images.unsplash.com/photo-1596162954151-cdcb4c0f70a8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGNoYWlyfGVufDB8fDB8fHww"
              alt=""
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-gray-700">Product item</h3>
            <p className="text-gray-500 mb-2">
              Short product description goes here.
            </p>
            <span className="text-lg font-semibold text-gray-900">$29.99</span>
          </div>

          <div className="bg-gray-50 p-4 border border-[#c5c5c5] rounded-xl shadow hover:shadow-lg transition">
            <img
              src="https://images.unsplash.com/photo-1596162954151-cdcb4c0f70a8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGNoYWlyfGVufDB8fDB8fHww"
              alt=""
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-gray-700">Product item</h3>
            <p className="text-gray-500 mb-2">
              Short product description goes here.
            </p>
            <span className="text-lg font-semibold text-gray-900">$29.99</span>
          </div>

          <div className="bg-gray-50 p-4 border border-[#c5c5c5] rounded-xl shadow hover:shadow-lg transition">
            <img
              src="https://images.unsplash.com/photo-1596162954151-cdcb4c0f70a8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGNoYWlyfGVufDB8fDB8fHww"
              alt=""
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-gray-700">Product item</h3>
            <p className="text-gray-500 mb-2">
              Short product description goes here.
            </p>
            <span className="text-lg font-semibold text-gray-900">$29.99</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
