import React, { Fragment, useEffect, useState } from "react";

import {
  Card,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { ProductInfor } from "./StoreContain";
const timeList = [
  {
    day: "Mon.",
    open: "09:00 AM",
    close: "07:00 PM",
  },
  {
    day: "Tue.",
    open: "09:00 AM",
    close: "07:00 PM",
  },
  {
    day: "Wed.",
    open: "09:00 AM",
    close: "07:00 PM",
  },
  {
    day: "Thu.",
    open: "09:00 AM",
    close: "07:00 PM",
  },
  {
    day: "Fri.",
    open: "09:00 AM",
    close: "07:00 PM",
  },
  {
    day: "Sat.",
    open: "09:00 AM",
    close: "04:00 PM",
  },
  {
    day: "Sun.",
    open: "09:00 AM",
    close: "04:00 PM",
  },
];
export function Store() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        // console.log(data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Fragment>
      <Container maxWidth="md">
        {products.length > 0 &&
          products.map((product: ProductInfor) => (
            <Card style={{ height: "400px", marginBottom: "10px" }}>
              <Grid
                container
                spacing={3}
                key={product.id}
                justifyContent="center"
                alignItems="center"
                margin="auto"
                style={{ height: "100%" }}
                direction={{ xs: "column", sm: "row" }}
              >
                <Grid
                  item
                  xs={4}
                  sm={4}
                  md={4}
                  lg={4}
                  xl={4}
                  justifyContent="center"
                  alignItems="center"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  margin="auto"
                  display={{ xs: "none", sm: "block" }}
                >
                  <img
                    src={product.image}
                    alt=""
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "fill",
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={4}
                  sm={4}
                  md={4}
                  lg={4}
                  xl={4}
                  justifyContent="center"
                  alignItems="center"
                  margin="auto"
                >
                  <Typography variant="h6">{product.title}</Typography>
                  <Typography variant="caption">
                    {product.description}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={4}
                  sm={4}
                  md={4}
                  lg={4}
                  xl={4}
                  justifyContent="space-around"
                  alignItems="center"
                >
                  <List>
                    {timeList.map((time, index) => (
                      <ListItem
                        key={index}
                        style={{ padding: "0px", margin: "0px 0px" }}
                      >
                        <ListItemText
                          primary={
                            <Typography display="inline">{time.day}</Typography>
                          }
                          secondary={
                            <Typography display="inline">
                              {` ${time.open} - ${time.close}`}
                            </Typography>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              </Grid>
            </Card>
          ))}
      </Container>
    </Fragment>
  );
}

export default Store;
