import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'

const About = () => {
  return (
    <div>
      <div className=' text-2xl text-center pt-4 border-t'>
        <Title text1={"About"} text2={"Us"} />
      </div>
      <div className=' my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src="https://i0.wp.com/joannarahier.com/wp-content/uploads/2023/07/old-money-aesthetic-outfit-6.jpeg?resize=961%2C1200&ssl=1" alt='' />
        <div className=' flex flex-col justify-center gap-6 text-gray-600'>
          <b>About </b>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
          <b>OUR VISION </b>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum</p>
          <b>OUR MISSION </b>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum</p>
        </div>
      </div>
      <div className=' text-4xl py-4'>
        <Title text1={"WHY"} text2={"US"} />
      </div>
      <div className=' flex flex-col md:flex-row text-sm mb-20 gap-20 '>
        <div className=' border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Best Quality </b>
          <p>use a passage of Lorem Ipsum</p>
        </div>
        <div className=' border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b> 24/7 Support </b>
          <p>use a passage of Lorem Ipsum</p>
        </div>
        <div className=' border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Aaaurance</b>
          <p>use a passage of Lorem Ipsum</p>
        </div>
      </div>
      <hr />


    </div>
  )
}

export default About