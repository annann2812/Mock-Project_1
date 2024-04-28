import React, { useState } from "react";
import Newsletter from "../Newsletter/Newsletter";
import { Link, useNavigate } from "react-router-dom";
import logoLoop from "../../assets/image/LOOP-logo (2).png";
import { FaSearch, FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { setProductSearch } from "../../Redux/ProductSlice";

interface ProductProps {
  image: string | undefined;
  id?: number;
  name: string;
  decription: string;
  color: string;
  size: string;
  branch: string;
  price: number;
  discount: {
    is_discount: boolean;
    price_discount: string;
  };
  images_list: string[];
  best_seller: boolean;
  new_arriver: boolean;
  quantity?: number;
  shipping?: boolean;
}
const NavBar = () => {
  const products = useSelector((state: RootState) => state.loopStore.addToCart);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isListOpen, setIsListOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleShop = () => {
    setIsListOpen(!isListOpen);
  };

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
  const userNameAccount = renderAccount();
  // console.log(userNameAccount);
  const handleLogOut = () => {
    const isConfirm = confirm("Do you want to log out?");
    if (isConfirm) {
      window.sessionStorage.clear();
      window.location.reload();
    }
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
    <nav className="bg-white border-gray-200 overflow-x-hidden boder border-b dark:bg-gray-900">
      <Newsletter />
      <div className="container max-w-screen- text-[#76885B]  flex px-5 py-3 flex-wrap items-center justify-between mx-auto">
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
              className="z-50 absolute top-[100px] right-[400px] mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  {renderAccount()}
                </span>
              </div>
              <ul className="py-2">
                {userNameAccount === "Name" && (
                  <div>
                    <li>
                      <a
                        onClick={handleLogin}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Login
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={handleSignup}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Sign Up
                      </a>
                    </li>
                  </div>
                )}
                <li>
                  <a
                    onClick={handleLogOut}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Log out
                  </a>
                </li>
              </ul>
            </div>
          )}
          <div>
            <TextField
              className="mx-3 p-0"
              size="small"
              id="outlined-basic"
              placeholder="Search watch ..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              InputProps={{
                endAdornment: (
                  <Button onClick={handleSearch} disableRipple={true}>
                    <FaSearch
                      className="text-[#76885B]"
                      style={{ fontSize: "20px" }}
                    />
                  </Button>
                ),
                style: { margin: 0 }, // Đặt margin bằng 0 để button nằm sát bên phải của ô input
              }}
            />
          </div>
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
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium  md:p-0 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
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
                Watches
              </Link>
            </li>
            <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <li onClick={toggleShop}>
                <Link
                  to="/"
                  className="flex items-center block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-[#FC6736] md:p-0"
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
                        className="block px-4 py-2 text-sm text-[#76885B] hover:bg-gray-100"
                      >
                        Best Sellers
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="block px-4 text-[#76885B] py-2 text-sm hover:bg-gray-100"
                      >
                        Sale
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/new-arrivals"
                        className="block px-4 py-2 text-sm text-[#76885B] hover:bg-gray-100 "
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
                className="block py-2 px-3 text-[#76885B] rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-[#FC6736] md:p-0"
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
