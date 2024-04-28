import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import Home from "./pages/Home/Home";

import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import BlogPage from "./pages/Blog/Blog";
import { useEffect } from "react";
import instance from "../projectLogin/src/service";
import Login from "./components/Account/LogIn";
import PayPage from "./pages/PayPage/PayPage";
import SpecialCase from "./components/SpecialCase";
import SignUp from "./components/Account/SignUp";
import NewArrivalPage from "./pages/NewArrival/NewArrivalPage";
import ProductCard from "./pages/ProductDetail/ProductDetail";
import ButtonScroll from "./components/ButtonScroll";
import { useDispatch } from "react-redux";
import { setBlogs, setProductList } from "./Redux/ProductSlice";
import BestSellerPage from "./pages/BestSellers/BestSellers";
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
      {/* <Newsletter/> */}
      <SpecialCase />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/best-sellers" element={<BestSellerPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/new-arrivals" element={<NewArrivalPage />} />
        <Route path="/products/:id" element={<ProductCard />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/payment" element={<PayPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <ButtonScroll />
    </Fragment>
  );
};

export default App;
