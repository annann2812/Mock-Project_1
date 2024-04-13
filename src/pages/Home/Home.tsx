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
      {/* <Filter /> */}
      <Headphone />
      <BestSellerItem />
      <Watches />
      <TrendingProduct />
      <AdsBannerPC />
      <AdsBannerCamera />
      <CategoriesProduct />
      <Categories />
      <SpecialProduct />
      <LastestBlog />
    </Layout>
  );
};

export default Home;
