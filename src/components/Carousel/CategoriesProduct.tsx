import {
  Carousel,
  CarouselButton,
  CarouselHeading,
  CarouselHeadingText,
  CarouselItem,
  CarouselItemBox,
  CarouselItemDescription,
  CarouselItemImage,
  CarouselItemName,
  CarouselLargeButtonContainer,
  CarouselRedictButton,
  CarouselSideButtonContainer,
  CarouselSmallButtonContainer,
} from "../../../public/styled";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Typography } from "@mui/material";
import BestSeller1 from "../../assets/image/best-seller-1.jpg";
import BestSeller2 from "../../assets/image/best-seller-2.jpg";
import BestSeller3 from "../../assets/image/best-seller-3.jpg";

const CategoriesProduct = () => {
  return (
    <Carousel>
      <CarouselHeading>
        <CarouselHeadingText>TRENDING PRODUCTS</CarouselHeadingText>
        <CarouselSideButtonContainer>
          <CarouselLargeButtonContainer>
            <CarouselRedictButton to={"/home/electronics"}>
              ELECTRONIC
            </CarouselRedictButton>
            <CarouselRedictButton to={"/home/cameras"}>
              CAMERAS
            </CarouselRedictButton>
            <CarouselRedictButton to={"/home/smartwatches"}>
              SMART WATCHES
            </CarouselRedictButton>
            <CarouselSmallButtonContainer>
              <CarouselButton>
                <ChevronLeftIcon />
              </CarouselButton>
              <CarouselButton>
                <ChevronRightIcon />
              </CarouselButton>
            </CarouselSmallButtonContainer>
          </CarouselLargeButtonContainer>
        </CarouselSideButtonContainer>
      </CarouselHeading>
      <CarouselItemBox>
        <CarouselItem>
          <CarouselItemImage src={BestSeller1}></CarouselItemImage>
          <CarouselItemDescription>
            <CarouselItemName href="/">Tarundecf Beseking</CarouselItemName>
            <Typography variant="body1">$12.90</Typography>
          </CarouselItemDescription>
        </CarouselItem>
        <CarouselItem>
          <CarouselItemImage src={BestSeller2}></CarouselItemImage>
          <CarouselItemDescription>
            <CarouselItemName href="/">Cum Sociis Natoque</CarouselItemName>
            <Typography variant="body1">$28.72</Typography>
          </CarouselItemDescription>
        </CarouselItem>
        <CarouselItem>
          <CarouselItemImage src={BestSeller3}></CarouselItemImage>
          <CarouselItemDescription>
            <CarouselItemName href="/">
              Suspendisse Massa Nulla
            </CarouselItemName>
            <Typography variant="body1">$29.00</Typography>
          </CarouselItemDescription>
        </CarouselItem>
        <CarouselItem>
          <CarouselItemImage src={BestSeller3}></CarouselItemImage>
          <CarouselItemDescription>
            <CarouselItemName href="/">
              Suspendisse Massa Nulla
            </CarouselItemName>
            <Typography variant="body1">$29.00</Typography>
          </CarouselItemDescription>
        </CarouselItem>
        <CarouselItem>
          <CarouselItemImage src={BestSeller3}></CarouselItemImage>
          <CarouselItemDescription>
            <CarouselItemName href="/">
              Suspendisse Massa Nulla
            </CarouselItemName>
            <Typography variant="body1">$29.00</Typography>
          </CarouselItemDescription>
        </CarouselItem>
        <CarouselItem>
          <CarouselItemImage src={BestSeller3}></CarouselItemImage>
          <CarouselItemDescription>
            <CarouselItemName href="/">
              Suspendisse Massa Nulla
            </CarouselItemName>
            <Typography variant="body1">$29.00</Typography>
          </CarouselItemDescription>
        </CarouselItem>
        <CarouselItem>
          <CarouselItemImage src={BestSeller3}></CarouselItemImage>
          <CarouselItemDescription>
            <CarouselItemName href="/">
              Suspendisse Massa Nulla
            </CarouselItemName>
            <Typography variant="body1">$29.00</Typography>
          </CarouselItemDescription>
        </CarouselItem>
        <CarouselItem>
          <CarouselItemImage src={BestSeller3}></CarouselItemImage>
          <CarouselItemDescription>
            <CarouselItemName href="/">
              Suspendisse Massa Nulla
            </CarouselItemName>
            <Typography variant="body1">$29.00</Typography>
          </CarouselItemDescription>
        </CarouselItem>
      </CarouselItemBox>
    </Carousel>
  );
};

export default CategoriesProduct;
