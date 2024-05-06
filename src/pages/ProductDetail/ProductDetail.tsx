import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import {
  addToCart,
  addToWishList,
  updateQuantity,
} from "../../Redux/ProductSlice";
import { AppDispatch } from "../../Redux/store";
import { Product } from "../../ApiServices/types";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { RiThreadsLine } from "react-icons/ri";
import Footer from "../../components/Header_Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import {
  FaFacebookF,
  FaInstagram,
  FaStar,
  FaStarHalfAlt,
  FaTiktok,
  FaTruck,
} from "react-icons/fa";
import ProductList from "../../components/BestSeller_NewArrival-Product/Product";

const API_URL = "http://localhost:3000/products";

const ProductCard = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch: AppDispatch = useDispatch();
  // const [wishList, setWishList] = useState<string[]>([]);

  const handleWishList = () => {
    if (product) {
      dispatch(addToWishList({ ...product }));
    }
  };
  // console.log(wishList);

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
    // console.log(product);
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
      <div className="flex gap-3 px-5 py-12 md:flex md:space-x-6 xl:px-0">
        <section className="w-full text-gray-600 body-font overflow-hidden">
          <div className="md:px-10">
            <div className="w-full flex gap-5 flex-col lg:flex-row items-center">
              <img
                src={product.images_list[0]}
                className="object-contain max-[1024px]:max-h-96"
              />
              <div className="w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-3xl font-semibold text-primary-01 tracking-widest uppercase text-center lg:text-left">
                  {product.name}
                </h2>
                <h1 className="capitalize text-gray-900 my-3 text-3xl mb-3 title-font font-medium text-center lg:text-left">
                  {product.discount && product.discount.is_discount ? (
                    <Fragment>
                      <span className="line-through text-gray-400 mr-3">
                        ${product.price}
                      </span>{" "}
                      $
                      {(
                        product.price -
                        (product.price *
                          parseFloat(product.discount.price_discount)) /
                          100
                      ).toFixed(2)}
                    </Fragment>
                  ) : (
                    `$${product.price}`
                  )}
                </h1>
                <div className="flex mb-4 max-lg:justify-center">
                  <span className="text-primary-03 flex items-center ">
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
                <p className="leading-9 text-justify">{product?.decription}</p>
                {product && (
                  <div className="flex flex-col mt-3 gap-5 items-center max-lg:justify-center relative">
                    <div className="title-font font-medium text-xl text-gray-700">
                      Quantity:
                    </div>
                    <div className="flex items-center h-full">
                      <button
                        onClick={() => handleDecrement(product.id)}
                        className="group rounded-l-full px-3 py-[12px] hover:scale-110 border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300"
                      >
                        <AiOutlineMinus className="w-[22px] h-[22px]" />
                      </button>
                      <p className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-large max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[9px] text-center">
                        {quantity}
                      </p>
                      <button
                        onClick={() => handleIncrement(product.id)}
                        className="group rounded-r-full px-3 py-[12px] border hover:scale-110 border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300"
                      >
                        <AiOutlinePlus className="w-[22px] h-[22px]" />
                      </button>
                      <button
                        onClick={() => dispatch(handleWishList)}
                        className="max-md:absolute max-md:right-2 rounded-full min-w-10 min-h-10 bg-primary-01 hover:scale-110 transition-all duration-300 hover:bg-primary-03 p-0 border-0 inline-flex items-center justify-center text-light text-lg md:ml-4"
                      >
                        <BsFillSuitHeartFill className=" text-white" />
                      </button>
                    </div>
                  </div>
                )}
                <div className="py-2 mt-3 flex max-lg:justify-center">
                  <button
                    onClick={() => dispatch(handleAddToCart)}
                    className="text-white font-semibold hover:bg-primary-03 w-[50%] bg-primary-01 border-0 py-2 px-1 focus:outline-none hover:scale-110 transition-all duration-200 rounded-2xl text-lg uppercase"
                  >
                    Add to Cart
                  </button>
                  <ToastContainer autoClose={1000} />
                </div>
                <div className="mt-3 font-semibold rounded">
                  <div className="py-2 flex flex-col">
                    <p className="uppercase text-[15px] mt-2">
                      Hurry! Only <span className="text-primary-03">4</span>{" "}
                      items left in stock.
                    </p>
                    <div className="w-full bg-primary-01 h-[13px] rounded-xl">
                      <input className="bg-primary-03 h-[100%] w-1/3 rounded-xl"></input>
                    </div>
                  </div>
                </div>
                <div className="mt-3 font-semibold border rounded">
                  <div className="py-2 px-3 border bg-gray-200 gap-4 flex items-center">
                    <FaTruck className="text-[29px]" />
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
      <ProductList />
      <Footer />
    </Fragment>
  );
};

export default ProductCard;
