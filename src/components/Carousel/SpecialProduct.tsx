import BestSeller1 from "../../assets/image/best-seller-1.jpg";
import BestSeller2 from "../../assets/image/best-seller-2.jpg";
import BestSeller3 from "../../assets/image/best-seller-3.jpg";
import CarouselDefault from "./Carousel";

const SpecialProduct = () => {
  const specialProductInfo = {
    images: [
      "https://m.media-amazon.com/images/I/61DYj1I-K0L._AC_SX625_.jpg",
      "https://m.media-amazon.com/images/I/71NjblvJxoL._AC_SY395_.jpg",
      "https://m.media-amazon.com/images/I/51JjJGLAqZL._AC_SY395_.jpg",
      "https://m.media-amazon.com/images/I/71nanZ1jE7S._AC_SX395_.jpg",
      "https://m.media-amazon.com/images/I/71iF0c4CiPL._AC_SX395_.jpg",
      "https://m.media-amazon.com/images/I/71+k4l6-opL._AC_SY395_.jpg",
      "https://m.media-amazon.com/images/I/81oOebqz+ML._AC_SX395_.jpg",
      "https://m.media-amazon.com/images/I/71eLQ1bB3QL._AC_SX395_.jpg",
    ],
    title: "SPECIAL PRODUCT",
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
    redirectButtons: [],
    redirectLinks: [],
    id: 4,
    blogDescriptions: [],
  };
  return (
    <CarouselDefault
      images={specialProductInfo.images}
      itemNames={specialProductInfo.itemNames}
      prices={specialProductInfo.prices}
      redirectButtons={specialProductInfo.redirectButtons}
      redirectLinks={specialProductInfo.redirectLinks}
      title={specialProductInfo.title}
      id={specialProductInfo.id}
      blogDescription={specialProductInfo.blogDescriptions}
      isNewArrive={false}
    />
  );
};

export default SpecialProduct;
