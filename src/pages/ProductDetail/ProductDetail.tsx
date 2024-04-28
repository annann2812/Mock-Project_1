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
        <div className="w-1/4 ">
          <SidebarList />
        </div>
        <section className="w-3/4 text-gray-600 body-font overflow-hidden">
          <div className="container mx-auto">
            <div className="lg:w-4/5 w-full mx-auto flex">
              <div className="w-[50%]">
                <Typography>
                  <img
                    src={imageList[currentImageIndex].image}
                    alt="Product"
                    style={{
                      width: "100%",
                      height: "400px",
                      objectFit: "contain",
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
                  gap={1}
                >
                  <Grid item xs={1}>
                    <IconButton onClick={handleIncreClick}>
                      <IoIosArrowBack fontSize="large" />
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
                                padding: "8px",
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
                      <IoIosArrowForward fontSize="large" />
                    </IconButton>
                  </Grid>
                </Typography>
              </div>
              <div className="w-full lg:w-4/5 lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
                  {product.category}
                </h2>
                <h1 className="capitalize text-gray-900 text-3xl my-2 title-font font-medium mb-1">
                  {product.name}
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
                <p className="leading-relaxed">{product?.description}</p>
                <div className="flex mt-6 items-center mb-4">
                  <div className="flex">
                    <span className="mr-3">Color</span>
                    <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                  </div>
                  <div className="flex ml-6 items-center">
                    <span className="mr-3">Size</span>
                    <div className="relative">
                      <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                      </select>
                      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                {product && (
                  <div className="flex justify-between items-center">
                    <div className="title-font font-medium text-2xl text-gray-700">
                      ${product.price * quantity}
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
                        className="rounded-full w-10 h-10 bg-primary-01 p-0 border-0 inline-flex items-center justify-center text-light text-lg ml-4"
                      >
                        <BsFillSuitHeartFill />
                      </button>
                    </div>
                  </div>
                )}
                <div className="p-2  text-center mt-4">
                  <button
                    onClick={() => dispatch(handleAddToCart)}
                    className="text-white w-[70%] bg-primary-01 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg"
                  >
                    Add to Cart
                  </button>
                  <ToastContainer />
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
