import BestSeller1 from "../../assets/image/best-seller-1.jpg";
import BestSeller2 from "../../assets/image/best-seller-2.jpg";
import BestSeller3 from "../../assets/image/best-seller-3.jpg";
import CarouselDefault from "./Carousel";

const CategoriesProduct = () => {
  const categoriesProductInfo = {
    images: [
      "https://m.media-amazon.com/images/I/51s8yBzNHDL._AC_SY395_.jpg",
      "https://m.media-amazon.com/images/I/51F8HlwvhTL._AC_SY395_.jpg",
      "https://m.media-amazon.com/images/I/51kHV9dpWBL._AC_SY625_.jpg",
      "https://m.media-amazon.com/images/I/51Prnon4QpL._AC_SX395_.jpg",
      "https://m.media-amazon.com/images/I/71JOqdGkcbL._AC_SY395_.jpg",
      "https://m.media-amazon.com/images/I/71H9AI109eL._AC_SX395_.jpg",
      "https://m.media-amazon.com/images/I/71QzzETE6ML._AC_SX395_.jpg",
      "https://m.media-amazon.com/images/I/71y-7jzv9RL._AC_SX395_.jpg",
    ],
    title: "Category Products",
    itemNames: [
      "Slipper Shoes",
      "Bow Flats",
      "Slip-On Sneakers",
      "Woven Flats",
      "Wingtip Shoes",
      "Wingtip Shoes",
      "Wingtip Shoes",
      "Wingtip Shoes",
    ],
    prices: [12.9, 12.9, 28.72, 12.9, 12.9, 12.9, 12.9, 12.9],
    redirectButtons: ["ELECTRONICS", "CAMERAS", "SMART-WATCHES"],
    redirectLinks: ["/home/electronics", "/home/cameras", "/home/smartphones"],
    blogDescriptions: [],
    id: 3,
  };
  return (
    <CarouselDefault
      images={categoriesProductInfo.images}
      itemNames={categoriesProductInfo.itemNames}
      prices={categoriesProductInfo.prices}
      redirectButtons={categoriesProductInfo.redirectButtons}
      redirectLinks={categoriesProductInfo.redirectLinks}
      title={categoriesProductInfo.title}
      id={categoriesProductInfo.id}
      blogDescription={categoriesProductInfo.blogDescriptions}
      isNewArrive={false}
    />
  );
};

export default CategoriesProduct;
