import { Box } from "@mui/material";
import { ReactNode } from "react";
import SidebarList from "../components/Sidebar/SidebarList";
import SidebarProduct from "../components/Sidebar/SidebarProduct";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
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
      {/* test222 */}
    </Box>
  );
};

export default Layout;
