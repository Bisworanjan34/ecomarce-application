import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'

const Contact = () => {
  return (
    <div>
      <div className=' text-center text-2xl pt-10 border-t'>
        <Title text1={"Contact"} text2={"Us"} />
        <div className=' my-2 flex flex-col justify-center md:flex-row gap-10 mb-28'>
          <img className='w-1/3 ' src={assets.contact_img} />
          <div className=' flex flex-col justify-center  gap-6 '>
            <p className=' font-semibold text-xl text-gray-600 text-left   '>SAGAR MISHRA</p>
            <p className=' text-gray-500 text-base text-left  '>Frontend developer : <br /> React / Tailwind CSS </p>
            <p className=' text-gray-500 text-base text-left '>Contact : <br /> 8305262223 </p>
            <p className=' text-gray-500 text-base text-left '>Email : <br /> sagarmishra6800gmail.com </p>
            <p className=' text-gray-500 text-base text-left  '>Experience : <br /> Ready To Serve A Service</p>
            <button className=' border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Contact us</button>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Contact