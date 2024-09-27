import React, { useContext, useState } from 'react'
import { ShopContext } from '../contaxt/ShopContext'
import Title from '../components/Title'


const Order = () => {

  const { products, currency, } = useContext(ShopContext)

  return (
    <div className=' border-t pt-6'>
      <div className=' text-2xl'>
        <Title text1={"MY"} text2={"ORDER"} />
      </div>
      {
        products.slice(1, 4).map((el, indx) => {
          return (<div key={indx} className=' py-4 border-t border-b text-gray-700 flex flex-col '>
            <div className=' flex  justify-between'>
              <div className=' flex items-start gap-10 text-sm '>
                <img className='w-24 h-28 ' src={el.image[0]} />
                <div>
                  <p className=' text-sm sm:text-lg font-medium'>{el.name}</p>
                  <div className=' flex items-center gap-5 mt-2'>
                    <p className=' font-medium'> PRICE : {currency}{el.price}</p>
                    <p className=' font-medium'>QUANTITY : 2</p>
                    <p className=' px-2 border bg-slate-200 font-medium '> SIZE : M</p>
                  </div>
                  <p className=' mt-2'><span className=' font-bold'> DATE : </span> <span className=' font-medium text-gray-400 '> 23/12/2023 </span></p>
                </div>
              </div>
              <div className='flex items-center  gap-2'>
                <p className=' min-w-2 h-2 rounded-full bg-green-500'></p>
                <p> Redy To Ship</p>
              </div>

              <button onClick={() => alert("Open Your Dour yeah")} className='flex items-center active:bg-gray-300 border border-gray-400  h-10 mt-9 p-2 rounded-md cursor-pointer '>Track Your Order</button>
            </div>
          </div>)
        })
      }
    </div>
  )
}

export default Order