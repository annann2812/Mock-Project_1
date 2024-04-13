import { Box } from "@mui/material";
import { Fragment, ReactNode, useState } from "react";
import SidebarList from "../components/Sidebar/SidebarList";
import SidebarProduct from "../components/Sidebar/SidebarProduct";
import Header from "../components/Header_Footer/Header";
import Footer from "../components/Header_Footer/Footer";
import BestSellerProduct from "../components/BestSeller_NewArrival-Product/BestSellerProduct";
import NewArrivalProduct from "../components/BestSeller_NewArrival-Product/NewArrivalProduct";
import NavBar from "../components/NavBar/NavBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {

  return (
    <Fragment>
      <Header />
      <NavBar/>
      <hr />
      <Box
        sx={{
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: {
            // xs: "column",
            lg: "row",
          },
          color: "#000",
          padding: 1,
          overflowY: "hidden",
          gap: 3,
        }}
      >
        <Box>
          <SidebarList />
          <SidebarProduct />
        </Box>
        <Box sx={{ width: "100%" }}>{children}</Box>
      </Box>
      <hr />
      {/* <h5 className="text-center">New arrival product</h5> */}
      <NewArrivalProduct />
      <hr />
      <Footer />
    </Fragment>
  );
};

export default Layout;
