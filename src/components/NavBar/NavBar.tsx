import React, { useState } from "react";
import Newsletter from "../Newsletter/Newsletter";
import { Link } from "react-router-dom";
import logoLoop from "../../assets/image/LOOP-logo (2).png";
import { FaSearch, FaUserAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";

const NavBar = () => {
  const renderAccount = () => {
    const storedValueAcc = window.sessionStorage.getItem("username");
    const storedValueGG = window.sessionStorage.getItem("usernameGG");

    if (storedValueAcc) {
      return `Hi, ${storedValueAcc}`;
    } else if (storedValueGG) {
      return `Hi, ${storedValueGG}`;
    }
  };
  const products = useSelector((state: RootState) => state.loopStore.products);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isListOpen, setIsListOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleShop = () => {
    setIsListOpen(!isListOpen);
  };
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav className="bg-white border-gray-200 boder border-b dark:bg-gray-900">
      <Newsletter />
      <div className="container max-w-screen- text-[#76885B] flex px-5 py-3 flex-wrap items-center justify-between mx-auto">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logoLoop} className="w-[100px]" alt="" />
        </Link>
        <div className="flex flex-wrap items-center text-base justify-between md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button className="text-[24px]" onClick={toggleDropdown}>
            <FaUserAlt />
          </button>
          {isDropdownOpen && (
            <div
              className="z-50 absolute top-[100px] right-[100px] mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  name
                </span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                  email
                </span>
              </div>
              <ul className="py-2">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign Up
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Log out
                  </a>
                </li>
              </ul>
            </div>
          )}
          <button
            onClick={toggleSearch}
            className="ml-4 mr-2 text-[24px] flex justify-center items-center"
          >
            <FaSearch />
            {isSearchOpen && (
              <div className="z-50 absolute top-[100px] right-[100px] mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <FaSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <span className="sr-only">Search icon</span>
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  className="block w-full py-3 px-7 ml-2 ps-10 outline-none text-sm text-gray-900 rounded-lg"
                  placeholder="Search..."
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            )}
          </button>
          <Link to="/cart">
            <div className="relative ">
              <div className="flex justify-center h-[40px] items-center">
                <HiMiniShoppingBag className="-translate-x-12 text-[28px] group-hover:translate-x-3 transition-transform duration-200" />

                <HiMiniShoppingBag className="-translate-x-3 text-[28px] group-hover:translate-x-12 transition-transform duration-200" />
              </div>
              {/* Assuming 'products' is an array containing items in the cart */}
              {/* Display the number of products in the cart */}
              {products.length > 0 && (
                <p className="absolute top-1 right-2 bg-[#FC6736] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
                  {products.length}
                </p>
              )}
            </div>
          </Link>
        </div>
        <div
          className="items-center  justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium  md:p-0 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 rounded hover:text-[#FC6736] md:bg-transparent md:p-0 md:dark:text-blue-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/best-sellers"
                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-[#FC6736] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Best Sellers
              </Link>
            </li>
            <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <li onClick={toggleShop}>
                <Link
                  to="/"
                  className="flex items-center py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-[#FC6736] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Shop
                  <IoIosArrowDown />
                </Link>
              </li>
              {isListOpen && (
                <div
                  className="z-50 absolute top-[100px] mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="user-dropdown"
                >
                  <ul className="py-2">
                    <li>
                      <Link
                        to="/best-sellers"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Best Sellers
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Sale
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/new-arrivals"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        New Arrival
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-[#FC6736] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
