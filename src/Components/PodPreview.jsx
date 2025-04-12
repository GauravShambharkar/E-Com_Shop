import React from 'react'

const ProductPreview = ({ selectedProduct, onClose }) => {
  if (!selectedProduct) return null;

  const { image, title, description, price } = selectedProduct;

  return (
    <div className='fixed inset-0 flex justify-center items-center bg-[#474747ac] bg-opacity-50 z-50'>
      <div className='w-80 p-4 bg-white rounded-lg shadow-lg relative'>
        <button onClick={onClose} className="absolute top-2 right-2 cursor-pointer text-black">✕</button>
        <img src={image} alt={title} className='w-full h-48 object-contain mb-4' />
        <h2 className='text-lg font-bold'>{title}</h2>
        <p className='text-sm text-gray-600 my-2'>{description}</p>
        <div className='flex justify-between items-center mt-4'>
          <span className='font-bold text-lg'>${price}</span>
          <button className='px-4 py-2 bg-black text-white rounded-full text-sm'>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductPreview;
