import Headphone from "../../components/Advertisement/Headphone";
import Watches from "../../components/Advertisement/Watches";
import AdsBannerPC from "../../components/Advertisement/AdsBannerPC";
import AdsBannerCamera from "../../components/Advertisement/AdsBannerCamera";
import Categories from "../../components/QuickCategories/Categories";
import BestSellerItem from "../../components/Carousel/BestSellerItem";
import TrendingProduct from "../../components/Carousel/TrendingProduct";
import SpecialProduct from "../../components/Carousel/SpecialProduct";
import LastestBlog from "../../components/Carousel/LastestBlog";
import CategoriesProduct from "../../components/Carousel/CategoriesProduct";
import React, { Fragment } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Header_Footer/Footer";
import Hero from "../../components/Carousel/HeroSlider";
import Header from "../../components/Header_Footer/Header";

const Home = () => {
  return (
    <Fragment>
      <NavBar />
      {/* <Hero /> */}
      <div className="container px-5">
        {/* <Filter />  */}
        <div className="flex gap-6 justify-between my-4 w-full items-center">
          <BestSellerItem />
        </div>
        <TrendingProduct />
        <div className="flex gap-8 mb-4 w-full">
          <AdsBannerPC />
          <AdsBannerCamera />
        </div>
        <CategoriesProduct />
        <Categories />
        <SpecialProduct />
        <LastestBlog />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;
