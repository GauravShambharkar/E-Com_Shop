import Shop from './Shop';


const ProductPreview = ({ selectedProduct, onClose}) => {



  if (!selectedProduct) return null

  const { image, title, description, price ,brand, color, discount} = selectedProduct;

  return (
    <div onClick={onClose} className='fixed  inset-0 flex  justify-center items-center bg-[#474747ac] bg-opacity-50 z-50'>
      {/* container */}
      <div  onClick={(e) => e.stopPropagation()} className='p-4 bg-white flex rounded-lg items-center shadow-lg gap-4 relative'>
        <button onClick={onClose} className="absolute top-2 right-3 cursor-pointer hover:font-extrabold hover:scale-110 text-black">✕</button>
        <img src={image} alt={title} className='w-70 h-full border rounded-2xl border-[#e2e2e2] object-contain mb-4 flex flex-row' />
        <div className="  w-150 flex flex-col justify-between ">
      <span className=''>
          <h2 className='text-lg mt-3 gap-2 font-bold'>{title}</h2>
          <p className='text-sm text-gray-600 my-2'>{description}</p>
      </span>
      <div className='botton  flex items-center gap-5  mt-4'>
          <span className='font-mono text-[#5b5b5b] text-lg'>${price}</span>
          <span className='font-mono text-[#5b5b5b] text-lg'>{brand}</span>
          <span className='font-mono text-[#5b5b5b] text-lg'>{discount}%off</span>
          <span className='font-mono text-[#5b5b5b] text-lg'>{color}</span>
          <button  className='px-4 py-2 bg-black text-white rounded-full text-sm hover:bg-[#2f2f2f] cursor-pointer '>Add to Cart</button>
      </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPreview;
