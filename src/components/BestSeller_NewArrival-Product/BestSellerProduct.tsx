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
import { ProductsSaleProps } from "../../../public/type";
import AppService from "../../ApiServices/AppService";
import Navbar from "../NavBar/NavBar";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { Product } from "../../ApiServices/types";
const BestSellerProduct = (props: any) => {
  const { products } = useSelector((state: RootState) => state.loopStore);
  const [gridProduct, setGridProduct] = useState<boolean>(true);
  const [productSales, setProductSales] = useState<ProductsSaleProps[]>();
  // console.log(productSales);
  const [sortOrder, setSortOrder] = useState("");
  const handleChangeGridRow = () => {
    setGridProduct(false);
  };
  const handleChangeGridColumns = () => {
    setGridProduct(true);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AppService.getProducts();
        setProductSales(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Fragment>
      <Grid container spacing={5} width="900px" margin="auto">
        {gridProduct ? (
          <Fragment>
            {products &&
              products
                .slice()
                .sort((a, b) => {
                  if (props.sortOrder === "asc") {
                    return a.price - b.price;
                  } else if (props.sortOrder === "desc") {
                    return b.price - a.price;
                  } else if (props.sortOrder.startsWith("name")) {
                    return props.sortOrder === "name-asc"
                      ? a.name.localeCompare(b.name)
                      : b.name.localeCompare(a.name);
                  } else {
                    return 0;
                  }
                })
                .map(
                  (product: Product) =>
                    !product.best_seller && (
                      <Grid item xs={3} key={product.id} className="">
                        <ListProductRowContainer>
                          <ListProductRow>
                            {" "}
                            <ImgProductSaleRow
                              src={product.images_list[0]}
                              className=""
                              alt=""
                            />
                            <p
                              className="text-muted my-1"
                              style={{ fontSize: "12px" }}
                            >
                              {product.name}
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
                    )
                )}
          </Fragment>
        ) : (
          <Fragment>
            {productSales &&
              productSales.map((product) => (
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
                        <p className="text-muted" style={{ fontSize: "12px" }}>
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
              ))}
          </Fragment>
        )}
      </Grid>
    </Fragment>
  );
};

export default BestSellerProduct;
