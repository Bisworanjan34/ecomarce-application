import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = "$";
    const [saerch, setsearch] = useState('')
    const [showSearch, setShowSearch] = useState(false)
    const [cartItem, setCartItem] = useState({})
    const navigate = useNavigate()

    const addToCart = async (itemId, size) => {

        if (!size) {
            alert("add to size")
            return
        }

        let cartdata = structuredClone(cartItem);

        if (cartdata[itemId]) {
            if (cartdata[itemId][size]) {
                cartdata[itemId][size] += 1;
            }
            else {
                cartdata[itemId][size] = 1;
            }
        }
        else {
            cartdata[itemId] = {};
            cartdata[itemId][size] = 1
        }
        setCartItem(cartdata)
    }

    const getCount = () => {
        let totalCount = 0
        for (const items in cartItem) {
            for (const item in cartItem[items]) {
                try {
                    if (cartItem[items][item] > 0) {
                        totalCount += cartItem[items][item]
                    }
                } catch (error) {

                }
            }
        }
        return totalCount;
    }

    useEffect(() => {
        console.log(cartItem);
    }, [cartItem])


    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItem)

        cartData[itemId][size] = quantity

        setCartItem(cartData)
    }

    const value = {
        products, currency,
        saerch, setsearch, showSearch, setShowSearch,
        cartItem, addToCart,
        getCount, updateQuantity
        , navigate
    }


    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}


export default ShopContextProvider; 