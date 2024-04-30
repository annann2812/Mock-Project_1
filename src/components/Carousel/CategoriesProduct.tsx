import { useSelector } from "react-redux";
import BestSeller1 from "../../assets/image/best-seller-1.jpg";
import BestSeller2 from "../../assets/image/best-seller-2.jpg";
import BestSeller3 from "../../assets/image/best-seller-3.jpg";
import CarouselDefault from "./Carousel";
import { RootState } from "../../Redux/store";

const CategoriesProduct = () => {
  const { products } = useSelector((state: RootState) => state.loopStore);

  const categoriesProductInfo: {
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
    title: "Category Products",
    itemNames: [],
    prices: [],
    redirectButtons: ["ELECTRONICS", "CAMERAS", "SMART-WATCHES"],
    redirectLinks: ["/home/electronics", "/home/cameras", "/home/smartphones"],
    blogDescriptions: [],
    id: 3,
  };
  products.map((product) => {
    if (product.new_arriver) {
      // console.log(product.id);
      const shortenedName =
        product.name.length > 10
          ? product.name.slice(0, 8) + "..."
          : product.name;
      categoriesProductInfo.images.unshift(product.images_list[0]);
      categoriesProductInfo.itemNames.unshift(shortenedName);
      categoriesProductInfo.prices.unshift(product.price);
    }
  });

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
