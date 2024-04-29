import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { addToCart, updateQuantity } from "../../Redux/ProductSlice";
import { AppDispatch, RootState } from "../../Redux/store";
import { Product } from "../../ApiServices/types";
import { BsFillSuitHeartFill, BsStarFill, BsStarHalf } from "react-icons/bs";
import { RiThreadsLine } from "react-icons/ri";
import {
  Grid,
  Typography,
  IconButton,
  ImageListItem,
  ImageList,
} from "@mui/material";
import Footer from "../../components/Header_Footer/Footer";
import Header from "../../components/Header_Footer/Header";
import NavBar from "../../components/NavBar/NavBar";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import SidebarList from "../../components/Sidebar/SidebarList";
import {
  FaFacebookF,
  FaInstagram,
  FaStar,
  FaStarHalfAlt,
  FaTiktok,
  FaTruck,
} from "react-icons/fa";
import App from "./SwipperProduct";

const API_URL = "http://localhost:3000/products";

const imageList = [
  { image: "https://m.media-amazon.com/images/I/31nDRF+18zL.jpg" },
  { image: "https://m.media-amazon.com/images/I/41fDWigjB7L.jpg" },
  { image: "https://m.media-amazon.com/images/I/412bxYVtsXL.jpg" },
  { image: "https://m.media-amazon.com/images/I/31tKdSWjROL.jpg" },
  { image: "https://m.media-amazon.com/images/I/31353Xlws6L.jpg" },
  { image: "https://m.media-amazon.com/images/I/31IceqeyO9L.jpg" },
  { image: "https://m.media-amazon.com/images/I/31lHSWRw6dL.jpg" },
];

const ProductCard: React.FC<Product> = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch: AppDispatch = useDispatch();
  const productItem = useSelector((state: RootState) => state.loopStore.product);
  const [wishList, setWishList] = useState<string[]>([]);


  const handleWishList = () => {
    if (!wishList.includes(product.id.toString())) {
      setWishList([...wishList, product.id.toString()]);
      toast("Item added to Wishlist.");
    } else {
      toast.info("Oh! It's already in the wishlist.");
    }
  };
  console.log(wishList);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const response = await axios.get(`${API_URL}/${id}`);
        setProduct(response.data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch product:", err);
        setError("Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({ ...product, quantity }));
    }
    console.log(product);
  };

  const handleIncrement = (id: number) => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    dispatch(updateQuantity({ id, quantityChange: 1 }));
  };

  const handleDecrement = (id: number) => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      dispatch(updateQuantity({ id, quantityChange: -1 }));
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>No product found.</p>;
  }

  return (
    <Fragment>
      <NavBar />
      <div className="flex gap-3 px-5 py-12">
        <section className="w-full text-gray-600 body-font overflow-hidden">
          <div className="container w-[90%] mx-auto">
            <div className="lg:w-full w-1/2 mx-auto flex">
              <img src={product.images_list[0]} className="w-[100%]"/>
              <div className="w-full lg:w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-3xl font-semibold text-[#76885B] tracking-widest uppercase">
                  {product.name}
                </h2>
                <h1 className="capitalize text-gray-900 my-3 text-3xl mb-3 title-font font-medium mb-1">
                  ${product.price}
                </h1>
                <div className="flex mb-4">
                  <span className="text-[#FC6736] flex items-center">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                    <span className="text-gray-600 ml-3">4 Reviews</span>
                  </span>
                  <span className="flex ml-3 pl-3 py-2 border-l-2 text-[20px] border-gray-200 space-x-2s">
                    <Link
                      to="https://www.facebook.com/fptcorp"
                      className="text-primary-01 mr-2"
                    >
                      <FaFacebookF />
                    </Link>
                    <Link
                      to="https://www.facebook.com/fptcorp"
                      className="text-primary-01 mr-2"
                    >
                      <FaInstagram />
                    </Link>
                    <Link
                      to="https://www.facebook.com/fptcorp"
                      className="text-primary-01 mr-2"
                    >
                      <RiThreadsLine />
                    </Link>
                    <Link
                      to="https://www.facebook.com/fptcorp"
                      className="text-primary-01"
                    >
                      <FaTiktok />
                    </Link>
                  </span>
                </div>
                <p className="leading-9">{product?.decription}</p>
                {product && (
                  <div className="flex mt-3 gap-5 items-center ">
                    <div className="title-font font-medium text-xl text-gray-700">
                      Quantity:
                    </div>
                    <div className="flex items-center h-full">
                      <button
                        onClick={() => handleDecrement(product.id)}
                        className="group rounded-l-full px-3 py-[12px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300"
                      >
                        <AiOutlineMinus className="w-[22px] h-[22px]" />
                      </button>
                      <p className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-large max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[9px] text-center">
                        {quantity}
                      </p>
                      <button
                        onClick={() => handleIncrement(product.id)}
                        className="group rounded-r-full px-3 py-[12px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300"
                      >
                        <AiOutlinePlus className="w-[22px] h-[22px]" />
                      </button>
                    </div>
                      <button
                        onClick={handleWishList}
                        className="rounded-full w-10 h-10 bg-primary-01 p-0 border-0 inline-flex items-center justify-center text-light text-lg ml-4"
                      >
                        <BsFillSuitHeartFill className="hover:text-[#FC6736]"/>
                      </button>
                  </div>
                )}
                <div className="py-2 mt-3">
                  <button
                    onClick={() => dispatch(handleAddToCart)}
                    className="text-white w-[70%] bg-primary-01 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg"
                  >
                    Add to Cart
                  </button>
                  <ToastContainer />
                </div>
                <div className="mt-3 font-semibold rounded">
                  <div className="py-2 flex flex-col">
                    <p className="uppercase text-[15px]">Hurry! Only <span className="text-[#FC6736]">4</span> items left in stock.</p>
                    <div className="w-full bg-[#76885B] h-[13px] rounded-xl my-2">
                      <input className="bg-[#FC6736] w-[30%]"></input>
                    </div>
                  </div>
                </div>
                <div className="mt-3 font-semibold border rounded">
                  <div className="py-2 px-3 border bg-gray-200 gap-4 flex items-center">
                    <FaTruck className="text-[29px]"/>
                    <div className="text-sm leading-loose">
                      <p>Delivery: 2 Working Days</p>
                      <p>Expected Delivery Date is 24th April, 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <App/>
      <Footer />
    </Fragment>
  );
};

export default ProductCard;
