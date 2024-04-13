import { Link } from "react-router-dom";
import { CarouselProps } from "../../../public/type";

const CarouselDefault = ({
  images,
  title,
  buttons,
  itemNames,
  prices,
  redirectButtons,
  redirectLinks,
  moveItem,
}: CarouselProps) => {
  return (
    <div className="text-black flex-1 rounded-md border-2 border-[#ebebeb] my-5 overflow-hidden">
      <div className="carousel-heading py-2 px-4 flex items-center justify-between bg-[#fafafa] rounded-t-md">
        <div className="text-sm font-bold tracking-wider uppercase">
          {title}
        </div>
        <div className="flex gap-2">
          {redirectButtons &&
            redirectButtons.map((item, index) => (
              <div key={index}>
                <Link
                  to={redirectLinks[index]}
                  className="text-sm no-underline tracking-wider py-0 px-7 relative flex items-center after:block after:absolute after:width-[1px] after:h-[60%] after:my-[auto] after:mx-[0] after:right-0 after:top-0 after:bottom-0 after:bg-black"
                >
                  {item}
                </Link>
              </div>
            ))}
          {buttons &&
            buttons.map((item, index) => (
              <button
                key={index}
                onClick={moveItem}
                className="w-[30px] h-[30px] flex items-center justify-center border-2 border-[#ebebeb] rounded-md"
              >
                {item}
              </button>
            ))}
        </div>
      </div>
      <div className="p-3 flex justify-between overflow-auto">
        {Array.from({ length: images.length }, (_, index) => (
          <div key={index} className="p-3 min-w-[25%] flex flex-col">
            <img
              src={images[index]}
              alt={title[index]}
              className="object-cover flex"
            />
            <div className="flex flex-col pt-2 sm:pt-4 px-1 text-center gap-1">
              <Link
                to="/"
                className="hover:no-underline text-sm text-black hover:text-[#6284ce]"
              >
                {itemNames[index]}
              </Link>
              <p>${prices[index]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselDefault;
