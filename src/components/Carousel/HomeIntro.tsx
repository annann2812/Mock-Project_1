import React from 'react'
import { IoMdCheckmark } from 'react-icons/io'

const HomeIntro = () => {
  return (
    <div className='flex justify-between w-[90%] px-5 py-3 mx-auto cursor-pointer max-sm:flex-col gap-3 sm:flex-col md:flex-row'>
        <div className="flex items-center">
            <IoMdCheckmark/>
            <p className='font-medium ml-3'>Offical Loop Shop <span className='font-thin '>over 1100 products online</span></p>
        </div>
        <div className="flex items-center">
            <IoMdCheckmark/>
            <p className='font-medium ml-3'>Free shipping and returns for <span className='font-thin '>member</span></p>
        </div>
        <div className="flex items-center">
            <IoMdCheckmark/>
            <p className='font-medium ml-3'>Same-day dispatch <span className='font-thin '>before 8pm (Mon-Fri)</span></p>
        </div>
        
    </div>
  )
}

export default HomeIntro