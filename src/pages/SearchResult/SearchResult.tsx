import React, { Fragment, useState } from 'react'
import ProductList from '../../components/BestSeller_NewArrival-Product/Product'
import Navbar from '../../components/NavBar/NavBar'

const SearchResult = () => {
    const [ result, setResult ] = useState<boolean>(false)
  return (
    <Fragment>
        <Navbar/>
        <div className='px-3 py-5 flex flex-col items-center'>
            <h3 className='uppercase text-2xl font-medium'>Search result</h3>
            {!result ? (
                <p className='mt-6 mb-12 text-[#FC6736]'>OMG! No results for your search...</p>
            ) : (
                // PART TO ADD RESULTS IF POSSIBLE
                <Fragment>
                    <p>asdfghjkl</p>
                </Fragment>
            )}
            <ProductList/>
        </div>
    </Fragment>
  )
}

export default SearchResult