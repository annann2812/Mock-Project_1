import React, { ChangeEvent, Fragment, useEffect, useState } from "react";
import instance from "../../../projectLogin/src/service";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/store";
import { CiLocationOn, CiMail, CiPhone, CiUser } from "react-icons/ci";
import { ToastContainer, toast } from "react-toastify";
import { resetCart } from "../../Redux/ProductSlice";
import { FaArrowLeft } from "react-icons/fa";

const PayPage = () => {
  const products = useSelector((state: RootState) => state.loopStore.addToCart);
  const navigate = useNavigate();
  const [totalAmt, setTotalAmt] = useState<number>(0);
  const dispatch: AppDispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    shippingMethod: "free",
    paymentMethod: "cash_on_delivery",
    products: products,
  });
  const [shippingCharge, setShippingCharge] = useState<number>(0);
  const hasDiscount = products.some(
    (product) => product.discount && product.discount.is_discount
  );
  useEffect(() => {
    if (formData.shippingMethod === "free") {
      setShippingCharge(0);
    } else {
      if (totalAmt <= 300.0) {
        setShippingCharge(30);
      } else if (totalAmt <= 500.0) {
        setShippingCharge(20);
      } else if (totalAmt > 500.0) {
        setShippingCharge(10);
      }
    }
  }, [formData.shippingMethod, totalAmt]);

  useEffect(() => {
    let total = 0;
    products.forEach((item) => {
      if (item.discount && item.discount.is_discount) {
        const discountedPrice =
          item.price -
          (item.price * parseFloat(item.discount.price_discount)) / 100;
        total += discountedPrice * (item.quantity || 1);
      } else {
        total += item.price * (item.quantity || 1);
      }
    });

    setTotalAmt(total);
  }, [products]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    (async () => {
      const { data } = await instance.post("/invoice", formData);
      toast("Yayyy! Your order is now being packaged for shipping!");
      const isConfirm = confirm("Your order confirmed!");
      if (isConfirm) {
        dispatch(resetCart());
        navigate("/");
      }
    })();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ToastContainer />
        <Link to="/" className="block sm:px-10 lg:px-20 xl:px-32 mt-16">
          <FaArrowLeft className="text-[28px] hover:text-[#FC6736] hover:scale-110" />
        </Link>
        <div className="grid mb-16 sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
          <div className="px-4 pt-8">
            <p className="text-xl font-medium">Order Summary</p>
            <p className="text-gray-400">
              Check your{" "}
              <span className="font-bold text-[#FC6736] text-[20px]">
                {products.length}
              </span>{" "}
              items. And select a suitable shipping method.
            </p>
            <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6 overflow-y-auto md:h-[200px]">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="flex flex-col rounded-lg bg-white sm:flex-row"
                >
                  <img
                    className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                    src={product.images_list[0]}
                    alt={product.name}
                  />
                  <div className="flex w-full flex-col px-4 py-4">
                    <span className="font-semibold">{product.name}</span>
                    <span className="float-right text-gray-400">
                      {product.branch}
                    </span>
                    <p
                      className={`mt-1 font-semibold text-md ${
                        product.discount && product.discount.is_discount
                          ? "text-[#FC6736]"
                          : "text-gray-700"
                      }`}
                    >
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
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-lg font-medium">Shipping Methods</p>
            <div className="mt-5 grid gap-6">
              <div className="relative">
                <label
                  htmlFor="free"
                  className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4 relative"
                >
                  <input
                    type="radio"
                    id="free"
                    name="shippingMethod"
                    value="free"
                    checked={formData.shippingMethod === "free"}
                    onChange={handleChange}
                  />
                  <div className="ml-5">
                    <span className="mt-2 font-semibold">
                      Free Shipping: 5-7 days
                    </span>
                  </div>
                </label>
              </div>

              <div className="relative">
                <label
                  htmlFor="express"
                  className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4 relative"
                >
                  <input
                    type="radio"
                    id="express"
                    name="shippingMethod"
                    value="express"
                    checked={formData.shippingMethod === "express"}
                    onChange={handleChange}
                  />
                  <div className="ml-5">
                    <span className="mt-2 font-semibold">
                      Express Shipping: 2-12hr
                    </span>
                  </div>
                </label>
              </div>
            </div>
            <p className="mt-8 text-lg font-medium">LoopPayments</p>
            <div className="mt-5 grid gap-6">
              <div className="relative">
                <label
                  htmlFor="banking"
                  className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4 relative"
                >
                  <input
                    type="radio"
                    id="banking"
                    name="paymentMethod"
                    value="banking"
                    checked={formData.paymentMethod === "banking"}
                    onChange={handleChange}
                  />
                  <div className="ml-5">
                    <span className="mt-2 font-semibold">
                      Credit/Debit Cards
                    </span>
                  </div>
                </label>
              </div>

              <div className="relative">
                <label
                  htmlFor="cash_on_delivery"
                  className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4 relative"
                >
                  <input
                    type="radio"
                    id="cash_on_delivery"
                    name="paymentMethod"
                    value="cash_on_delivery"
                    checked={formData.paymentMethod === "cash_on_delivery"}
                    onChange={handleChange}
                  />
                  <div className="ml-5">
                    <span className="mt-2 font-semibold">Cash on Delivery</span>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
            <p className="text-xl font-medium">Payment Details</p>
            <p className="text-gray-400">
              Complete your order by providing your payment details.
            </p>
            <div className="">
              <label id="email" className="mt-4 mb-2 block text-sm font-medium">
                Email
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="your.email@gmail.com"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <CiMail />
                </div>
              </div>
              <label id="name" className="mt-4 mb-2 block text-sm font-medium">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Your full name here"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <CiUser />
                </div>
              </div>
              <label id="phone" className="mt-4 mb-2 block text-sm font-medium">
                Phone Number
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Your phone here"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <CiPhone />
                </div>
              </div>
              <label
                id="address"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Delivery Address
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Your address here"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <CiLocationOn />
                </div>
              </div>

              <div className="mt-6 border-t border-b py-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Subtotal</p>
                  <p className="font-semibold text-gray-900">
                    ${totalAmt.toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Shipping</p>
                  <p className="font-semibold text-gray-900">
                    ${shippingCharge}
                  </p>
                </div>
                {hasDiscount && (
                  <div className="flex items-center justify-between ">
                    <p className="text-sm font-medium text-gray-900">
                      Discount
                    </p>
                    <p className="font-bold text-[#FC6736]">
                      {products[0].discount.price_discount}
                    </p>
                  </div>
                )}
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Total</p>
                <p className="text-2xl font-semibold text-gray-900">
                  ${(totalAmt + shippingCharge).toFixed(2)} USD
                </p>
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 transition ease-in-out duration-200 hover:scale-105 mb-8 w-full rounded-md bg-primary-01 hover:bg-[#FC6736] px-6 py-3 font-medium text-white"
            >
              Place Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PayPage;
