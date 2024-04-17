import BestSeller1 from "../../assets/image/best-seller-1.jpg";
import BestSeller2 from "../../assets/image/best-seller-2.jpg";
import BestSeller3 from "../../assets/image/best-seller-3.jpg";
import CarouselDefault from "./Carousel";

const TrendingProduct = () => {
  const trendingProductInfo = {
    images: [
      `${BestSeller1}`,
      `${BestSeller2}`,
      `${BestSeller3}`,
      `${BestSeller2}`,
      `${BestSeller2}`,
      `${BestSeller2}`,
      `${BestSeller2}`,
      `${BestSeller2}`,
    ],
    title: "Trending Products",
    itemNames: [
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
    ],
    prices: [12.9, 12.9, 28.72, 12.9, 12.9, 12.9, 12.9, 12.9],
    redirectButtons: ["POPULAR ITEM", "NEW ARRIVAL"],
    redirectLinks: ["/best-sellers", "/new-arrivals"],
    blogDescriptions: [],
    id: 2,
  };
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
