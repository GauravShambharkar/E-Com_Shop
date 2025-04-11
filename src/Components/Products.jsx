import React from "react";

const Products = () => {
  return (
    <>
      <div className="border border-[#b5b5b5] rounded-3xl w-full p-4 overflow-hidden">
        <div className=" w-full flex justify-end p-2  ">
          <button className="px-3 py-2 bg-black text-white cursor-pointer text-xs w-fit rounded-full justify-end">
            Filter
          </button>
        </div>

        <div className="productsContainer flex gap-4 w-full mt-5 ">
          {/* card */}
          {/* <div className="card bg-[#ededede6] border border-[#cacaca] w-60 rounded-3xl overflow-hidden p-4">
            <div className="imgContainer cursor-pointer w-full h-58 justify-center flex  rounded-3xl overflow-hidden">
              <img
                className="object-fill w-full"
                src="https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoYWlyfGVufDB8fDB8fHww"
                alt=""
              />
            </div>
            <div className="Cardcontent mt-2 flex justify-between items-center gap-1 ">
              <div>
                <h1 className="font-bold cursor-pointer ">Chair</h1>
                <h1 className="font-semibold text-sm">Price</h1>
                <h2>I love chairs because they always have my back.</h2>
              </div>
              <div className="addItem cursor-pointer bg-amber-400 px-3 rounded-full ">
                Buy
              </div>
            </div>
          </div> */}

          <div className="bg-gray-50 p-4 border border-[#c5c5c5] rounded-xl shadow hover:shadow-lg transition">
            <img
              src={`https://images.unsplash.com/photo-1596162954151-cdcb4c0f70a8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGNoYWlyfGVufDB8fDB8fHww`}
              alt=""
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-gray-700 ">Product item</h3>
            <p className="text-gray-500 mb-2">
              Short product description goes here.
            </p>
            <span className="text-lg font-semibold text-gray-900">$29.99</span>
          </div>
          {/* card */}
        </div>
      </div>
    </>
  );
};

export default Products;
