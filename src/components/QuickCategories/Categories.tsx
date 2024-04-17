import { StarIcon } from "@heroicons/react/24/outline";
import ShopCategories1 from "../../assets/image/shop-categories-1.jpg";
import ShopCategories2 from "../../assets/image/shop-categories-2.jpg";
import ShopCategories3 from "../../assets/image/shop-categories-3.jpg";
import ShopCategories4 from "../../assets/image/shop-categories-4.jpg";
import { Link } from "react-router-dom";

const Categories = () => {
  const categoriesInfo = {
    image: [ShopCategories1, ShopCategories2, ShopCategories3, ShopCategories4],
    title: ["ELECTRONIC", "OFFICE APPLIANCE", "CAMERA", "SMART-WATCHES"],
    categories: [
      ["Office Appliance", "Kitchen Appliance", "Cameras"],
      ["Computers", "Headphones", "Air Conditioner"],
      ["Digital Camera", "Animation Camera", "Action Camera"],
      ["Sports Watch", "Digital Watch", "Leather Watch"],
    ],
  };
  return (
    <div className="text-black flex-1 rounded-md border-2 border-[#ebebeb] overflow-hidden max-w-full mb-4">
      <div className="carousel-heading py-3 px-4 flex items-center justify-between bg-[#fafafa] rounded-t-md text-sm md:text-base">
        <p className="font-bold tracking-wider uppercase">SHOP BY CATEGORIES</p>
      </div>
      <div className="flex justify-between p-3">
        {Array.from({ length: categoriesInfo.image.length }, (_, index) => (
          <div
            key={index}
            className={`flex flex-col gap-2 ${
              index !== categoriesInfo.image.length - 1 &&
              "border-[#ccc] border-r-[1px]"
            }`}
          >
            <img src={categoriesInfo.image[index]} alt="" className="block" />
            <Link to="/" className="text-center text-black hover:text-black">
              {categoriesInfo.title[index]}
            </Link>
            {categoriesInfo.categories[index].map((item, index) => (
              <div key={index} className={`px-4  ${index === 0 && "mt-2"}`}>
                <Link to="/" className="flex gap-3 text-black items-center">
                  <span>
                    <StarIcon className="w-[20px] h-[20px]" />
                  </span>
                  <span>{item}</span>
                </Link>
              </div>
            ))}
            <div></div>
          </div>
        ))}
      </div>
    </div>
    // <Carousel>
    //   <CarouselHeading>
    //     <CarouselHeadingText style={{ padding: "5px 0" }}>
    //       SHOP BY CATEGORIES
    //     </CarouselHeadingText>
    //   </CarouselHeading>
    //   <CarouselItemBox>
    //     <CarouselItem>
    //       <CarouselItemImage src={ShopCategories1}></CarouselItemImage>
    //       <CarouselItemDescription>
    //         <CarouselItemName href="/home/electronics">
    //           ELECTRONICS
    //         </CarouselItemName>
    //         <StarBorderIcon />
    //       </CarouselItemDescription>
    //     </CarouselItem>
    //     <CarouselItem>
    //       <CarouselItemImage src={ShopCategories2}></CarouselItemImage>
    //       <CarouselItemDescription>
    //         <CarouselItemName href="/home/electronics">
    //           ELECTRONICS
    //         </CarouselItemName>
    //       </CarouselItemDescription>
    //     </CarouselItem>
    //     <CarouselItem>
    //       <CarouselItemImage src={ShopCategories3}></CarouselItemImage>
    //       <CarouselItemDescription></CarouselItemDescription>
    //     </CarouselItem>
    //     <CarouselItem>
    //       <CarouselItemImage src={ShopCategories4}></CarouselItemImage>
    //       <CarouselItemDescription></CarouselItemDescription>
    //     </CarouselItem>
    //   </CarouselItemBox>
    // </Carousel>
  );
};

export default Categories;
