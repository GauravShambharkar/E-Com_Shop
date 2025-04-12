// import React from "react";

import { useContext, useEffect, useState } from "react";
import { Context } from "./Context/Context";
import axios from "axios";
import Buffer from "./Buffer";
import ProductPreview from "./PodPreview";
import Shop from "./Shop";

const Products = () => {
  const [storedata, setstoreData] = useContext(Context);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState(null);

  function fetchingStore() {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data);

      setstoreData([...storedata, ...res.data]);
    });
  }

  useEffect(() => {
    console.log(" Product page mountedd ");
    fetchingStore();
    return () => {
      console.log(" Product page UN-mountedd ");
    };
  }, []);

  return (
    <>
      <div className="border border-[#b5b5b5] rounded-3xl w-full p-4 overflow-hidden">
        <div className="w-full flex justify-end p-2">
          <button className="px-3 py-2 bg-black text-white cursor-pointer text-xs w-fit rounded-full">
            Filter
          </button>
        </div>

        {/* Responsive grid layout */}
        <div className="productsContainer cursor-pointer grid gap-3 mt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {/* card */}
          {storedata.length > 0
            ? storedata.map((elem, id) => {
                const { image, title, price } = elem;

                return (
                  <div
                    key={id}
                    className="bg-gray-50 p-4 border w-60 border-[#c5c5c5] rounded-xl shadow hover:shadow-lg transition shadow-black/70  hover:scale-98 flex flex-col justify-between "
                  >
                    <div className="topContent">
                      <img
                        src={image}
                        className="w-50 mx-auto h-35 object-contain rounded-md mb-4"
                      />
                      <h3 className="text-md font-bold text-gray-700 ">
                        {title}
                      </h3>
                      <p className="text-gray-500 mb-2">
                        Short product description goes here.
                      </p>
                    </div>
                    <div className="bottomContent ">
                      <div className="flex my-auto justify-between items-end">
                        <span className="text-sm font-semibold text-gray-900">
                          ${price}
                        </span>
                        <span
                          onClick={() => {
                            setSelectedProduct(elem);
                            setCart(elem);
                          }}
                          className="px-3 text-sm py-1 cursor-pointer text-white text-center bg-black rounded-full"
                        >
                          Buy
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            : [<Buffer />]}
        </div>
      </div>
      {
        <>
          <ProductPreview
            selectedProduct={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
          <Shop cart={cart}/>
        </>
      }
    </>
  );
};

export default Products;
