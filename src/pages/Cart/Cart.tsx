import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import emptyCart from "../../assets/image/emptyCart.png";
import { BiTrash } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { Product } from "../../ApiServices/types";
import { AppDispatch, RootState } from "../../Redux/store";
import {
  deleteItem,
  resetCart,
  updateQuantity,
} from "../../Redux/ProductSlice";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Header_Footer/Footer";

const Cart: React.FC = () => {
  const products = useSelector((state: RootState) => state.loopStore.products);
  const dispatch: AppDispatch = useDispatch();
  const [totalAmt, setTotalAmt] = useState<number>(0);
  const [shippingCharge, setShippingCharge] = useState<number>();

  useEffect(() => {
    // Calculate total amount
    let price = 0;
    products.forEach((item) => {
      price += item.price * (item.quantity || 1);
    });
    setTotalAmt(price);
  }, [products]);

  useEffect(() => {
    if (totalAmt <= 50000) {
      setShippingCharge(30);
    } else if (totalAmt <= 100000) {
      setShippingCharge(20);
    } else if (totalAmt > 101000) {
      setShippingCharge(10);
    }
  }, []);

  const handleIncrement = (id: number) => {
    dispatch(updateQuantity({ id, quantityChange: 1 }));
  };

  const handleDecrement = (id: number) => {
    dispatch(updateQuantity({ id, quantityChange: -1 }));
  };

  const handleDeleteSelectedItem = (product: Product) => {
    dispatch(deleteItem(product));
  };

  return (
    <Fragment>
      <NavBar />
      {products.length > 0 ? (
        <section className="relative z-10 after:contents-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-gray-50">
          <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
            <div className="grid grid-cols-12">
              <div className="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-14 w-full max-xl:max-w-3xl max-xl:mx-auto">
                <div className="flex items-center justify-between pb-8 border-b border-gray-300">
                  <h2 className="font-manrope font-semibold text-3xl leading-10 text-[#FC6736]">
                    My Shopping Cart
                  </h2>
                </div>
                <div className="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-200">
                  <div className="col-span-12 md:col-span-7">
                    <p className="font-normal text-lg leading-8 text-gray-400">
                      Product Details
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-5">
                    <div className="grid grid-cols-5">
                      <div className="col-span-2">
                        <p className="font-normal text-lg leading-8 text-gray-400 text-center">
                          Quantity
                        </p>
                      </div>
                      <div className="col-span-3 ">
                        <p className="font-normal text-lg leading-8 text-gray-400 text-center">
                          Total
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {products.map((product) => (
                  <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-1 py-6 border-b border-gray-200">
                    <div className="w-full md:max-w-[126px]">
                      <img
                        src={product.image}
                        alt="perfume bottle image"
                        className="mx-auto"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                      <div className="md:col-span-2">
                        <div className="flex flex-col max-[500px]:items-center gap-3">
                          <h6 className="font-semibold text-base leading-7 text-black">
                            {product.name}
                          </h6>
                          <h6 className="font-normal text-base leading-7 text-gray-500">
                            {product.category}
                          </h6>
                          <h6 className="font-semibold text-base leading-7 text-[#76885B]">
                            $ {product.price}
                          </h6>
                        </div>
                      </div>
                      <div className="flex items-center max-[400px]:justify-center h-full max-md:mt-3">
                        <div className="flex items-center w-full">
                          <button
                            onClick={() => handleDecrement(product.id)}
                            className="group rounded-l-full px-3 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300"
                          >
                            <AiOutlineMinus className="w-[20px] h-[20px]" />
                          </button>
                          <p className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-h-[58px] min-w-[40px] placeholder:text-gray-900 py-[15px]  text-center bg-transparent">
                            {product.quantity}
                          </p>
                          <button
                            onClick={() => handleIncrement(product.id)}
                            className="group rounded-r-full px-3 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300"
                          >
                            <AiOutlinePlus className="w-[20px] h-[20px]" />
                          </button>
                        </div>
                      </div>
                      <div className="items-center flex justify-center">
                        <p className="font-bold text-lg leading-8 text-[#FC6736]">
                          ${product.price * (product.quantity || 1)}
                        </p>
                      </div>
                    </div>
                    <BiTrash
                      onClick={() =>
                        dispatch(() => handleDeleteSelectedItem(product))
                      }
                      className="text-primeColor ml-3 w-9 h-9 hover:text-red-500 duration-300 cursor-pointer"
                    />
                  </div>
                ))}

                <div className="flex items-center justify-between mt-8">
                  <Link to="/new-arrivals">
                    <button className="flex items-center px-3 py-2 rounded-full gap-2 border-none outline-0 font-semibold text-m leading-8 text-[#76885B] shadow-sm shadow-transparent transition-all duration-200 hover:shadow-[#76885B] hover:bg-gray-300">
                      <BsCaretLeftFill />
                      Continue Shopping
                    </button>
                  </Link>
                  <button
                    onClick={() => dispatch(resetCart())}
                    className="flex items-center px-5 py-3 rounded-full gap-2 border-none outline-0 font-semibold text-lg leading-8 text-red-600 shadow-sm shadow-transparent transition-all duration-500 hover:shadow-red-500 bg-red-100"
                  >
                    Reset
                  </button>
                </div>
              </div>
              <div className=" col-span-12 xl:col-span-4 bg-gray-50 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-14">
                <h2 className="font-manrope font-bold text-3xl leading-10 text-[#76885B] pb-8 border-b border-gray-300">
                  Order Summary
                </h2>
                <div className="mt-8">
                  <div className="flex items-center justify-between pb-6">
                    <p className="font-normal text-lg leading-8 text-black">
                      {products.length > 0 ? `Items: ${products.length}` : ""}
                    </p>
                    <p className="font-medium text-lg leading-8 text-black">
                      ${totalAmt}
                    </p>
                  </div>
                  <form>
                    <div className="flex items-center justify-between py-2">
                      <p className="font-medium text-l text-black">
                        Shipping Fee:
                      </p>
                      <p className="font-semibold text-xl leading-8 text-[#76885B]">
                        ${shippingCharge}
                      </p>
                    </div>
                    <div className="flex items-center justify-between py-8">
                      <p className="font-medium text-xl leading-8 text-black">
                        Total:
                      </p>
                      <p className="font-semibold text-xl leading-8 text-[#76885B]">
                        ${totalAmt + Number(shippingCharge)}
                      </p>
                    </div>
                    <div>
                      <button className="w-full text-center bg-[#76885B] rounded-full py-3 px-5 font-semibold text-lg text-white transition-all duration-300 hover:bg-opacity-90">
                        Checkout
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col mdl:flex-row justify-center items-center mt-5 gap-4 pb-20"
        >
          <div>
            <img
              className="w-80 rounded-lg p-4 mx-auto"
              src={emptyCart}
              alt="emptyCart"
            />
          </div>
          <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
            <h1 className="font-titleFont text-xl font-bold uppercase">
              Your Cart feels lonely.
            </h1>
            <p className="text-sm text-center px-10 -mt-2">
              Your Shopping cart lives to serve. Give it purpose - fill it with
              books, electronics, videos, etc. and make it happy.
            </p>
            <Link to="/new-arrivals">
              <button className="bg-primeColor border border-[#76885B] rounded cursor-pointer hover:bg-[#76885B] active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-400 hover:text-white duration-300">
                Continue Shopping
              </button>
            </Link>
          </div>
        </motion.div>
      )}
      <Footer />
    </Fragment>
  );
};

export default Cart;
