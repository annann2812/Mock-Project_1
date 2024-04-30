import React, { ChangeEvent, Fragment, useState } from "react";
import instance from "../../../projectLogin/src/service";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
interface userProps {
  name: string;
  phone: string;
  email: string;
  address: string;
  shippingMethod: string;
  paymentMethod: string;
  products: { [key: string]: string };
}
const PayPage = () => {
  const products = useSelector((state: RootState) => state.loopStore.addToCart);
  console.log(products);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    shippingMethod: "free",
    paymentMethod: "cash_on_delivery",
    products: products,
  });

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
      const isConfirm = confirm("Continue shopping?");
      isConfirm && navigate("/");
    })();
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit} className="border-1 p-4 rounded-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">
            Recipient's name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 px-3 py-2 rounded-lg w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block mb-1">
            Phone number:
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="border border-gray-300 px-3 py-2 rounded-lg w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 px-3 py-2 rounded-lg w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block mb-1">
            Delivery address:
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="border border-gray-300 px-3 py-2 rounded-lg w-full"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Phương thức vận chuyển:</label>
          <div>
            <input
              type="radio"
              id="free"
              name="shippingMethod"
              value="free"
              checked={formData.shippingMethod === "free"}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="free" className="mr-4">
              Free ship (5-7day)
            </label>
            <input
              type="radio"
              id="express"
              name="shippingMethod"
              value="express"
              checked={formData.shippingMethod === "express"}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="express">Express shipping (now)</label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Phương thức thanh toán:</label>
          <div>
            <input
              type="radio"
              id="cash_on_delivery"
              name="paymentMethod"
              value="cash_on_delivery"
              checked={formData.paymentMethod === "cash_on_delivery"}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="cash_on_delivery" className="mr-4">
              Thanh toán khi nhận hàng
            </label>
            <input
              type="radio"
              id="banking"
              name="paymentMethod"
              value="banking"
              checked={formData.paymentMethod === "banking"}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="banking">Banking</label>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Gửi
        </button>
      </form>
    </Fragment>
  );
};

export default PayPage;
