import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import BestSeller1 from "../../assets/image/best-seller-1.jpg";
import BestSeller2 from "../../assets/image/best-seller-2.jpg";
import BestSeller3 from "../../assets/image/best-seller-3.jpg";
import CarouselDefault from "./Carousel";

const BestSellerItem = () => {
  const bestSellerInfo = {
    images: [
      `${BestSeller1}`,
      `${BestSeller2}`,
      `${BestSeller3}`,
      `${BestSeller2}`,
      `${BestSeller2}`,
      `${BestSeller2}`,
      `${BestSeller2}`,
      `${BestSeller2}`,
    ],
    title: "Best Seller Item",
    buttons: [<ChevronLeftIcon />, <ChevronRightIcon />],
    itemNames: [
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
      "Lorem ipsum dolor",
    ],
    prices: [12.9, 12.9, 28.72, 12.9, 12.9, 12.9, 12.9, 12.9],
    redirectButtons: [],
    redirectLinks: [],
    moveItem: () => {
      console.log("Hey");
    },
  };
  return (
    <CarouselDefault
      images={bestSellerInfo.images}
      buttons={bestSellerInfo.buttons}
      itemNames={bestSellerInfo.itemNames}
      moveItem={bestSellerInfo.moveItem}
      prices={bestSellerInfo.prices}
      redirectButtons={bestSellerInfo.redirectButtons}
      redirectLinks={bestSellerInfo.redirectLinks}
      title={bestSellerInfo.title}
    />
  );
};

export default BestSellerItem;
