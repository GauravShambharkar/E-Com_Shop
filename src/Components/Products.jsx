// import React from "react";

import { useContext, useEffect, useState } from "react";
import { Context } from "./Context/Context";
import axios from "axios";
import Buffer from "./Buffer";
import ProductPreview from "./PodPreview";

const Products = () => {
  const [storedata, setstoreData] = useContext(Context);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");


  function fetchingStore() {
    axios.get("https://fakestoreapi.in/api/products").then((res) => {
      console.log(res.data);

      setstoreData([...storedata, ...res.data.products]);
    }).catch(()=>{
      alert('couldnt fetch data')
    })
    
    ;}

  useEffect(() => {
    console.log(" Product page mountedd ");
    fetchingStore();
    return () => {
      console.log(" Product page UN-mountedd ");
    };
  }, []);

  const getUniqueCategories = (data) => [
    "All",
    ...new Set(data.map((item) => item.category)),
  ];

  const filteredData =
    selectedCategory === "All"
      ? storedata
      : storedata.filter((item) => item.category === selectedCategory);






  return (
    <>
      <div className="border mt-30 border-[#b5b5b5] rounded-3xl w-full p-4 overflow-hidden">
        <div className="w-full flex gap-4 justify-end p-2">
        {getUniqueCategories(storedata).map((category, index) => (
            <span
              key={index}
              className={`text-sm cursor-pointer px-3 py-1 rounded-full transition-all ${
                selectedCategory === category
                  ? "bg-black text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() +
                category.slice(1).toLowerCase()}
            </span>
          ))}
          {/* <button className="px-3 py-2 bg-black text-white cursor-pointer text-xs w-fit rounded-full">
           Filter 
          </button> */}
        </div>

        {/* Responsive grid layout */}
        <div className="productsContainer  gap-5 mt-5 justify-center flex flex-wrap">
          {/* card */}
          {filteredData.length > 0
            ?  filteredData.map((elem, id) => {
                const { image, title, price ,discount } = elem;

                return (
                  <div
                    key={id}
                    className="bg-[#ffffff] cursor-pointer p-4 border w-58 border-[#ffffffc9] rounded-xl shadow hover:shadow-lg transition shadow-black/70 flex flex-col justify-between "
                  >
                    <div className="topContent">
                      <img
                        src={image}
                        alt={title}
                        className="w-50 mx-auto h-35 object-contain rounded-md mb-4"
                      />
                      {title.length>20? (<h3 className="text-md font-bold text-gray-700 ">
                        {title.slice(0, 60)}...
                      </h3>) : title}
                      <p className="text-gray-500 mb-2">
                        Short product description goes here.
                      </p>
                    </div>
                    <div className="bottomContent ">
                      <div className="flex my-auto justify-between items-end">
                        <span className="text-sm font-semibold text-[#494949]">
                          ${price}
                        </span>
                        {discount>0 ?(< span className={`text-sm font-semibold px-2 border rounded-full text-[#212121] ${discount>15? `bg-[#30e830] text-[#ffffff] border border-white` : discount}`}>
                          {discount}% OFF
                        </span>) : ''}
                        <span
                          onClick={() => {
                            setSelectedProduct(elem);
                          }}
                          className="px-3 text-sm py-1 bg-[#000000] text-white rounded-full cursor-pointer text-center hover:bg-[#d0d0d0] hover:text-[#000000] transition-colors ease-in-out duration-300">
                            
                          Buy
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            :  <Buffer />}
        </div>
      </div>
      {
        <ProductPreview
          selectedProduct={selectedProduct}
          onClose={() => setSelectedProduct(null) }
        />
      }
    </>
  );
};

export default Products;
