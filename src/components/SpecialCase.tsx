import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RiShoppingCart2Fill } from "react-icons/ri";
import { RootState } from '../Redux/store';

const SpecialCase = () => {
    const products = useSelector((state: RootState) => state.loopStore.products)
  return (
    <div className='fixed top-52 right-2 z-20 hidden md:flex flex-col gap-2'>
      <Link to="/cart">
        <div className="bg-[#76885B] w-16 h-[70px] rounded-md flex flex-col gap-1 text-white justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer relative">
          <div className="flex justify-center items-center">
            <RiShoppingCart2Fill className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />

            <RiShoppingCart2Fill className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
          </div>
          <p className="text-xs font-semibold font-titleFont">Buy Now</p>
          {products.length > 0 && (
            <p className="absolute top-1 right-2 bg-[#FC6736] text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
              {products.length}
            </p>
          )}
        </div>
      </Link>
    </div>
  )
}

export default SpecialCase