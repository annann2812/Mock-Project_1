import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
  ButtonNewArrivalProduct,
  ButtonProductSaleRow,
  IconBottomColumnRight,
  IconEyeCenter,
  IconEyeColumn,
  IconTopColumnRight,
  IconTopRowLeft,
  IconTopRowRight,
  ImgProductSaleColumn,
  ImgProductSaleRow,
  ListProductColumn,
  ListProductColumnContainer,
  ListProductRow,
  ListProductRowContainer,
} from "../../../public/styledDevHieu";

interface ProductsSaleProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
const NewArrivalProduct = () => {
  const [gridProduct, setGridProduct] = useState<boolean>(true);
  const [productSales, setProductSales] = useState<ProductsSaleProps[]>();
  //   console.log(productSales);
  const handleChangeGridRow = () => {
    setGridProduct(false);
  };
  const handleChangeGridColumns = () => {
    setGridProduct(true);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ProductsSaleProps[]>(
          "https://fakestoreapi.com/products"
        );
        setProductSales(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  const [counterNextPageMax, setCounterNextPageMax] = useState<number>(10);
  const [counterNextPageMin, setCounterNextPageMin] = useState<number>(0);
  console.log(`max:${counterNextPageMax}},min:${counterNextPageMin}`);
  const handleChangeNextPage = () => {
    if (productSales?.length && counterNextPageMax >= productSales?.length) {
      console.log("dones");
      setCounterNextPageMax(productSales?.length);
      setCounterNextPageMin(productSales?.length - 10);
    } else {
      setCounterNextPageMax((pre) => pre + 10);
      setCounterNextPageMin((pre) => pre + 10);
    }
  };
  const handleChangePreviousPage = () => {
    setCounterNextPageMax((prevCount) => {
      return prevCount > 10 ? prevCount - 10 : prevCount;
    });

    setCounterNextPageMin((prevCount) =>
      prevCount !== 0 ? prevCount - 10 : prevCount
    );
  };
  return (
    <Fragment>
      <Grid container spacing={1} width="900px" margin="auto" className="mb-2">
        <Grid item xs={6} className="d-flex flex-row align-items-center">
          <Button onClick={handleChangeGridColumns}>
            <GridViewIcon />
          </Button>
          <Button onClick={handleChangeGridRow}>
            <ViewStreamIcon />
          </Button>
          <Typography>There Are 10 Products.</Typography>
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Age
              </InputLabel>
              <NativeSelect
                defaultValue={31}
                inputProps={{
                  name: "age",
                  id: "uncontrolled-native",
                }}
              >
                <option value={1} className="text-muted">
                  Sales, highest to lowest
                </option>
                <option value={2} className="text-muted">
                  Name, A to Z
                </option>
                <option value={3} className="text-muted">
                  Name, Z to A
                </option>
                <option value={4} className="text-muted">
                  Price, low to high
                </option>
                <option value={5} className="text-muted">
                  Price, high to low
                </option>
              </NativeSelect>
            </FormControl>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={5} width="900px" margin="auto">
        {gridProduct ? (
          <Fragment>
            {productSales &&
              productSales.map((product, index) => {
                if (
                  (index <= counterNextPageMax && index > counterNextPageMin) ||
                  (index < counterNextPageMax && index >= counterNextPageMin)
                ) {
                  return (
                    <Grid item xs={3} key={product.id} className="">
                      <ListProductRowContainer>
                        <ListProductRow>
                          {" "}
                          <ImgProductSaleRow
                            src={product.image}
                            className="  "
                            alt=""
                          />
                          <p
                            className="text-muted my-1"
                            style={{ fontSize: "12px" }}
                          >
                            Name Product
                          </p>
                          <p>
                            <strong>$</strong>
                            {product.price}
                          </p>
                          <ButtonProductSaleRow>
                            View details
                          </ButtonProductSaleRow>
                          <IconEyeCenter>
                            <RemoveRedEyeIcon className=" bg-light rounded" />
                          </IconEyeCenter>
                          <IconTopRowLeft>
                            <strong>New</strong>
                          </IconTopRowLeft>
                          <IconTopRowRight>
                            <strong>On Sale!</strong>
                          </IconTopRowRight>
                        </ListProductRow>
                      </ListProductRowContainer>
                    </Grid>
                  );
                }
              })}
            <Grid item xs={12} textAlign="right">
              <ButtonNewArrivalProduct onClick={handleChangePreviousPage}>
                <ChevronLeftIcon />
              </ButtonNewArrivalProduct>
              <ButtonNewArrivalProduct onClick={handleChangeNextPage}>
                <ChevronRightIcon />
              </ButtonNewArrivalProduct>
            </Grid>
          </Fragment>
        ) : (
          <Fragment>
            {productSales &&
              productSales.map((product, index) => {
                if (
                  (index <= counterNextPageMax && index > counterNextPageMin) ||
                  (index < counterNextPageMax && index >= counterNextPageMin)
                ) {
                  return (
                    <Grid item xs={7} key={product.id} className="">
                      <ListProductColumnContainer>
                        <ListProductColumn>
                          {" "}
                          <ImgProductSaleColumn
                            src={product.image}
                            className=" mr-2 "
                            alt=""
                          />
                          <div className="">
                            <p
                              className="text-muted"
                              style={{ fontSize: "12px" }}
                            >
                              name product
                            </p>
                            <p>${product.price}</p>
                            <Button>View details</Button>
                          </div>
                          <IconEyeColumn>
                            <RemoveRedEyeIcon className="bg-light rounded" />
                          </IconEyeColumn>
                          <IconBottomColumnRight>New</IconBottomColumnRight>
                          <IconTopColumnRight>On Sale!</IconTopColumnRight>
                        </ListProductColumn>
                      </ListProductColumnContainer>
                    </Grid>
                  );
                }
              })}
            <Grid item xs={12} textAlign="right">
              <ButtonNewArrivalProduct onClick={handleChangePreviousPage}>
                Previous Page
              </ButtonNewArrivalProduct>
              <ButtonNewArrivalProduct onClick={handleChangeNextPage}>
                Next Page
              </ButtonNewArrivalProduct>
            </Grid>
          </Fragment>
        )}
      </Grid>
    </Fragment>
  );
};

export default NewArrivalProduct;
