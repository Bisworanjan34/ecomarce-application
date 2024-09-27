import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../contaxt/ShopContext'

const Product = () => {
  const { productId } = useParams()
  const { products, currency, addToCart } = useContext(ShopContext)
  const [productData, setproductData] = useState(false)


  const [size, setsize] = useState(null) /// select size 


  let ratingImg = <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/4.5_stars.svg/535px-4.5_stars.svg.png' className=' w-20 h-4 ' />

  const fatchProductData = async () => {

    products.map((item) => {
      if (item._id === productId) {
        setproductData(item)


        return null;
      }
    })
  }

  useEffect(() => {
    fatchProductData()
  }, [productId])

  const productSize = (size) => {
    // console.log(size);
    setsize(size)

  }


  return productData ? (
    <div>
      <div className=' border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 flex'>
        {/* product-data */}
        <div className=' flex gap-12 sm:gap-12 sm:flex-row'>
          {
            productData.image.map((e, k) => {
              return (<img src={e} key={k} className='w-[35rem] h-[24rem]' />)
            })
          }
        </div>
        <div className=' mt-1  ml-20 flex flex-col gap-3'>
          <h1><span className=' font-bold'>Name : </span>{productData.name} </h1>
          <div className=' flex items-center text-center  '> <span className=' font-bold'>Rating : </span>{ratingImg}</div>
          <p><span className=' font-bold'>Price : </span> {currency} {productData.price}</p>
          <p><span className=' font-bold'>Description : </span>{productData.description}</p>
          <div className=' flex items-center'>
            <p className=' mt-2 font-bold mr-2'>Select size :</p>
            <div className=' mt-3' >
              <button onClick={() => productSize("M")} className={`ml-1 border border-gray-600  w-8 ${size === "M" ? 'bg-gray-600 text-white' : 'border-gray-600'}`} >M</button>
              <button onClick={() => productSize("X")} className={`ml-1 border border-gray-600  w-8 ${size === "X" ? 'bg-gray-600 text-white' : 'border-gray-600'}`}>X</button>
              <button onClick={() => productSize("L")} className={`ml-1 border border-gray-600  w-8 ${size === "L" ? 'bg-gray-600 text-white' : 'border-gray-600'}`}>L</button>
            </div>
          </div>
          <div>
            <button onClick={() => addToCart(productData._id, size, alert("item added"))} className=' bg-black text-white px-6 py-2 tex-sm active:bg-gray-700 mt-2'> Add To Cart</button>
          </div>
          <hr></hr>
          <p>100% Original Products</p>
          <p>Cash On Delivery Available</p>
        </div>
      </div>
      <div className=' border text-sm border-gray-300 py-5 mt-3 px-3'>
        <p className=' font-bold mb-2 '>Description</p>
        <p>Fake news or information disorder is false or misleading information (misinformation, including disinformation, propaganda, and hoaxes) presented as news.[1] Fake news often has the aim of damaging the reputation of a person or entity, or making money through advertising revenue.[2][3] Although false news has always been spread throughout history, the term fake news was first used in the 1890s when sensational reports in newspapers were common</p>
      </div>
    </div>
  ) : <div className=' opacity-0'></div>
}

export default Product