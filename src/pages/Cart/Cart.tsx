import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import emptyCart from "../../assets/image/emptyCart.png";
import { AppDispatch, RootState } from "../../Redux/store";
import {
  deleteItem,
  resetCart,
  updateCartQuantity,
  updateQuantity,
} from "../../Redux/ProductSlice";
import { FiPlus, FiMinus } from "react-icons/fi";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Header_Footer/Footer";
import { FaTrashAlt } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { Product } from "../../ApiServices/types";

const Cart: React.FC = () => {
  const products = useSelector((state: RootState) => state.loopStore.addToCart);
  const [totalAmt, setTotalAmt] = useState<number>(0);
  const [shippingCharge, setShippingCharge] = useState<number>();
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    // Calculate total amount
    let price = 0;
    products.forEach((item) => {
      price += item.price * (item.quantity || 1);
    });
    setTotalAmt(price);
  }, [products]);

  useEffect(() => {
    if (totalAmt <= 3000) {
      setShippingCharge(30);
    } else if (totalAmt <= 4000) {
      setShippingCharge(20);
    } else if (totalAmt > 4000) {
      setShippingCharge(10);
    }
  }, []);

  const handleIncrement = (id: number) => {
    dispatch(updateCartQuantity({ id, quantityChange: 1 }));
  };

  const handleDecrement = (id: number) => {
    dispatch(updateCartQuantity({ id, quantityChange: -1 }));
  };

  const handleDeleteSelectedItem = (product: Product) => {
    dispatch(deleteItem(product));
  };

  return (
    <Fragment>
      <NavBar />
      {products.length > 0 ? (
        <div className="h-screen overflow-x-hidden bg-gray-100 py-12">
          <h1 className="mb-3 text-center text-2xl font-medium uppercase text-[#76885B]">My Shopping Cart</h1>
          <div className="mx-auto max-w-6xl justify-center md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-full">
              {products.map((product) => (
                <div className=" mb-6 rounded-lg bg-white p-6 shadow-md sm:flex">
                  <img
                    className="w-[15%]"
                    src={product.images_list[0]}
                    alt={product.name}
                  />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-3 sm:mt-0">
                      <h2 className="text-xl capitalize font-bold text-gray-900">
                        {product.name}
                      </h2>
                      <p className="mt-1 text-xs text-gray-700">
                        {product.price}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border-gray-100">
                        <button
                          onClick={() => handleDecrement(product.id)}
                          className="cursor-pointer rounded-l bg-gray-100 py-2 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        >
                          <FiMinus />
                        </button>
                        <span className="border bg-white text-center font-semibold text-lg px-3 outline-none">
                          {product.quantity}
                        </span>
                        <button
                          onClick={() => handleIncrement(product.id)}
                          className="cursor-pointer rounded-r bg-gray-100 py-2 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        >
                          <FiPlus />
                        </button>
                      </div>
                      <div
                        onClick={() =>
                          dispatch(() => handleDeleteSelectedItem(product))
                        }
                        className="ml-12 transition-all duration-200"
                      >
                        <FaTrashAlt className="text-[#76885B] hover:text-[#FC6736] text-[20px] font-semibold" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-between mt-4">
                <Link to="/all-items">
                  <button className="flex items-center rounded-lg py-2 px-2 border-2 outline-0 border-[#76885B] gap-2 font-semibold text-m leading-8 text-[#76885B] shadow-sm shadow-transparent transition-all duration-200 hover:shadow-[#76885B] hover:bg-[#FC6736] hover:text-white hover:border-none">
                    <IoIosArrowBack className="text-[20px]"/>
                    Continue Shopping
                  </button>
                </Link>
                <button
                  onClick={() => dispatch(resetCart())}
                  className="flex items-center px-3 py-2 gap-2 rounded border-none outline-0 font-medium text-lg leading-8 text-white shadow-sm shadow-transparent transition-all duration-200 hover:shadow-red-500 bg-[#76885B] hover:bg-[#FC6736] hover:text-white"
                >
                  Reset
                </button>
              </div>
            </div>
            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">${totalAmt.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-700">${shippingCharge}</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">
                    ${(totalAmt + shippingCharge).toFixed(2)} USD
                  </p>
                  <p className="text-sm text-gray-700">including VAT</p>
                </div>
              </div>
              <Link to = "/payment">
                <button className="mt-6 w-full transition-all duration-200 rounded-md bg-[#76885B] py-1.5 font-medium text-blue-50 hover:bg-opacity-90">
                  Check out
                </button>
              </Link>
            </div>
          </div>
        </div>
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
            <Link to="/all-items">
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