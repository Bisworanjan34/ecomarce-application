import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../contaxt/ShopContext'
import { assets } from '../assets/frontend_assets/assets'
import { useLocation } from 'react-router-dom'

function SearchBar() {
    const { saerch, setsearch, showSearch, setShowSearch } = useContext(ShopContext)
    const [visible, setvisible] = useState(false)
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes("collection")) {
            setvisible(true)
        } else {
            setvisible(false)
        }

    }, [location])

    return showSearch && visible ? (
        <div className=' border-t border-b bg-gray-50 text-center'>
            <div className=' inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 '>
                <input value={saerch} onChange={(e) => setsearch(e.target.value)} type='text' className='flex-1 outline-none bg-inherit text-sm ' placeholder='Search' />
                <img src={assets.search_icon} className='w-4' />
            </div>
            <img onClick={(e) => setShowSearch(false)} className='inline cursor-pointer w-3' src={assets.cross_icon} />
        </div>
    ) : null
}

export default SearchBar