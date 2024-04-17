import { Link } from "react-router-dom";
import { CarouselProps } from "../../../public/type";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

const CarouselDefault = ({
  images,
  title,
  itemNames,
  prices,
  redirectButtons,
  redirectLinks,
  id,
  blogDescription,
  isNewArrive,
}: CarouselProps) => {
  const [slidesPerView, setSlidesPerView] = useState<number>(5);

  useEffect(() => {
    const updateSlidesPerView = () => {
      const windowWidth = window.innerWidth;

      if (title === "Lastest Blogs") {
        if (windowWidth > 1024) {
          setSlidesPerView(3);
        } else {
          setSlidesPerView(2);
        }
      } else if (title === "New Product") {
        setSlidesPerView(5);
      } else {
        if (windowWidth > 1200) {
          setSlidesPerView(5);
        } else if (windowWidth > 876) {
          setSlidesPerView(4);
        } else {
          setSlidesPerView(3);
        }
      }
    };

    updateSlidesPerView();

    window.addEventListener("resize", updateSlidesPerView);

    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, [title]);

  return (
    <div
      className={`text-black flex-1 rounded-md border-2 border-[#ebebeb] overflow-hidden max-w-full ${
        title !== "Best Seller Item" && "mb-4"
      }`}
    >
      <div className="carousel-heading py-3 px-8 flex items-center justify-between bg-[#fafafa] rounded-t-md text-sm md:text-base">
        <div className="font-bold tracking-wider uppercase">{title}</div>
        <div className="flex items-center">
          {redirectButtons &&
            redirectButtons.map((item, index) => (
              <div key={index} className="relative">
                <Link
                  to={redirectLinks[index]}
                  className="text-xs lg:text-sm no-underline tracking-wider text-black py-0 px-4 md:px-8 relative flex items-center after:block after:absolute after:w-[1px] after:h-[80%] after:my-[auto] after:right-0 after:top-0 after:bottom-0 after:bg-black"
                >
                  {item}
                </Link>
              </div>
            ))}
          <div className="flex gap-2 ml-4 md:ml-8">
            <button
              id={`prev-btn-${id}`}
              className={`w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] flex items-center justify-center border-2 border-[#ebebeb] rounded-md hover:bg-blue-400 hover:text-white disabled:hover:bg-transparent disabled:text-gray-300 transition-all ${
                isNewArrive && "hidden"
              }`}
            >
              <ChevronLeftIcon />
            </button>
            <button
              id={`next-btn-${id}`}
              className={`w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] flex items-center justify-center border-2 border-[#ebebeb] rounded-md hover:bg-blue-400 hover:text-white disabled:hover:bg-transparent disabled:text-gray-300 transition-all ${
                isNewArrive && "hidden"
              }`}
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      </div>

      <Swiper
        slidesPerView={slidesPerView}
        navigation={
          !isNewArrive
            ? {
                enabled: true,
                nextEl: `#next-btn-${id}`,
                prevEl: `#prev-btn-${id}`,
              }
            : false
        }
        pagination={{ enabled: true, dynamicBullets: true }}
        autoplay={{ delay: 4000 }}
        modules={
          !isNewArrive ? [Navigation, Pagination] : [Autoplay, Pagination]
        }
        className="p-3"
      >
        {Array.from({ length: images.length }, (_, index) => (
          <SwiperSlide key={index} className="p-3 flex flex-col">
            <img
              src={images[index]}
              alt={title[index]}
              className={`object-cover ${title === "LASTEST BLOGS" && "h-60"}`}
            />
            <div className="flex flex-col pt-2 sm:pt-4 px-1 text-center gap-1">
              <Link
                to="/"
                className="hover:no-underline text-sm text-black hover:text-[#6284ce]"
              >
                {itemNames[index]}
              </Link>
              <p>${prices[index]}</p>
              <p>{blogDescription[index]}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselDefault;
