import React from "react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-100 py-16 px-4 text-center rounded-3xl">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Discover Handpicked Products Just for You
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Shop exclusive items from our carefully curated collection of niche goods.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-2xl hover:bg-gray-800 transition duration-300">
            Shop Now
          </button>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Featured Products</h2>
          <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-50 p-4 rounded-xl shadow hover:shadow-lg transition">
                <img
                  src={`https://images.unsplash.com/photo-1596162954151-cdcb4c0f70a8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGNoYWlyfGVufDB8fDB8fHww+${item}`}
                  alt={`Product ${item}`}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-medium text-gray-700">Product {item}</h3>
                <p className="text-gray-500 mb-2">Short product description goes here.</p>
                <span className="text-lg font-semibold text-gray-900">$29.99</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section className="bg-gray-50 py-16 px-4 rounded-3xl ">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Us?</h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
              <img src="https://img.icons8.com/ios-filled/50/000000/fast-cart.png" alt="Fast Delivery" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">Get your orders delivered quickly and safely, no matter where you are.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
              <img src="https://img.icons8.com/ios-filled/50/000000/price-tag.png" alt="Best Prices" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Unmatched Prices</h3>
              <p className="text-gray-600 text-sm">We offer the best deals without compromising quality or service.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
              <img src="https://img.icons8.com/ios-filled/50/000000/secured-letter.png" alt="Secure Checkout" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Secure Checkout</h3>
              <p className="text-gray-600 text-sm">Your data is protected with top-tier encryption and safe payment gateways.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
