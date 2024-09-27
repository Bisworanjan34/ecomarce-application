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
    setCartData(tempdata);


  }, [cartItem])


  return (
    <div>
      <div className=' border-t pt-14'>
        <div className=' text-2xl mb-3'>
          <Title text1={"YOUR"} text2={"CART"} />
        </div>
        {
          cartData.map((el, indx) => {
            const productData = products.find((ele) => ele._id === el._id);
            return (
              <div key={indx} className=' py-4 border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4  '>
                <div className=' flex items-start gap-6'>
                  <img className=' w-24 h-28' src={productData.image[0]} />
                  <div>
                    <p className=' text-sm sm:text-lg font-medium'>{productData.name}</p>
                    <div className=' flex items-center gap-5 mt-2'>
                      <p> PRICE : {currency}{productData.price}</p>
                      <p className=' px-2 border bg-slate-200 font-medium '> SIZE : {el.size}</p>
                    </div>
                  </div>
                </div>
                <input onChange={(e) => e.target.value === "" || e.target.value === "0" ? null : updateQuantity(el._id, el.size, Number(e.target.value))} className=' border max-w-10 sm:max-w-20 px-1 sm:px-2' type='number' min={1} defaultValue={el.quantity} />
                <img onClick={() => updateQuantity(el._id, el.size, 0)} className='w-4 mr-4 cursor-pointer  active:bg-zinc-400 rounded-md  ' src={assets.bin_icon} />
              </div>
            )
          })
        }


      </div>
      <div className=' flex justify-end'>
        <button onClick={() => navigate("/order")} className=' flex justify-end text-white bg-black active:bg-gray-700 mt-2 py-3 px-3 rounded-md cursor-pointer '>PLACE ORDER</button>
      </div>
    </div>
  )
}

export default Cart