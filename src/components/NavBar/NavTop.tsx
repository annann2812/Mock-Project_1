import React, { Fragment, useState } from "react";
import Newsletter from "../Newsletter/Newsletter";
import { Link, useNavigate } from "react-router-dom";
import logoLoop from "../../assets/image/LOOP-logo (2).png";
import { FaHeart, FaSearch, FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/store";
import { setProductSearch } from "../../Redux/ProductSlice";
import { ShoppingBagIcon } from "@heroicons/react/20/solid";

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
const NavTop = () => {
  const { products } = useSelector((state: RootState) => state.loopStore);
  const productCart = useSelector(
    (state: RootState) => state.loopStore.addToCart
  );
  console.log(productCart);
  const productsWishList = useSelector(
    (state: RootState) => state.loopStore.addToWishlist
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch:AppDispatch = useDispatch();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
          ?.trim()
          ?.replace(/\s+/g, "")
          .toLowerCase()
          .indexOf(keyword) !== -1 ||
        product.branch
          ?.trim()
          ?.replace(/\s+/g, "")
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
      event.preventDefault();
      handleSearch();
    }
  };
  return (
    <Fragment>
      <Newsletter />
      <nav className="bg-gray-100 border-gray-200 overflow-x-hidden boder border-b dark:bg-gray-900">
        <div className="container max-w-screen text-[#76885B]  flex px-10 py-4 flex-wrap items-center justify-between mx-auto">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logoLoop} className="w-[120px]" alt="" />
          </Link>
          <form className="w-[50%] mx-auto">
            <label
              id="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <input
                type="search"
                id="default-search"
                className="block w-full py-4 px-2 ps-10 text-sm text-gray-900 border border-[#76885B] rounded-lg bg-gray-50 outline-none focus:ring-[#FC7636]"
                placeholder="Search products..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                required
              />

              <button
                onClick={handleSearch}
                type="button"
                className="text-white mr-2 flex items-center gap-3 absolute end-2.5 top-1/2 transform -translate-y-1/2 bg-[#76885B] hover:bg-opacity-80 focus:ring-4 focus:ring-[#FC6736] font-medium rounded-lg text-sm px-3 py-2"
              >
                <FaSearch />
                Search
              </button>
            </div>
          </form>

          <div className="flex items-center gap-5">
            <div className="flex justify-center items-center">
              <button className="text-xl" onClick={toggleDropdown}>
                <FaUserAlt className="hover:text-primary-02 transition-all duration-300" />
              </button>
              {isDropdownOpen && (
                <div
                  className="z-50 absolute top-[100px] right-[200px] mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
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
                          <Link
                            onClick={handleLogin}
                            to="/login"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                          >
                            Login
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={handleSignup}
                            to="/signup"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                          >
                            Sign Up
                          </Link>
                        </li>
                      </div>
                    )}
                    <li>
                      <Link
                        onClick={handleLogOut}
                        to="/"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Log out
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <Link to="/cart">
              <div className="relative">
                <ShoppingBagIcon className="text-xl h-6 w-6 hover:text-primary-02 transition-all duration-300" />
                {productCart.length > 0 && (
                  <p className="absolute -top-1 right-1 bg-[#FC6736] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold translate-x-3">
                    {productCart.length}
                  </p>
                )}
              </div>
            </Link>
            <Link to="/wishlist">
              <div className="relative">
                <FaHeart className="text-2xl h-6 w-6 hover:text-primary-02 transition-all duration-300" />
                {productsWishList.length > 0 && (
                  <p className="absolute -top-1 right-1 bg-[#FC6736] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold translate-x-3">
                    {productsWishList.length}
                  </p>
                )}
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavTop;