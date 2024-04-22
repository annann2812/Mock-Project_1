import { Fragment, ReactNode } from "react";
import SidebarList from "../components/Sidebar/SidebarList";
import SidebarProduct from "../components/Sidebar/SidebarProduct";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Fragment>
      <div className="bg-white flex text-black overflow-hidden gap-8 p-3 w-full xl:w-[1280px] mx-auto">
        <div className="w-2/6">
          <SidebarList />
        </div>
        <div className="w-4/6">
          <SidebarProduct />
        </div>
      </div>
      <div className="max-w-full p-3 overflow-hidden xl:w-[1280px] mx-auto">
        {children}
      </div>
    </Fragment>
  );
};

export default Layout;
