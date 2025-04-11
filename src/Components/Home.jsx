import React from "react";

const Home = () => {
  return (
    <>
      <section className="bg-gray-100 py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Discover Handpicked Products Just for You
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Shop exclusive items from our carefully curated collection of niche
            goods.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-2xl hover:bg-gray-800 transition duration-300">
            Shop Now
          </button>
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Featured Products
          </h2>
          <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
            {/* Example Product Cards */}
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-gray-50 p-4 rounded-xl shadow hover:shadow-lg transition"
              >
                <img
                  src={`https://via.placeholder.com/300x200?text=Product+${item}`}
                  alt={`Product ${item}`}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-medium text-gray-700">
                  Product {item}
                </h3>
                <p className="text-gray-500 mb-2">
                  Short product description goes here.
                </p>
                <span className="text-lg font-semibold text-gray-900">
                  $29.99
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
