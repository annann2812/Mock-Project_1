import { Fragment, useEffect, useState } from "react";
import { Blog } from "../../../public/type";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Header_Footer/Footer";

const BlogPage = () => {
  const { products, blogs } = useSelector(
    (state: RootState) => state.loopStore
  );
  console.log(blogs);
  const [page, setPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const batchSize = 6;

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      // Fetch all posts from the API
      const response = await axios.get<Blog[]>(
        "https://jsonplaceholder.typicode.com/posts"
      );
      // Calculate the next set of posts to add
      const newPosts = response.data.slice(
        currentIndex,
        currentIndex + batchSize
      );
      // Update the state with the new set of posts
      setBlogs((prevPosts) => [...prevPosts, ...newPosts]);
      // Update the current index for the next batch
      setCurrentIndex((prevIndex) => prevIndex + batchSize);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Fragment>
      <NavBar />
      <div>
        <section className="text-gray-600 body-font">
          <div className="lg:w-[90%] mt-10 px-2 mx-auto flex flex-wrap">
            {blogs.map((item, index) => (
              <div className="container-fluid flex flex-wrap lg:w-1/2 p-4">
                <div key={index} className="p-4 md:w-full">
                  <div className="border-2 rounded-lg border-gray-200 border-opacity-50 p-8 flex flex-col md:flex-row lg:flex-col h-fit gap-4 md:gap-8">
                    <div className="w-full md:h-[50%] my-auto inline-flex items-center justify-center rounded-full text-primary-01 flex-shrink-0 sm:w-full md:w-1/2 lg:w-full">
                      <img
                        src={item.imgUrl}
                        alt=""
                        className="object-cover w-full"
                      />
                    </div>
                    <div className="flex flex-col lg:h-[50%]">
                      <h2 className="text-gray-900 text-lg title-font font-medium mb-3 lg:min-h-[60px]">
                        {item.title}
                      </h2>
                      <p className="leading-relaxed text-base lg:min-h-[100px]">
                        {item.body}
                      </p>
                      <a className="mt-3 text-primary-01 inline-flex items-center hover:cursor-pointer">
                        Read More
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && <p>Loading...</p>}
            <div className="p-2 w-full">
              <button
                onClick={fetchPosts}
                disabled={isLoading}
                className="flex mx-auto text-white bg-primary-01 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg"
              >
                Button
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </Fragment>
  );
};

export default BlogPage;
