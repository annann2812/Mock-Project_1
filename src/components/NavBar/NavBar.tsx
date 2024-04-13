import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavBg } from '../../../public/styled'


const NavBar = () => {

  return (
    <div className=''>
        <NavBg className="navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm">
            <div className="container">
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav text-light mx-auto">
                        <li className="nav-item">
                        <Link className='nav-link active' to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className='nav-link active hover:text-gray-500' to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                        <Link className='nav-link active' to="/best-sellers">Best Sellers</Link>
                        </li>
                        <li className="nav-item">
                        <Link className='nav-link active' to="/contacts">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                        <Link className='nav-link active' to="/sitemap">Sitemap</Link>
                        </li>
                        <li className="nav-item">
                        <Link className='nav-link active' to="/new-arrivals">New Arrival</Link>
                        </li>
                        <li className="nav-item">
                        <Link className='nav-link active' to="/about">Payment</Link>
                        </li>
                        <li className="nav-item">
                        <Link className='nav-link active' to="/delivery">Delivery</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </NavBg>
    </div>
    // <div className="navbar">
    //     <div className="logo">

    //     </div>
    //     <ul>
    //         <li className="nav-item">
    //         <Link className='nav-link active' to="/">Home</Link>
    //         </li>
    //         <li className="nav-item">
    //         <Link className='nav-link active' to="/blog">Blog</Link>
    //         </li>
    //         <li className="nav-item">
    //         <Link className='nav-link active' to="/best-sellers">Best Sellers</Link>
    //         </li>
    //         <li className="nav-item">
    //         <Link className='nav-link active' to="/contacts">Contact Us</Link>
    //         </li>
    //         <li className="nav-item">
    //         <Link className='nav-link active' to="/sitemap">Sitemap</Link>
    //         </li>
    //         <li className="nav-item">
    //         <Link className='nav-link active' to="/new-arrivals">New Arrival</Link>
    //         </li>
    //         <li className="nav-item">
    //         <Link className='nav-link active' to="/about">Payment</Link>
    //         </li>
    //         <li className="nav-item">
    //         <Link className='nav-link active' to="/delivery">Delivery</Link>
    //         </li>
    //     </ul>
    // </div>
  )
}

export default NavBar