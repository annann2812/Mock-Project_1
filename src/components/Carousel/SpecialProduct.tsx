import { useSelector } from "react-redux";
import BestSeller1 from "../../assets/image/best-seller-1.jpg";
import BestSeller2 from "../../assets/image/best-seller-2.jpg";
import BestSeller3 from "../../assets/image/best-seller-3.jpg";
import CarouselDefault from "./Carousel";
import { RootState } from "../../Redux/store";

const SpecialProduct = () => {
  const { products } = useSelector((state: RootState) => state.loopStore);

  const specialProductInfo: {
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
    title: "SPECIAL PRODUCT",
    itemNames: [],
    prices: [],
    redirectButtons: [],
    redirectLinks: [],
    blogDescriptions: [],
    id: 4,
  };
  products.map((product) => {
    if (product.best_seller) {
      // console.log(product.id);
      const shortenedName =
        product.name.length > 10
          ? product.name.slice(0, 8) + "..."
          : product.name;
      specialProductInfo.images.unshift(product.images_list[0]);
      specialProductInfo.itemNames.unshift(shortenedName);
      specialProductInfo.prices.unshift(product.price);
    }
  });

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
