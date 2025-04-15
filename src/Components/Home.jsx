import React, { useContext, useState } from "react";
import { Context } from "./Context/Context";
// import Products from "./Products";

import { Link } from "react-router-dom";

const Home = () => {
  const [data] = useContext(Context);

  const [demoData, setDemoData]  = useState([
    {
      "id": 1,
      "title": "Sony WH-1000XM3 Bluetooth Wireless Over Ear Headphones with Mic (Silver)",
      "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",
      "price": 773,
      "description": "Digital noise cancelling : Industry leading Active Noise Cancellation (ANC) lends a personalized, virtually soundproof experience at any situation\r\nHi-Res Audio : A built-in amplifier integrated in HD Noise Cancelling Processor QN1 realises the best-in-class signal-to-noise ratio and low distortion for portable devices.\r\nDriver Unit : Powerful 40-mm drivers with Liquid Crystal Polymer (LCP) diaphragms make the headphones perfect for handling heavy beats and can reproduce a full range of frequencies up to 40 kHz.\r\nVoice assistant : Alexa enabled (In-built) for voice access to music, information and more. Activate with a simple touch. Frequency response: 4 Hz-40,000 Hz",
      "brand": "sony",
      "model": "WH-1000XM3",
      "color": "silver",
      "category": "audio",
      "discount": 11
    },
    {
      "id": 2,
      "title": "Microsoft Xbox X/S Wireless Controller Robot White",
      "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg",
      "price": 57,
      "description": "Experience the modernized design of the Xbox wireless controller in robot white, featuring sculpted surfaces and refined Geometry for enhanced comfort and effortless control during gameplay\r\nStay on target with textured grip on the triggers, bumpers, and back case and with a new hybrid D-pad for accurate, yet familiar input\r\nMake the controller your own by customizing button Mapping with the Xbox accessories app",
      "brand": "microsoft",
      "model": "Xbox X/S",
      "color": "white",
      "category": "gaming",
      "popular": true,
      "discount": 4
    },
    {
      "id": 3,
      "title": "Logitech G733 Lightspeed Wireless Gaming Headset with Suspension Headband, LIGHTSYNC RGB, Blue VO!CE mic Technology and PRO-G Audio Drivers - White",
      "image": "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692257709689-logitech heaphone.jpg",
      "price": 384,
      "description": "Total freedom with up to 20 m wireless range and LIGHTSPEED wireless audio transmission. Keep playing for up to 29 hours of battery life. 1 Play in stereo on PlayStation(R) 4.\r\nPersonalize your headset lighting across the full spectrum, 16. 8M colors. Play in colors with front-facing, dual-zone LIGHTSYNC RGB lighting and choose from preset animations or create your own with G HUB software.\r\nColorful, reversible suspension headbands are designed for comfort during long play sessions.\r\nAdvanced mic filters that make your voice sound richer, cleaner, and more professional. Customize with G HUB and find your sound.\r\nHear every audio cue with breathtaking clarity and get immerse in your game. PRO-G drivers are designed to significantly reduce distortion and reproduce precise, consistent, rich sound quality.\r\nSoft dual-layer memory foam that conforms to your head and reduces stress points for long-lasting comfort.\r\nG733 weighs only 278 g for long-lasting comfort.",
      "brand": "logitech G",
      "model": "G733 LIGHTSPEED",
      "color": "white",
      "category": "gaming",
      "popular": true,
      "discount": 3
    },
  ])

  const [change, setChange] = useState(false)


  const issubscribe = ()=>{
    setChange(!change)
  }


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
          <h2 className="text-3xl font-semibold  text-gray-800 mb-8 text-center">
            Featured Products
          </h2>
          <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2">
            { demoData.map((item, id) => (
              <div
                key={id}
                className="bg-[#ffffff] p-4 rounded-xl shadow shadow-black hover:shadow-lg "
              >
                <Link to='/products'>
                <img
                  src={item.image}
                  className="w-full h-48 cursor-pointer object-contain rounded-md mb-4"
                  />
                </Link>
                {item.title.length>20? (<h3 className="text-xl font-medium  text-gray-700">
                  {item.title.slice(0, 50)}...
                </h3>) : item.title}
                {item.description.length>20? (<p className="text-gray-500 mb-2">
                  {item.description.slice(0,159)}...
                </p>) : item.description}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900">
                    ${item.price}
                  </span>
                 <Link to='/products'>
                  <span className="px-4 py-1 cursor-pointer text-white text-center bg-black rounded-full">
                    View
                  </span>
                 </Link>
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
                src="https://i.pinimg.com/474x/0f/f8/ce/0ff8ce20452f671134de5af16dc7cbb1.jpg"
                alt="Fast Delivery"
                className="mx-auto mb-4 w-30"
              />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600 text-sm">
                Get your orders delivered quickly and safely, no matter where
                you are.
              </p>
            </div>
            <div className="p-6 bg-white  rounded-xl shadow hover:shadow-md transition">
              <div className=" flex items-center justify-center h-35 ">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/price-tag.png"
                alt="Best Prices"
                className="mx-auto mb-4 w-15 "
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Unmatched Prices
              </h3>
              <p className="text-gray-600 text-sm">
                We offer the best deals without compromising quality or service.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
              <div className=" flex items-center justify-center h-35 ">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/secured-letter.png"
                alt="Secure Checkout"
                className="mx-auto mb-4"
              />
              </div>
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

      {/* Footer */}
<footer className="bg-black rounded-t-4xl text-white mt-12">
  <div className="max-w-6xl  border-b-2 border-[#e7e7e77a] mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    
    {/* Brand Info */}
    <div>
      <h3 className="text-lg  font-bold mb-4">EcomX</h3>
      <p className="text-sm text-gray-300">
        Your one-stop shop for top-quality products and unbeatable prices.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="text-md  font-semibold mb-3">Quick Links</h4>
      <ul className="space-y-2 text-sm text-gray-300">
        <li><Link to="/" className="hover:text-white">Home</Link></li>
        <li><Link to="/products" className="hover:text-white">Products</Link></li>
        <li><Link to="/about" className="hover:text-white">About Us</Link></li>
        <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
      </ul>
    </div>

    {/* Customer Support */}
    <div>
      <h4 className="text-md font-semibold mb-3">Support</h4>
      <ul className="space-y-2 text-sm text-gray-300">
        <li><Link to="/faq" className="hover:text-white">FAQs</Link></li>
        <li><Link to="/returns" className="hover:text-white">Returns</Link></li>
        <li><Link to="/shipping" className="hover:text-white">Shipping Info</Link></li>
        <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
      </ul>
    </div>

    {/* Newsletter / Social */}
    <div>
      <h4 className="text-md font-semibold mb-3">Stay Updated</h4>
      <p className="text-sm text-gray-300 mb-2">Subscribe to our newsletter</p>
      <input
        type="email"
        placeholder="Your email"
        className="w-full px-3 py-2 rounded text-black mb-2"
      />
      <button onClick={()=>{issubscribe()}} className="w-full bg-white text-black px-3 py-2 rounded hover:bg-gray-300">
        {change == true? "Unsubscribe" : "Subscribe"} 
        
      </button>
    </div>
  </div>

  <div className="text-center text-xs text-gray-400 py-4 ">
    &copy; {new Date().getFullYear()} EcomX. All rights reserved.
  </div>
</footer>

    </>
  );
};

export default Home;
