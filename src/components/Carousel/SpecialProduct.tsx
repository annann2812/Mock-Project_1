import BestSeller1 from "../../assets/image/best-seller-1.jpg";
import BestSeller2 from "../../assets/image/best-seller-2.jpg";
import BestSeller3 from "../../assets/image/best-seller-3.jpg";
import CarouselDefault from "./Carousel";

const SpecialProduct = () => {
  const specialProductInfo = {
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
    title: "SPECIAL PRODUCT",
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
