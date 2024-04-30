import { useSelector } from "react-redux";
import Blog1 from "../../assets/image/blog-1.png";
import Blog2 from "../../assets/image/blog-2.png";
import Blog3 from "../../assets/image/blog-3.png";
import Blog4 from "../../assets/image/blog-4.png";
import CarouselDefault from "./Carousel";
import { RootState } from "../../Redux/store";

const LastestBlog = () => {
  const { products } = useSelector((state: RootState) => state.loopStore);

  const lastestBlogInfo: {
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
    title: "Lastest Blogs",
    itemNames: [],
    prices: [],
    redirectButtons: [],
    redirectLinks: [],
    blogDescriptions: [],
    id: 5,
  };
  products.map((product) => {
    if (product.best_seller) {
      // console.log(product.id);
      const shortenedName =
        product.name.length > 10
          ? product.name.slice(0, 8) + "..."
          : product.name;
      lastestBlogInfo.images.push(product.images_list[0]);
      lastestBlogInfo.itemNames.push(shortenedName);
      lastestBlogInfo.prices.push(product.price);
    }
  });

  return (
    <CarouselDefault
      images={lastestBlogInfo.images}
      itemNames={lastestBlogInfo.itemNames}
      prices={lastestBlogInfo.prices}
      redirectButtons={lastestBlogInfo.redirectButtons}
      redirectLinks={lastestBlogInfo.redirectLinks}
      title={lastestBlogInfo.title}
      id={lastestBlogInfo.id}
      blogDescription={lastestBlogInfo.blogDescriptions}
      isNewArrive={false}
    />
  );
};

export default LastestBlog;
