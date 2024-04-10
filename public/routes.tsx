import { createBrowserRouter} from "react-router-dom";
import Home from "../src/pages/Home/Home"
import Error from "../src/pages/Error/Error"
import Blog from "../src/pages/Blog/Blog"
import Store from "../src/pages/Store/Store"
import BestSellers from "../src/pages/BestSellers/BestSellers"
import Contact from "../src/pages/Contact/Contact"
import Sitemap from "../src/pages/Sitemap/Sitemap"
import NewArrival from "../src/pages/NewArrival/NewArrival"
import About from "../src/pages/About/About"
import Delivery from "../src/pages/Delivery/Delivery"
import Cameras from "../src/pages/Categories/Cameras";
import Electronics from "../src/pages/Categories/Electronics";
import Televisions from "../src/pages/Categories/Televisions";
import JBLSpeakers from "../src/pages/Categories/JBLSpeakers";
import Smartphones from "../src/pages/Categories/Smartphones";
import Login from "../src/components/Account/LogIn";
import SignUp from "../src/components/Account/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: "/blog",
    element: <Blog />,
    errorElement: <Error />
  },
  {
    path: "/store",
    element: <Store />,
    errorElement: <Error />
  },
  {
    path: "/best-sellers",
    element: <BestSellers />,
    errorElement: <Error />
  },
  {
    path: "/contacts",
    element: <Contact />,
    errorElement: <Error />
  },
  {
    path: "/sitemap",
    element: <Sitemap />,
    errorElement: <Error />
  },
  {
    path: "/new-arrivals",
    element: <NewArrival />,
    errorElement: <Error />
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <Error />
  },
  {
    path: "/delivery",
    element: <Delivery />,
    errorElement: <Error />
  },
  {
    path: "/home/electronics",
    element: <Electronics/>,
    errorElement: <Error />
  },
  {
    path: "/home/televisions",
    element: <Televisions/>,
    errorElement: <Error />
  },
  {
    path: "/home/cameras",
    element: <Cameras/>,
    errorElement: <Error />
  },
  {
    path: "/home/smartphones",
    element: <Smartphones/>,
    errorElement: <Error />
  },
  {
    path: "/home/JBLSpeakers",
    element: <JBLSpeakers/>,
    errorElement: <Error />
  },
  {
    path: "/login",
    element: <Login/>,
    errorElement: <Error />
  },
  {
    path: "/signup",
    element: <SignUp/>,
    errorElement: <Error />
  },
]);

