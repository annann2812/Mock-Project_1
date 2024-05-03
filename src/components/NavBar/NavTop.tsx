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
  const dispatch: AppDispatch = useDispatch();

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
      <nav className="bg-gray-100 border-gray-200 boder border-b">
        <div className=" text-primary-01 flex px-4 md:px-10 py-4 flex-wrap items-center justify-between mx-auto">
          <Link to="/" className="flex items-center">
            <img
              src={logoLoop}
              className="w-[80px] md:w-[120px] transition-all duration-300"
              alt=""
            />
          </Link>
          <form className="w-[40%] md:w-1/2">
            <label
              id="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label>
            <div className="relative">
              <input
                type="search"
                id="default-search"
                className="block w-full py-3 md:py-4 px-3 text-sm text-gray-900 border-2 border-primary-01 rounded-lg bg-gray-50 outline-none focus:border-primary-02 transition-all duration-500"
                placeholder="Search products..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                required
              />

              <button
                onClick={handleSearch}
                type="button"
                className="text-white flex items-center gap-3 absolute right-3 top-1/2 transform -translate-y-1/2 bg-primary-01 hover:bg-opacity-80 focus:ring-4 focus:ring-[#FC6736] font-medium rounded-lg text-sm px-3 py-2"
              >
                <FaSearch />
                <span className="hidden md:block">Search</span>
              </button>
            </div>
          </form>

          <div className="flex items-center gap-3 md:gap-5 relative">
            <div className="flex justify-center items-center">
              <button className="text-xl" onClick={toggleDropdown}>
                <FaUserAlt className="hover:text-primary-02 transition-all duration-300" />
              </button>
            </div>

            <div
              className={`z-20 absolute w-48 top-0 ${
                isDropdownOpen
                  ? "translate-y-10 opacity-100"
                  : "-translate-y-60 opacity-0"
              } right-0 bg-white rounded-lg shadow transition-all duration-500`}
              id="user-dropdown"
            >
              <div className="px-4 py-3 border-b-2">
                <span className="block text-sm text-gray-900">
                  {renderAccount()}
                </span>
              </div>
              <ul className="">
                {userNameAccount === "Name" && (
                  <div>
                    <li>
                      <Link
                        onClick={handleLogin}
                        to="/login"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-300"
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleSignup}
                        to="/signup"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-300"
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
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-b-lg transition-all duration-300"
                  >
                    Log out
                  </Link>
                </li>
              </ul>
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
