import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../contaxt/ShopContext'

const Product = () => {
  const { productId } = useParams()
  const { products, currency, addToCart } = useContext(ShopContext)
  const [productData, setproductData] = useState(false)
  const [size, setsize] = useState(null) // select size 

  let ratingImg = <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/4.5_stars.svg/535px-4.5_stars.svg.png' className=' w-20 h-4 ' alt="rating" />

  const fatchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setproductData(item)
        return null
      }
    })
  }

  useEffect(() => {
    fatchProductData()
  }, [productId])

  const productSize = (size) => {
    setsize(size)
  }

  return productData ? (
    <div className="px-4 py-6">
      <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 flex flex-col md:flex-row md:gap-12'>
        {/* Product images */}
        <div className='md:flex-shrink-0'>
          <div className='flex gap-4 overflow-x-auto md:flex-row'>
            {productData.image.map((e, k) => {
              return (<img src={e} key={k} className='w-full sm:w-64 sm:h-64 md:w-[35rem] md:h-[24rem] object-cover' alt="product" />)
            })}
          </div>
        </div>

        {/* Product details */}
        <div className='mt-6 md:mt-0 flex flex-col gap-3'>
          <h1 className='text-xl font-bold'>{productData.name}</h1>
          <div className='flex items-center text-center'>
            <span className='font-bold'>Rating : </span>{ratingImg}
          </div>
          <p><span className='font-bold'>Price : </span> {currency} {productData.price}</p>
          <p><span className='font-bold'>Description : </span>{productData.description}</p>

          {/* Select size */}
          <div className='flex items-center'>
            <p className='mt-2 font-bold mr-2'>Select size :</p>
            <div className='mt-3'>
              <button onClick={() => productSize("M")} className={`ml-1 border w-8 ${size === "M" ? 'bg-gray-600 text-white' : 'border-gray-600'}`} >M</button>
              <button onClick={() => productSize("X")} className={`ml-1 border w-8 ${size === "X" ? 'bg-gray-600 text-white' : 'border-gray-600'}`}>X</button>
              <button onClick={() => productSize("L")} className={`ml-1 border w-8 ${size === "L" ? 'bg-gray-600 text-white' : 'border-gray-600'}`}>L</button>
            </div>
          </div>

          {/* Add to cart */}
          <div className='mt-4'>
            <button onClick={() => addToCart(productData._id, size, alert("item added"))} className='bg-black text-white px-6 py-2 text-sm active:bg-gray-700'>Add To Cart</button>
          </div>
          <hr className='my-4' />
          <p>100% Original Products</p>
          <p>Cash On Delivery Available</p>
        </div>
      </div>

      {/* Description section */}
      <div className='border text-sm border-gray-300 py-5 mt-3 px-3'>
        <p className='font-bold mb-2'>Description</p>
        <p>Fake news or information disorder is false or misleading information (misinformation, including disinformation, propaganda, and hoaxes) presented as news. Fake news often has the aim of damaging the reputation of a person or entity, or making money through advertising revenue.</p>
      </div>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
