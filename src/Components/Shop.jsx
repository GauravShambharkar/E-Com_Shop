import React, { useContext } from "react";
import { CartContext } from "./Context/CartContext";
import { toast } from "react-toastify";

const Shop = () => {
  const [cartData, setCartData] = useContext(CartContext);

  function removeProduct() {
    toast("Product Removed");
  }

  return (
    <div className="conatienr border p-4 mt-30 rounded-3xl ">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartData.length === 0 ? (
        <p className="text-gray-600 ">Add something to the cart</p>
      ) : (
        <div className="grid gap-6 w-fit">
          {cartData.map((item, idx) => (
            <div key={idx} className="border gap-2 flex p-4 rounded-xl shadow">
              <img
                src={item.image}
                alt={item.title}
                className="w-fit  h-40 object-contain mb-3"
              />

              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm  text-gray-600">{item.description}</p>
                <div className="flex  gap-2 items-center mt-3">
                  <span className="text-gray-800 font-bold">${item.price}</span>
                  <span
                    onClick={() => {
                      const newCart = cartData.filter((_, i) => i !== idx);
                      setCartData(newCart);
                      removeProduct();
                    }}
                    className="text-sm text-[#ffffff] cursor-pointer bg-black border rounded-3xl px-3 py-1"
                  >
                    Remove
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* <div className="w-full border rounded-xl mt-4 p-2 flex justify-end"> */}
      {/* <h1 className="font-bold ">{Total:</h1> */}
      {/* </div> */}
    </div>
  );
};
export default Shop;
