import { useSelector } from "react-redux";
import CarouselDefault from "./Carousel";
import { RootState } from "../../Redux/store";

const BestSellerItem = () => {
  const { products } = useSelector((state: RootState) => state.loopStore);

  const bestSellerInfo: {
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
    title: "Best Seller Item",
    itemNames: [],
    prices: [],
    redirectButtons: [],
    redirectLinks: [],
    blogDescriptions: [],
    id: 1,
  };
  products.map((product) => {
    if (product.best_seller) {
      // console.log(product.id);
      const shortenedName =
        product.name.length > 10
          ? product.name.slice(0, 8) + "..."
          : product.name;
      bestSellerInfo.images.push(product.images_list[0]);
      bestSellerInfo.itemNames.push(shortenedName);
      bestSellerInfo.prices.push(product.price);
    }
  });
  console.log(bestSellerInfo);
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
    />
  );
};

export default BestSellerItem;
