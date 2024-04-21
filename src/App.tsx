<<<<<<< HEAD
import { Route, RouterProvider, Routes } from "react-router-dom";
=======
import { Route, Routes } from "react-router-dom";
>>>>>>> refs/remotes/origin/develop
import { Fragment } from "react/jsx-runtime";
import Home from "./pages/Home/Home";
<<<<<<< HEAD
=======

>>>>>>> refs/remotes/origin/develop
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import BestSellers from "./pages/BestSellers/BestSellers";
import BlogPage from "./pages/Blog/Blog";
<<<<<<< HEAD
import Login from "./components/Account/LogIn";
import PayPage from "./pages/PayPage/PayPage";
import SpecialCase from "./components/SpecialCase";
import SignUp from "./components/Account/SignUp";
import NewArrivalPage from "./pages/NewArrival/NewArrivalPage";
import ProductCard from "./pages/ProductDetail/ProductDetail";
import Newsletter from "./components/Newsletter/Newsletter";
=======
>>>>>>> refs/remotes/origin/develop

const App = () => {
  return (
    <Fragment>
<<<<<<< HEAD
      <Newsletter/>
      <SpecialCase/>
=======
      <Header />
      <NavBar />
>>>>>>> refs/remotes/origin/develop
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/best-sellers" element={<BestSellers />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/new-arrivals" element={<NewArrivalPage />} />
        <Route path="/products/:id" element={<ProductCard />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/payment" element={<PayPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Fragment>
  );
};

export default App;
