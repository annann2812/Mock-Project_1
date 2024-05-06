import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import Home from "./pages/Home/Home";

import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import BestSellers from "./pages/SalePage/SalePage";
import { useEffect } from "react";
import instance from "../projectLogin/src/service";
import Login from "./components/Account/LogIn";
import PayPage from "./pages/PayPage/PayPage";
// import SpecialCase from "./components/SpecialCase";
import SignUp from "./components/Account/SignUp";
import NewArrivalPage from "./pages/NewArrival/NewArrivalPage";
import ProductCard from "./pages/ProductDetail/ProductDetail";
import SearchResult from "./pages/SearchResult/SearchResult";

import { useDispatch } from "react-redux";
import { setBlogs, setProductList } from "./Redux/ProductSlice";
import LoginWithGG from "./components/Account/LoginWithGG";

import SwiperComponent from "./pages/ProductDetail/SwipperProduct";
import Store from "./pages/Store/Store";

import WishListPage from "./pages/WishList/WishListPage";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const { data } = await instance.get("/products");
      dispatch(setProductList(data));
    })();
    (async () => {
      const { data } = await instance.get("/blog");
      dispatch(setBlogs(data));
    })();
  }, []);
  return (
    <Fragment>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/sale" element={<BestSellers />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/all-items" element={<NewArrivalPage />} />
        <Route path="/products/:id" element={<ProductCard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logingg" element={<LoginWithGG />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/payment" element={<PayPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/swiper" element={<SwiperComponent />} />
        <Route path="/abc" element={<Store />} />
        <Route path="/wishlist" element={<WishListPage />} />
        <Route path="/search" element={<SearchResult />} />
      </Routes>
    </Fragment>
  );
};

export default App;
