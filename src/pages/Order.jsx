import React, { useContext } from 'react'
import { ShopContext } from '../contaxt/ShopContext'
import Title from '../components/Title'

const Order = () => {

  const { products, currency } = useContext(ShopContext)

  return (
    <div className='border-t pt-6 px-4 sm:px-10'>
      <div className='text-2xl'>
        <Title text1={"MY"} text2={"ORDER"} />
      </div>
      {
        products.slice(1, 4).map((el, indx) => {
          return (
            <div key={indx} className='py-4 border-t border-b text-gray-700 flex flex-col gap-4'>
              <div className='flex flex-col sm:flex-row justify-between gap-4'>
                <div className='flex gap-4 sm:gap-10'>
                  <img className='w-20 h-24 sm:w-24 sm:h-28 object-cover' src={el.image[0]} alt="product" />
                  <div>
                    <p className='text-base sm:text-lg font-medium'>{el.name}</p>
                    <div className='flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5 mt-2'>
                      <p className='text-sm sm:text-base'>PRICE: {currency}{el.price}</p>
                      <p className='text-sm sm:text-base'>QUANTITY: 2</p>
                      <p className='px-2 border bg-slate-200 text-sm sm:text-base font-medium'>SIZE: M</p>
                    </div>
                    <p className='mt-2'><span className='font-bold'>DATE:</span> <span className='font-medium text-gray-400'>23/12/2023</span></p>
                  </div>
                </div>
                <div className='flex flex-row items-center gap-2'>
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                  <p className='text-sm sm:text-base'>Ready To Ship</p>
                </div>
                <button
                  onClick={() => alert("Open Your Door!")}
                  className='text-sm sm:text-base flex items-center justify-center active:bg-gray-300 border border-gray-400 h-10 sm:mt-9 p-2 rounded-md cursor-pointer'>
                  Track Your Order
                </button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Order
