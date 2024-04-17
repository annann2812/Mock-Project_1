import Layout from "../../Layout/Layout";
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

const Home = () => {
  return (
    <Layout>
      <Filter />
      <div className="flex gap-6 justify-between my-4 w-full items-center">
        <Headphone />
        <BestSellerItem />
        <Watches />
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
    </Layout>
  );
};

export default Home;
