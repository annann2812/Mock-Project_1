import { Route, Routes } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import Header from "./components/Header_Footer/Header";
import Footer from "./components/Header_Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";

import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import BestSellers from "./pages/BestSellers/BestSellers";
import NewArrival from "./pages/NewArrival/NewArrival";
import BlogPage from "./pages/Blog/Blog";
import { useEffect } from "react";
import instance from "../projectLogin/src/service";

const App = () => {
  useEffect(() => {
    (async () => {
      const { data } = await instance.get("/products");
      console.log(data);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const { data } = await instance.get("/blog");
      console.log(data);
    })();
  }, []);
  return (
    <Fragment>
      <Header />
      <NavBar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/best-sellers" element={<BestSellers />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/new-arrivals" element={<NewArrival />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
