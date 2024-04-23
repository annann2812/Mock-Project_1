import BestSeller1 from "../../assets/image/best-seller-1.jpg";
import BestSeller2 from "../../assets/image/best-seller-2.jpg";
import BestSeller3 from "../../assets/image/best-seller-3.jpg";
import CarouselDefault from "./Carousel";

const BestSellerItem = () => {
  const bestSellerInfo = {
    // images: [
    //   "https://m.media-amazon.com/images/I/51+3J2SqJRL._AC_SX500_.jpg",
    //   "https://m.media-amazon.com/images/I/41l2imvuWJL._AC_SY395_.jpg",
    //   "https://m.media-amazon.com/images/I/51Cwrg+CuVL._AC_SY395_.jpg",
    //   "https://m.media-amazon.com/images/I/51P5Lw0F8TL._AC_SY395_.jpg",
    //   "https://m.media-amazon.com/images/I/612bDB-gsIL._AC_SX395_.jpg",
    //   "https://m.media-amazon.com/images/I/519cVPdKeqL._AC_SY395_.jpg",
    //   "https://m.media-amazon.com/images/I/613DG4G9lQL._AC_SX395_.jpg",
    //   "https://m.media-amazon.com/images/I/711EPhthmML._AC_SY575_.jpg",
    //   "https://m.media-amazon.com/images/I/813UuOjWfZL._AC_SX395_.jpg",
    // ],
    images: [
      "https://m.media-amazon.com/images/I/51+3J2SqJRL._AC_SX500_.jpg",
      "https://m.media-amazon.com/images/I/51+3J2SqJRL._AC_SX500_.jpg",
      "https://m.media-amazon.com/images/I/51+3J2SqJRL._AC_SX500_.jpg",
      "https://m.media-amazon.com/images/I/51+3J2SqJRL._AC_SX500_.jpg",
      "https://m.media-amazon.com/images/I/51+3J2SqJRL._AC_SX500_.jpg",
      "https://m.media-amazon.com/images/I/51+3J2SqJRL._AC_SX500_.jpg",
      "https://m.media-amazon.com/images/I/51+3J2SqJRL._AC_SX500_.jpg",
      "https://m.media-amazon.com/images/I/51+3J2SqJRL._AC_SX500_.jpg",
      "https://m.media-amazon.com/images/I/51+3J2SqJRL._AC_SX500_.jpg",
    ],
    title: "Best Seller Item",
    itemNames: [
      "Metallic Sneakers",
      "Suede Sandals",
      "Platform Boots",
      "Loafer Mules",
      "Slipper Shoes",
      "Slipper Shoes",
      "Slipper Shoes",
      "Slipper Shoes",
    ],
    prices: [12.9, 12.9, 28.72, 12.9, 12.9, 12.9, 12.9, 12.9, 12.9],
    redirectButtons: [],
    redirectLinks: [],
    blogDescriptions: [],
    id: 1,
  };
  return (
    <CarouselDefault
      images={bestSellerInfo.images}
      itemNames={bestSellerInfo.itemNames}
      prices={bestSellerInfo.prices}
      redirectButtons={bestSellerInfo.redirectButtons}
      redirectLinks={bestSellerInfo.redirectLinks}
      title={bestSellerInfo.title}
      id={bestSellerInfo.id}
      blogDescription={bestSellerInfo.blogDescriptions}
      isNewArrive={false}
    />
  );
};

export default BestSellerItem;
