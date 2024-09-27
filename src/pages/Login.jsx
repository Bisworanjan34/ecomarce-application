import React, { useState } from 'react'

const Login = () => {
  const [currentstate, setcurrentstate] = useState("Sing Up")

  const onSubmit = async (event) => {
    event.preventDefault()
    alert("backend Soon")
  }





  return (
    <form onSubmit={onSubmit} className=' flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800   '>
      <div className=' inline-flex items-center gap-2 mb-2 mt-10'>
        <p className=' prata-regular text-3xl  '>{currentstate}</p>
        <hr className=' border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentstate === "login" ? "" : <input type='text' className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required />}
      <input type='Email' className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required />
      <input type='password' className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required />
      <div className=' w-full flex justify-between text-sm mt-[-8px]'>
        <p className=' cursor-pointer'> frogot you password ?</p>
        {currentstate === "login" ?
          <p onClick={() => setcurrentstate("Sing Up")} className=' cursor-pointer'> create your account</p> :
          <p onClick={() => setcurrentstate("login")} className=' cursor-pointer'>Login Here</p>}
      </div>
      <button className=' bg-black text-white font-light px-8 py-2 mt-4 active:bg-gray-700 rounded-md  ' > {currentstate === "Sing Up" ? "Sing In" : "Login"}</button>
    </form>
  )
}

export default Login