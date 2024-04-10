import {
  Carousel,
  CarouselHeading,
  CarouselHeadingText,
  CarouselItem,
  CarouselItemBox,
  CarouselItemDescription,
  CarouselItemImage,
  CarouselItemName,
} from "../../../public/styled";
import ShopCategories1 from "../../assets/image/shop-categories-1.jpg";
import ShopCategories2 from "../../assets/image/shop-categories-2.jpg";
import ShopCategories3 from "../../assets/image/shop-categories-3.jpg";
import ShopCategories4 from "../../assets/image/shop-categories-4.jpg";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const Categories = () => {
  return (
    <Carousel>
      <CarouselHeading>
        <CarouselHeadingText style={{ padding: "5px 0" }}>
          SHOP BY CATEGORIES
        </CarouselHeadingText>
      </CarouselHeading>
      <CarouselItemBox>
        <CarouselItem>
          <CarouselItemImage src={ShopCategories1}></CarouselItemImage>
          <CarouselItemDescription>
            <CarouselItemName href="/home/electronics">
              ELECTRONICS
            </CarouselItemName>
            <StarBorderIcon />
          </CarouselItemDescription>
        </CarouselItem>
        <CarouselItem>
          <CarouselItemImage src={ShopCategories2}></CarouselItemImage>
          <CarouselItemDescription>
            <CarouselItemName href="/home/electronics">
              ELECTRONICS
            </CarouselItemName>
          </CarouselItemDescription>
        </CarouselItem>
        <CarouselItem>
          <CarouselItemImage src={ShopCategories3}></CarouselItemImage>
          <CarouselItemDescription></CarouselItemDescription>
        </CarouselItem>
        <CarouselItem>
          <CarouselItemImage src={ShopCategories4}></CarouselItemImage>
          <CarouselItemDescription></CarouselItemDescription>
        </CarouselItem>
      </CarouselItemBox>
    </Carousel>
  );
};

export default Categories;
