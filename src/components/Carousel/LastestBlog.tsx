import Blog1 from "../../assets/image/blog-1.png";
import Blog2 from "../../assets/image/blog-2.png";
import Blog3 from "../../assets/image/blog-3.png";
import Blog4 from "../../assets/image/blog-4.png";
import CarouselDefault from "./Carousel";

const LastestBlog = () => {
  const lastestBlogInfo = {
    images: [`${Blog1}`, `${Blog2}`, `${Blog3}`, `${Blog4}`],
    title: "Lastest Blogs",
    itemNames: [],
    prices: [12.9, 12.9, 28.72, 12.9],
    redirectButtons: [],
    redirectLinks: [],
    blogDescriptions: [
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
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
