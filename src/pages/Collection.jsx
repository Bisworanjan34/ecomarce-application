import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contaxt/ShopContext";
import { assets } from "../assets/admin_assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, saerch, showSearch } = useContext(ShopContext); // Fetching products from ShopContext

  const [shopFilter, setShopFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]); // State to hold newProduct products

  const [category, setCategory] = useState([]); // Holds selected categories
  const [subCategory, setSubCategory] = useState([]); // Holds selected subcategories
  const [shortPrice, setshortPrice] = useState("relavent");  // holds short price

  //*********** Toggle function for category selection
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  //**********  Toggle function for subcategory selection
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  //********** Function to filter products based on category and subcategory
  const applyFilter = () => {
    let newProduct = products.slice(); // Make a shallow copy of products

    //********** search item

    if (showSearch && saerch) {
      newProduct = newProduct.filter(e => e.name.toLowerCase().includes(saerch.toLowerCase()))
      console.log(newProduct);

    }

    //********** Apply category filter
    if (category.length > 0) {
      newProduct = newProduct.filter((item) => category.includes(item.category));
    }

    //********** Apply subcategory filter
    if (subCategory.length > 0) {
      newProduct = newProduct.filter((e) => subCategory.includes(e.subCategory));
    }


    // Update newProduct products state
    setFilterProduct(newProduct);
  };

  //********** Apply filters when category, subCategory, or products change
  useEffect(() => {
    applyFilter();
  }, [category, subCategory, products, saerch]);




  //********** Rate to price

  const sortProduct = () => {

    let fpCopy = filterProduct.slice()

    switch (shortPrice) {
      case "low-high":
        setFilterProduct(fpCopy.sort((a, b) => (a.price - b.price)))
        break;

      case "high-low":
        setFilterProduct(fpCopy.sort((a, b) => (b.price - a.price)))
        break;

      default:
        applyFilter();
        break
    }
  }


  useEffect(() => {
    sortProduct()
  }, [shortPrice])




  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter option on the left side */}
      <div className="min-w-60">
        <p
          onClick={() => setShopFilter(!shopFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTER
          <img
            className={`h-3 sm:hidden ${shopFilter ? "rotate-90" : ""}`}
            src={assets.add_icon}
          />
        </p>

        {/* Category filter */}
        <div
          className={`border border-gray-400 pl-5 py-3 mt-6 ${shopFilter ? "" : "hidden"
            } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORY</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="Men"
                onChange={toggleCategory}
              />{" "}
              MEN
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="Women"
                onChange={toggleCategory}
              />{" "}
              WOMEN
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="Kids"
                onChange={toggleCategory}
              />{" "}
              KIDS
            </p>
          </div>
        </div>

        {/* SubCategory filter */}
        <div
          className={`border border-gray-400 pl-5 py-3 my-6 ${shopFilter ? "" : "hidden"
            } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="Topwear"
                onChange={toggleSubCategory}
              />{" "}
              TopWear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="Bottomwear"
                onChange={toggleSubCategory}
              />{" "}
              BottomWear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="Winterwear"
                onChange={toggleSubCategory}
              />{" "}
              WinterWear
            </p>
          </div>
        </div>
      </div>

      {/* Product display on the right side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1="All" text2="Collection" />
          {/* Sort products */}
          <select onChange={(e) => setshortPrice(e.target.value)} className="border border-gray-300 text-sm px-2">
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low-High</option>
            <option value="high-low">Sort by: High-Low</option>
          </select>
        </div>

        {/* Display newProduct products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filterProduct.length > 0 ? (
            filterProduct.map((el, indx) => (
              <ProductItem
                key={indx}
                name={el.name}
                id={el._id}
                price={el.price}
                image={el.image}
              />
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
