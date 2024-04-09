import { Box } from "@mui/material";
import { Fragment, ReactNode } from "react";
import SidebarList from "../components/Sidebar/SidebarList";
import SidebarProduct from "../components/Sidebar/SidebarProduct";
import Header from "../components/Header_Footer/Header";
import Footer from "../components/Header_Footer/Footer";


interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Fragment>
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
      <Header />
      <hr />
      <Footer />
    </Fragment>
  );
};

export default Layout;
