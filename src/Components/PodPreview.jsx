import { useContext } from "react";
import Shop from "./Shop";
import { CartContext } from "./Context/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProductPreview = ({ selectedProduct, onClose }) => {
  const [cartData, setCartData] = useContext(CartContext);

  if (!selectedProduct) return null;
  const navigate = useNavigate();
  const { image, title, description, price, brand, color, discount } =
    selectedProduct;

  const handleAddToCart = () => {
    setCartData([...cartData, selectedProduct]);
    onClose();
    navigate("/cart");
  };

  const notifyMsg = () => {
    toast("Added to the cart");
  };

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 flex justify-center items-center bg-[#474747ac] bg-opacity-50 z-50 px-4 sm:px-6 lg:px-8"
      >
        {/* Modal Container */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-7xl bg-white max-md:w-100 rounded-lg shadow-lg relative p-4 flex flex-col max-md: md:flex-row items-center gap-6"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-4 text-black text-xl hover:scale-110 hover:font-bold transition-all"
          >
            ✕
          </button>

          {/* Product Image */}
          <img
            src={image}
            alt={title}
            className="w-full sm:w-[60%] text-left md:w-[40%] lg:w-[30%] max-w-xs h-auto object-contain rounded-2xl border border-[#e2e2e2] "
          />

          {/* Text Content */}
          <div className="w-full flex flex-col  justify-between text-left md:text-left">
            <div>
              <h2 className="text-xl font-bold">{title}</h2>
              <p className="text-sm text-gray-600 mt-2">{description}</p>
            </div>

            {/* Pricing & CTA */}
            <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start mt-6">
              <span className="font-mono text-[#5b5b5b] text-base">
                ${price}
              </span>
              <span className="font-mono text-[#5b5b5b] text-base">
                {brand}
              </span>
              <span className="font-mono text-[#5b5b5b] text-base">
                {discount}% off
              </span>
              <span className="font-mono text-[#5b5b5b] text-base">
                {color}
              </span>
            </div>

            <button
              onClick={() => {
                handleAddToCart();
                notifyMsg();
              }}
              className="mt-4 w-full md:w-fit px-5 py-2 bg-black text-white rounded-full text-sm hover:bg-[#2f2f2f] transition-all"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPreview;
