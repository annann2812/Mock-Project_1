import React, { useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  Stack,
  TextField,
  MenuItem,
  InputAdornment,
  IconButton,
  ImageListItem,
  ImageList,
} from "@mui/material";

const sizeProduct = [
  {
    value: "S",
    label: "S",
  },
  {
    value: "M",
    label: "M",
  },
  {
    value: "M",
    label: "M>",
  },
  {
    value: "xL",
    label: "XL",
  },
];
const imageList = [
  { image: "https://m.media-amazon.com/images/I/31nDRF+18zL.jpg" },
  { image: "https://m.media-amazon.com/images/I/41fDWigjB7L.jpg" },
  { image: "https://m.media-amazon.com/images/I/412bxYVtsXL.jpg" },
  { image: "https://m.media-amazon.com/images/I/31tKdSWjROL.jpg" },
  { image: "https://m.media-amazon.com/images/I/31353Xlws6L.jpg" },
  { image: "https://m.media-amazon.com/images/I/31IceqeyO9L.jpg" },
  { image: "https://m.media-amazon.com/images/I/31lHSWRw6dL.jpg" },
];

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const handleNextClick = () => {
    if (currentImageIndex < imageList.length - 3) {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleIncreClick = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex((prevIndex) => prevIndex - 1);
    }
  };
  const handleThumbnailClick = (index: React.SetStateAction<number>) => {
    setCurrentImageIndex(index);
  };
  return (
    <Container maxWidth="md">
      <Grid container spacing={4} margin="auto">
        <Grid item xs={12} md={6}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100%"
            flexDirection="column"
          >
            <Typography>
              <img
                src={imageList[currentImageIndex].image}
                alt="Product"
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "contain",
                  marginBottom: "10px",
                }}
              />
            </Typography>
            <Typography
              display="flex "
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              padding="auto"
              margin="auto"
              gap={0.5}
            >
              <Grid item xs={1}>
                <IconButton onClick={handleIncreClick}>
                  <ArrowBackIosIcon fontSize="large" />
                </IconButton>
              </Grid>
              <Grid item xs={10}>
                <ImageList
                  sx={{ width: "100%", height: "200px" }}
                  cols={3}
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  {imageList
                    .slice(currentImageIndex, currentImageIndex + 3)
                    .map((image, index) => (
                      <ImageListItem
                        onClick={() => handleThumbnailClick(index)}
                        style={
                          {
                            //   backgroundColor: "#CCC",
                          }
                        }
                      >
                        <img
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "contain",
                          }}
                          src={image.image}
                          alt=""
                        />
                      </ImageListItem>
                    ))}
                </ImageList>
              </Grid>
              <Grid item xs={1}>
                <IconButton onClick={handleNextClick}>
                  <ArrowForwardIosIcon fontSize="large" />
                </IconButton>
              </Grid>
            </Typography>
          </Box>
        </Grid>
        {/* 111 */}
        <Grid item xs={12} md={6}>
          <Typography variant="caption" gutterBottom>
            <a href="">Link Brand</a>
          </Typography>
          <Typography variant="h3" gutterBottom>
            Product Mae
          </Typography>
          <Typography variant="h4" gutterBottom>
            <Stack spacing={2} direction="row">
              <Button variant="text">Price</Button>
              <Button variant="contained">Sale 20%</Button>
              <Button style={{ textDecoration: "line-through" }} variant="text">
                Price Nomal
              </Button>
            </Stack>
          </Typography>

          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
            ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus
            leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula.
          </Typography>
          <Typography style={{ marginBottom: "10px" }}>
            <Stack direction="row" alignItems="center">
              <Typography variant="body1" style={{ marginRight: "20px" }}>
                Size:
              </Typography>
              <TextField
                id="outlined-select-currency"
                select
                defaultValue="S"
                style={{ marginLeft: "30px", width: "100px" }}
              >
                {sizeProduct.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Stack>
          </Typography>
          <Typography style={{ marginBottom: "10px" }}>
            <Stack direction="row" alignItems="center">
              <Typography variant="body1" gutterBottom>
                Quantity:
              </Typography>
              <TextField
                value={quantity}
                style={{ marginLeft: "20px", width: "100px" }}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                InputProps={{
                  inputProps: { min: 1 },
                  endAdornment: (
                    <InputAdornment position="end">
                      <Stack direction="column">
                        <IconButton onClick={handleIncrement}>
                          <ArrowDropUpIcon fontSize="small" />
                        </IconButton>
                        <IconButton onClick={handleDecrement}>
                          <ArrowDropDownIcon fontSize="small" />
                        </IconButton>
                      </Stack>
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
          </Typography>
          <Typography>
            <Button variant="contained" color="primary">
              <ShoppingCartIcon fontSize="small" style={{ margin: "5px" }} />{" "}
              ADD TO CART
            </Button>
          </Typography>
          <Typography style={{ paddingTop: "10px" }}>
            <Stack direction="row">
              <IconButton LinkComponent="a">
                <FacebookOutlinedIcon fontSize="large" />
              </IconButton>
              <IconButton LinkComponent="a">
                <TwitterIcon fontSize="large" />
              </IconButton>
              <IconButton LinkComponent="a">
                <GoogleIcon fontSize="large" />
              </IconButton>
              <IconButton LinkComponent="a">
                <PinterestIcon fontSize="large" />
              </IconButton>
            </Stack>
          </Typography>
        </Grid>
        ;
      </Grid>
    </Container>
  );
};

export default ProductDetails;
