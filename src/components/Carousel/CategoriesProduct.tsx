import BestSeller1 from "../../assets/image/best-seller-1.jpg";
import BestSeller2 from "../../assets/image/best-seller-2.jpg";
import BestSeller3 from "../../assets/image/best-seller-3.jpg";
import CarouselDefault from "./Carousel";

const CategoriesProduct = () => {
  const categoriesProductInfo = {
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
    title: "Category Products",
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
