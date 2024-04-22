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

const API_URL = "http://localhost:8888/products";

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
  const products = useSelector((state: RootState) => state.loopStore.products);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [wishList, setWishList] = useState<string[]>([]);

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
          <div className="container mx-auto">
            <div className="lg:w-4/5 w-full mx-auto flex">
              <img src={product.image} className="w-[50%]"/>
              <div className="w-full lg:w-4/5 lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-lg title-font text-gray-500 tracking-widest uppercase">
                  {product.name}
                </h2>
                <h1 className="capitalize text-gray-900 my-2 text-3xl mb-3 title-font font-medium mb-1">
                  {product.price}
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
                    <Link to='https://www.facebook.com/fptcorp' className="text-[#76885B] mr-2">
                      <FaFacebookF />
                    </Link>
                    <Link to="https://www.facebook.com/fptcorp" className="text-[#76885B] mr-2">
                      <FaInstagram />
                    </Link>
                    <Link to = "https://www.facebook.com/fptcorp" className="text-[#76885B] mr-2">
                      <RiThreadsLine />
                    </Link>
                    <Link to = "https://www.facebook.com/fptcorp" className="text-[#76885B]">
                      <FaTiktok />
                    </Link>
                  </span>
                </div>
                <p className="leading-loose">{product?.description}</p>
                {product && (
                  <div className="flex gap-3 items-center">
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
                      <button
                        onClick={handleWishList}
                        className="rounded-full w-10 h-10 bg-[#76885B] p-0 border-0 inline-flex items-center justify-center text-light text-lg ml-4"
                      >
                        <BsFillSuitHeartFill />
                      </button>
                    </div>
                  </div>
                )}
                <div className="p-2 mt-4">
                  <button
                    onClick={() => dispatch(handleAddToCart)}
                    className="text-white w-[50%] bg-[#76885B] border-0 py-2 px-1 focus:outline-none hover:bg-gray-600 rounded-2xl text-lg uppercase"
                  >
                    Add to Cart
                  </button>
                  <ToastContainer />
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
      <Footer />
    </Fragment>
  );
};

export default ProductCard;

