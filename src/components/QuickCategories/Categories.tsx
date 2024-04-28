import { StarIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Categories = () => {
  const categoriesInfo = {
    image: [
      "https://m.media-amazon.com/images/I/71Co6D9F6tL._AC_SX695_.jpg",
      "https://m.media-amazon.com/images/I/71kguy-KUTL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71XEbL2FHaL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71jAmMbzIVL._AC_SL1500_.jpg",
    ],
    title: [
      "Embellished Flats",
      "Leopard Print Booties",
      "Suede Sandals",
      "Metallic Sneakers",
    ],
    categories: [
      ["Office Appliance", "Kitchen Appliance", "Cameras"],
      ["Computers", "Headphones", "Air Conditioner"],
      ["Digital Camera", "Animation Camera", "Action Camera"],
      ["Sports Watch", "Digital Watch", "Leather Watch"],
    ],
  };
  return (
    <div className="text-white flex-1 rounded-md border-2 border-secondary-01 overflow-hidden max-w-full mb-4">
      <div className="carousel-heading py-3 px-4 flex items-center justify-between bg-primary-01 rounded-t-md text-sm md:text-base">
        <p className="font-bold tracking-wider uppercase">SHOP BY CATEGORIES</p>
      </div>
      <div className="flex justify-between p-3 flex-wrap">
        {Array.from({ length: categoriesInfo.image.length }, (_, index) => (
          <div
            key={index}
            className={`border-secondary-01 flex flex-col mb-4 lg:mb-0 w-1/2 lg:w-1/4 gap-2 [&:nth-child(2n+1)]:border-r-[1px] lg:[&:not(:nth-last-child(-n+1))]:border-r-[1px]`}
          >
            <img
              src={categoriesInfo.image[index]}
              alt=""
              className="block object-contain h-60 p-2"
            />
            <Link to="/" className="text-center text-black hover:text-black">
              {categoriesInfo.title[index]}
            </Link>
            {categoriesInfo.categories[index].map((item, index) => (
              <div key={index} className={`px-4  ${index === 0 && "mt-2"}`}>
                <Link
                  to="/"
                  className="flex gap-3 text-black items-center hover:text-primary-02"
                >
                  <span>
                    <StarIcon className="w-[20px] h-[20px]" />
                  </span>
                  <span>{item}</span>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
