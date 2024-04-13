import { Box, Typography } from "@mui/material";
import { ImgCard, ImgCardDetail, PrimaryButton } from "../../../public/styled";
import ImgProduct1 from "../../assets/image/new-product-1.jpeg";

const SidebarProduct = () => {
  return (
    <Box
      borderRadius={2}
      sx={{
        border: "1px solid #ccc",
        paddingBottom: "12px",
        margin: "18px 0",
        display: {
          // xs: "none",
          // lg: "block"
        },
      }}
    >
      <Typography
        variant="body1"
        sx={{
          borderBottom: "1px solid #ccc",
          padding: "12px",
          backgroundColor: "#FAFAFA",
          borderRadius: "16px 16px 0 0 ",
        }}
      >
        NEW PRODUCTS
      </Typography>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <ImgCard src={ImgProduct1} />
          <ImgCardDetail>
            <Typography variant="caption" sx={{ color: "darkgray" }}>
              name
            </Typography>
            <Typography variant="body1">price</Typography>
          </ImgCardDetail>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <ImgCard src={ImgProduct1} />
          <ImgCardDetail>
            <Typography variant="caption" sx={{ color: "darkgray" }}>
              name
            </Typography>
            <Typography variant="body1">price</Typography>
          </ImgCardDetail>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            margin: "10px 0",
          }}
        >
          <PrimaryButton to="/new-arrivals">All new product</PrimaryButton>
        </Box>
      </Box>
    </Box>
  );
};

export default SidebarProduct;
