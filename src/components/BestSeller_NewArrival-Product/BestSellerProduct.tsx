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
import {
  ButtonProductSaleRow,
  IconEyeCenter,
  IconTopRowLeft,
  IconTopRowRight,
  ImgProductSaleRow,
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
const BestSellerProduct = () => {
  const [gridProduct, setGridProduct] = useState<boolean>(true);
  const [productSales, setProductSales] = useState<ProductsSaleProps[]>();
  console.log(productSales);
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
              productSales.map((product) => (
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
                      <ButtonProductSaleRow>View details</ButtonProductSaleRow>
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
              ))}
          </Fragment>
        ) : (
          <Fragment>
            {productSales &&
              productSales.map((product) => (
                <Grid item xs={7} key={product.id} className="">
                  <div className="d-flex flex-row align-items-center text-center position-relative">
                    {" "}
                    <img
                      src={product.image}
                      className=" mr-2 "
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "contain",
                        objectPosition: "center",
                      }}
                      alt=""
                    />
                    <div className="">
                      <p className="text-muted" style={{ fontSize: "12px" }}>
                        name product
                      </p>
                      <p>${product.price}</p>
                      <Button>View details</Button>
                    </div>
                    <RemoveRedEyeIcon
                      className="position-absolute bg-light rounded"
                      style={{ top: "35%", right: "40%" }}
                    />
                    <p
                      className="position-absolute"
                      style={{ bottom: "0", right: "0" }}
                    >
                      New
                    </p>
                    <p
                      className="position-absolute"
                      style={{ top: "0", right: "0" }}
                    >
                      On Sale!
                    </p>
                  </div>
                </Grid>
              ))}
          </Fragment>
        )}
      </Grid>
    </Fragment>
  );
};

export default BestSellerProduct;
