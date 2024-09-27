import React from 'react'

function Newsletter() {

    function onSubmitHandeler(e) {
        e.preventDefault()              // it help to no reload to page when submit data in form tag
    }







    return (
        <div className=' text-center'>
            <p className=' text-2xl font-medium text-gray-800'>Subscribe now & get offer</p>
            <p className=' text-gray-400 mt-3 '>
                A paragraph is defined as “a group of sentences or a single sentence that forms a unit”
            </p>
            <form onSubmit={onSubmitHandeler} className=' w-3/5 h-12 sm:1/2 flex items-center gap-3 my-6 mx-auto border pl-3'>
                <input className=' w-full sm:flex-1 outline-none' type='email' placeholder='Enter yor email ' required />
                <button type='submit' className=' bg-black text-white text-xs px-10 py-4 '> Subscribe</button>
            </form>
        </div>
    )
}

export default Newsletter