import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../contaxt/ShopContext'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'

const Cart = () => {

  const { products, currency, cartItem, updateQuantity, navigate } = useContext(ShopContext)
  const [cartData, setCartData] = useState([])

  useEffect(() => {
    const tempdata = []
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        if (cartItem[items][item] > 0) {
          tempdata.push({
            _id: items,
            size: item,
            quantity: cartItem[items][item]
          })
        }
      }
    }
    setCartData(tempdata)
  }, [cartItem])

  return (
    <div className="px-4 sm:px-10">
      <div className='border-t pt-14'>
        <div className='text-2xl mb-3'>
          <Title text1={"YOUR"} text2={"CART"} />
        </div>

        {/* Cart Items */}
        {cartData.map((el, indx) => {
          const productData = products.find((ele) => ele._id === el._id)
          return (
            <div key={indx} className='py-4 border-b text-gray-700 grid grid-cols-[3fr_1fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
              <div className='flex items-start gap-4 sm:gap-6'>
                <img className='w-20 h-24 sm:w-24 sm:h-28 object-cover' src={productData.image[0]} alt="product" />
                <div className='flex flex-col gap-2'>
                  <p className='text-sm sm:text-lg font-medium'>{productData.name}</p>
                  <div className='flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5 mt-2'>
                    <p className='text-sm sm:text-base'>PRICE: {currency}{productData.price}</p>
                    <p className='px-2 border bg-slate-200 text-sm sm:text-base font-medium'>SIZE: {el.size}</p>
                  </div>
                </div>
              </div>

              {/* Quantity Input */}
              <input
                onChange={(e) => e.target.value === "" || e.target.value === "0" ? null : updateQuantity(el._id, el.size, Number(e.target.value))}
                className='border w-12 sm:w-20 px-1 sm:px-2 text-sm sm:text-base'
                type='number'
                min={1}
                defaultValue={el.quantity}
              />

              {/* Delete Icon */}
              <img
                onClick={() => updateQuantity(el._id, el.size, 0)}
                className='w-4 h-4 sm:w-5 sm:h-5 cursor-pointer active:bg-zinc-400 rounded-md'
                src={assets.bin_icon}
                alt="delete"
              />
            </div>
          )
        })}
      </div>

      {/* Place Order Button */}
      <div className='flex justify-end'>
        <button
          onClick={() => navigate("/order")}
          className='text-white bg-black active:bg-gray-700 mt-2 py-3 px-6 sm:px-10 rounded-md cursor-pointer'>
          PLACE ORDER
        </button>
      </div>
    </div>
  )
}

export default Cart
