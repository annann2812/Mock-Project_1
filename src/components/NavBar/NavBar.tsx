<<<<<<< HEAD
import { useState } from "react";
import Newsletter from "../Newsletter/Newsletter";
import { Link, useNavigate } from "react-router-dom";
import logoLoop from "../../assets/image/LOOP-logo (2).png";
import { FaSearch, FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { IoIosArrowDown } from "react-icons/io";
import { ShoppingBagIcon } from "@heroicons/react/20/solid";
import { setProductSearch } from "../../Redux/ProductSlice";
=======
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import NavTop from "./NavTop";
>>>>>>> origin/Fix-App

const NavBar = () => {
<<<<<<< HEAD
  // new

  const navigate = useNavigate();
  // console.log(renderUser);
  const renderAccount = () => {
    const storedValueAcc = window.sessionStorage.getItem("username");
    const storedValueGG = window.sessionStorage.getItem("usernameGG");

    if (storedValueAcc) {
      return `Hi, ${storedValueAcc}`;
    } else if (storedValueGG) {
      return `Hi, ${storedValueGG}`;
    } else {
      return "Name";
    }
  };
  const products = useSelector((state: RootState) => state.loopStore.products);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isListOpen, setIsListOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const dispatch = useDispatch()

  const toggleShop = () => {
    setIsListOpen(!isListOpen);
    setIsDropdownOpen(false);
    setIsSearchOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsListOpen(false);
    setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsListOpen(false);
    setIsDropdownOpen(false);
  };

  const handleLogin = () => {
    navigate("/login");
  };
  const handleSignup = () => {
    navigate("/signup");
  };
  // hieu

  // search
  const [inputValue, setInputValue] = useState("");

  function searchProduct(products: ProductProps[], inputValue: string) {
    if (inputValue.trim() === "") {
      return [];
    }
    const keyword = inputValue.trim().replace(/\s+/g, "").toLowerCase();
    return products.filter((product) => {
      return (
        product.name
          .trim()
          .replace(/\s+/g, "")
          .toLowerCase()
          .indexOf(keyword) !== -1 ||
        product.branch
          .trim()
          .replace(/\s+/g, "")
          .toLowerCase()
          .indexOf(keyword) !== -1
      );
    });
  }
  const handleSearch = () => {
    const results = searchProduct(products, inputValue);
    dispatch(setProductSearch(results));

    navigate("/search");
  };
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <nav className="bg-secondary-03">
      <Newsletter />
      <div className="w-full lg:w-[90%] text-primary-01 flex py-4 px-5 items-center justify-between mx-auto transition-all duration-300">
        <Link to="/" className="flex items-center h-12">
          <img src={logoLoop} className="object-cover h-full" alt="logo" />
        </Link>
        <div className="items-center flex" id="navbar-user">
          <Link
            to="/"
            className="block px-4 rounded hover:text-primary-02 font-semibold"
          >
            Home
          </Link>
          <Link
            to="/best-sellers"
            className="block px-4 rounded hover:text-primary-02 font-semibold"
          >
            Best Sellers
          </Link>
          <Link
            to="/contact"
            className="block  px-4 rounded hover:text-primary-02 font-semibold"
          >
            Contact
          </Link>
          <div className="flex items-center relative">
            <Link
              to=""
              className="flex items-center px-3 gap-1 rounded hover:text-primary-02 font-semibold"
              onClick={toggleShop}
            >
              <span>Shop</span>
              <IoIosArrowDown />
            </Link>
            <div
              className={`z-20 absolute h-fit ${
                isListOpen
                  ? "translate-y-14 opacity-100"
                  : "-translate-y-40 opacity-0"
              } top-0 w-48 bg-white rounded-lg shadow-xl flex flex-col transition-all duration-500 overflow-hidden`}
              id="user-dropdown"
            >
              <Link
                to="/best-sellers"
                className="flex text-sm hover:bg-gray-100 p-3 font-medium"
              >
                Best Sellers
              </Link>
              <Link
                to="/"
                className="flex text-sm hover:bg-gray-100 p-3 font-medium"
              >
                Sale
              </Link>
              <Link
                to="/new-arrivals"
                className="flex text-sm hover:bg-gray-100 p-3 font-medium"
              >
                New Arrival
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 relative">
          <div className="flex justify-center items-center">
            <button className="text-xl" onClick={toggleDropdown}>
              <FaUserAlt className="hover:text-primary-02 transition-all duration-300" />
            </button>
            <div
              className={`z-20 absolute h-fit ${
                isDropdownOpen
                  ? "translate-y-14 opacity-100"
                  : "-translate-y-40 opacity-0"
              } top-0 w-48 bg-white rounded-lg shadow-xl flex flex-col transition-all duration-500 overflow-hidden`}
              id="user-dropdown"
            >
              <div className="py-3 px-4 border-b-[1px] border-black">
                <span className="block text-sm text-black">name</span>
              </div>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-300"
              >
                Login
              </a>

              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-300"
              >
                Sign Up
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-300 rounded-b-lg"
              >
                Log out
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button onClick={toggleSearch} className="text-xl">
              <FaSearch className="hover:text-primary-02 transition-all duration-300" />

              <div
                className={`z-20 absolute h-fit ${
                  isSearchOpen
                    ? "translate-y-14 opacity-100"
                    : "-translate-y-40 opacity-0"
                } top-0 right-0 w-32 md:w-60 bg-white rounded-lg shadow-xl flex flex-col transition-all duration-500 overflow-hidden`}
              >
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <FaSearch className=" text-gray-500" />
                  <span className="sr-only">Search icon</span>
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  className="block py-3 px-7 ml-2 ps-10 outline-none text-sm text-gray-900 rounded-lg"
                  placeholder="Search..."
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </button>
          </div>
          <Link to="/cart">
            <div className="relative">
              <ShoppingBagIcon className="text-2xl h-6 w-6 hover:text-primary-02 transition-all duration-300" />
              {/* Assuming 'products' is an array containing items in the cart */}
              {/* Display the number of products in the cart */}
              {products.length > 0 && (
                <p className="absolute -top-1 right-1 bg-[#FC6736] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold translate-x-3">
                  {products.length}
                </p>
              )}
            </div>
          </Link>
        </div>
      </div>
    </nav>
=======
 
  return (
    <Fragment>
      <NavTop />
      <nav className="bg-white border-gray-200 boder border-b dark:bg-gray-900">
        <div className="container max-w-screen- text-[#76885B]  flex px-5 py-2 text-center flex-wrap items-center justify-between mx-auto">
          <ul className="flex mx-auto font-medium  md:p-0 rounded-lg md:space-x-8">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-[#76885B] rounded hover:text-[#FC6736] md:bg-transparent md:p-0"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/all-items"
                className="block py-2 px-3 text-[#76885B] rounded  md:hover:bg-transparent hover:text-[#FC6736] md:p-0"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/sale"
                className="block py-2 px-3 text-[#76885B] rounded  md:hover:bg-transparent hover:text-[#FC6736] md:p-0"
              >
                Sale
              </Link>
            </li>
            <li>
              <Link
                to="/payment"
                className="block py-2 px-3 text-[#76885B] rounded  md:hover:bg-transparent hover:text-[#FC6736] md:p-0"
              >
                Payment
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 text-[#76885B] rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-[#FC6736] md:p-0"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
>>>>>>> origin/Fix-App
  );
};

export default NavBar;

{
  /* <nav className="bg-white border-gray-200 boder border-b">
  <Newsletter />
  <div className="container max-w-screen- text-primary-01 flex px-5 py-3 flex-wrap items-center justify-between mx-auto">
    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={logoLoop} className="w-[100px]" alt="" />
    </Link>
    <div className="flex flex-wrap items-center justify-between md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
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
            <HiMiniShoppingBag className="-translate-x-3 text-[28px] group-hover:translate-x-12 transition-transform duration-200" />
          </div>
          {/* Assuming 'products' is an array containing items in the cart */
}
{
  /* Display the number of products in the cart */
}
//           {products.length > 0 && (
//             <p className="absolute top-1 right-2 bg-[#FC6736] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
//               {products.length}
//             </p>
//           )}
//         </div>
//       </Link>
//     </div>
//     <div
//       className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
//       id="navbar-user"
//     >
//       <ul className="flex flex-col font-medium  md:p-0 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
//         <li>
//           <Link
//             to="/"
//             className="block py-2 px-3 rounded hover:text-[#FC6736] md:bg-transparent md:p-0 md:dark:text-blue-500"
//           >
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/best-sellers"
//             className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-[#FC6736] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//           >
//             Best Sellers
//           </Link>
//         </li>
//         <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//           <li onClick={toggleShop}>
//             <Link
//               to="/"
//               className="flex items-center py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-[#FC6736] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//             >
//               Shop
//               <IoIosArrowDown />
//             </Link>
//           </li>
//           {isListOpen && (
//             <div
//               className="z-50 absolute top-[100px] mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
//               id="user-dropdown"
//             >
//               <ul className="py-2">
//                 <li>
//                   <Link
//                     to="/best-sellers"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                   >
//                     Best Sellers
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                   >
//                     Sale
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/new-arrivals"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                   >
//                     New Arrival
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>
//         <li>
//           <Link
//             to="/contact"
//             className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-[#FC6736] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//           >
//             Contact
//           </Link>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>; */}
