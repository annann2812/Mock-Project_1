import { useSelector } from "react-redux";
import BestSeller1 from "../../assets/image/best-seller-1.jpg";
import BestSeller2 from "../../assets/image/best-seller-2.jpg";
import BestSeller3 from "../../assets/image/best-seller-3.jpg";
import CarouselDefault from "./Carousel";
import { RootState } from "../../Redux/store";

const TrendingProduct = () => {
  const { products } = useSelector((state: RootState) => state.loopStore);

  const trendingProductInfo: {
    images: string[]; // Chỉ định kiểu dữ liệu của mảng images là string[]
    title: string;
    itemNames: string[];
    prices: number[];
    redirectButtons: any[]; // Hoặc bạn có thể chỉ định kiểu dữ liệu cụ thể cho mảng redirectButtons
    redirectLinks: any[]; // Hoặc bạn có thể chỉ định kiểu dữ liệu cụ thể cho mảng redirectLinks
    blogDescriptions: string[];
    id: number;
  } = {
    images: [], // Khởi tạo mảng images rỗng
    title: "Trending Product",
    itemNames: [],
    prices: [],
    redirectButtons: ["POPULAR ITEM", "NEW ARRIVAL"],
    redirectLinks: ["/all-items", "/sale"],
    blogDescriptions: [],
    id: 2,
  };
  products.map((product) => {
    if (product.new_arriver) {
      trendingProductInfo.images.push(product.images_list[0]);
      trendingProductInfo.itemNames.push(product.name);
      trendingProductInfo.prices.push(product.price);
    }
  });

  return (
    <CarouselDefault
      images={trendingProductInfo.images}
      itemNames={trendingProductInfo.itemNames}
      prices={trendingProductInfo.prices}
      redirectButtons={trendingProductInfo.redirectButtons}
      redirectLinks={trendingProductInfo.redirectLinks}
      title={trendingProductInfo.title}
      id={trendingProductInfo.id}
      blogDescription={trendingProductInfo.blogDescriptions}
      isNewArrive={false}
    />
  );
};

export default TrendingProduct;
