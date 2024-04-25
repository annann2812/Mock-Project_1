import BestSeller1 from "../../assets/image/best-seller-1.jpg";
import BestSeller2 from "../../assets/image/best-seller-2.jpg";
import BestSeller3 from "../../assets/image/best-seller-3.jpg";
import CarouselDefault from "./Carousel";

const TrendingProduct = () => {
  const trendingProductInfo = {
    images: [
      "https://m.media-amazon.com/images/I/81Z5KO2uwnL._AC_SX395_.jpg",
      "https://m.media-amazon.com/images/I/61vcqWfj9WL._AC_SY395_.jpg",
      "https://m.media-amazon.com/images/I/51yc9OqrHsL._AC_SX395_.jpg",
      "https://m.media-amazon.com/images/I/71GaNqL9XkL._AC_SY395_.jpg",
      "https://m.media-amazon.com/images/I/81tc6arDvFL._AC_SX395_.jpg",
      "https://m.media-amazon.com/images/I/71oMOrqXoCL._AC_SX395_.jpg",
      "https://m.media-amazon.com/images/I/61LRAeHEdtL._AC_SY395_.jpg",
      "https://m.media-amazon.com/images/I/511+TfOOujL._AC_SY395_.jpg",
    ],
    title: "Trending Products",
    itemNames: [
      "Wingtip Shoes",
      "Chelsea Sneakers",
      "Chunky Sneakers",
      "Open Toe Booties",
      "Suede Booties",
      "Chelsea Rain Boots",
      "Chelsea Rain Boots",
      "Chelsea Rain Boots",
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
