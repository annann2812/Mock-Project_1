import Blog1 from "../../assets/image/blog-1.png";
import Blog2 from "../../assets/image/blog-2.png";
import Blog3 from "../../assets/image/blog-3.png";
import Blog4 from "../../assets/image/blog-4.png";
import CarouselDefault from "./Carousel";

const LastestBlog = () => {
  const lastestBlogInfo = {
    images: [
      "https://m.media-amazon.com/images/I/71ABbKDy8+L._AC_SX395_.jpg",
      "https://m.media-amazon.com/images/I/51T5UfUe5nL._AC_SY395_.jpg",
      "https://m.media-amazon.com/images/I/81eOPVSz+lL._AC_SX395_.jpg",
      "https://m.media-amazon.com/images/I/71C4sYiscYL._AC_SY395_.jpg",
    ],
    title: "Lastest Blogs",
    itemNames: [],
    prices: [12.9, 12.9, 28.72, 12.9],
    redirectButtons: [],
    redirectLinks: [],
    blogDescriptions: [
      "Open Toe Booties",
      "Studded Sandals",
      "Suede Booties",
      "Chelsea Rain Boots",
    ],
    id: 5,
  };
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
