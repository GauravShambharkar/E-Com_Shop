import React, { useContext } from "react";
import { Context } from "./Context/Context";
// import Products from "./Products";
import { Link } from "react-router-dom";

const Home = () => {
  const [data] = useContext(Context);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-100 mt-30 py-16 px-4 text-center rounded-3xl">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Discover Handpicked Products Just for You
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Shop exclusive items from our carefully curated collection of niche
            goods.
          </p>
          <Link to='/products'  >
          <button  className="bg-black text-white px-6 py-3 rounded-2xl hover:bg-gray-800 transition duration-300">
            Shop Now
          </button>
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Featured Products
          </h2>
          <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
            { [1,2,3].map((item, id) => (
              <div
                key={id}
                className="bg-gray-50 p-4 rounded-xl shadow shadow-black hover:shadow-lg hover:scale-98 transition"
              >
                <img
                  src={item.image}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-bold  text-gray-700">
                  {item.item}
                </h3>
                <p className="text-gray-500 mb-2">
                  Short product description goes here.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900">
                    ${item.price}
                  </span>
                  <span className="px-4 py-1 cursor-pointer text-white text-center bg-black rounded-full">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section className="bg-gray-50 py-16 px-4 rounded-3xl ">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Why Choose Us?
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/fast-cart.png"
                alt="Fast Delivery"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600 text-sm">
                Get your orders delivered quickly and safely, no matter where
                you are.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/price-tag.png"
                alt="Best Prices"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Unmatched Prices
              </h3>
              <p className="text-gray-600 text-sm">
                We offer the best deals without compromising quality or service.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/secured-letter.png"
                alt="Secure Checkout"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Secure Checkout
              </h3>
              <p className="text-gray-600 text-sm">
                Your data is protected with top-tier encryption and safe payment
                gateways.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
