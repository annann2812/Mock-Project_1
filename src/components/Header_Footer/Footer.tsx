// import Grid from "@mui/material/Grid";
// import React, { Fragment } from "react";
// import Logo from "../../assets/image/LOOP-logo (2).png";
import { Link } from "react-router-dom";
// import paymentMethod from "../../assets/image/paymentMethod.png";
import { Fragment } from "react";
import Logo from "../../assets/image/LOOP-logo (2).png";
import {
  ChatBubbleLeftIcon,
  EnvelopeIcon,
  GiftIcon,
  GlobeAmericasIcon,
  MapPinIcon,
  MegaphoneIcon,
  PaperAirplaneIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";

const Footer = () => {
  const footerInfo = [
    {
      name: "Information",
      lists: ["Contact Us", "Sitemap", "Stores", "Login", "My Account"],
    },
    {
      name: "Our Company",
      lists: ["Price Drop", "New Products", "Best Sales", "Sitemap", "Store"],
    },
    {
      name: "Quick Links",
      lists: [
        "About Us",
        "New Products",
        "Best Sales",
        "Contact Us",
        "Sitemap",
      ],
    },
    {
      name: "Policies & Info",
      lists: [
        "Delivery",
        "Legal Notice",
        "Terms and Condition Of Use",
        "About Us",
        "Secure Payment",
      ],
    },
  ];

  return (
    <Fragment>
      {/* <footer className="text-gray-600 body-font">
        <div className="border-t border-gray-200 py-12 mx-auto ">
          <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    First Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    First Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    First Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    First Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    First Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    First Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <div className="container px-5 py-8 flex mx-auto justify-between items-center">
            <div className="flex w-[60%] flex-col justify-center md:justify-start">
              <div className="relative gap-3 sm:mr-4 mr-2">
                <p
                  id="footer-field"
                  className="leading-7 text-sm text-gray-600 mb-2"
                >
                  Email Address
                </p>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-[50%] bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="inline-flex text-center w-[20%] justify-center mt-2 text-white bg-[#76885B] border-0 py-2 px-6 focus:outline-none hover:bg-opacity-90 rounded">
                Activate
              </button>
              <span className="text-gray-500 text-sm  md:mt-0 mt-2 sm:text-left text-left">
                By creating a new product alert, you agree to our Terms . 
                You can change your consent settings at any time by unsubscribing or as
                detailed in our terms.
              </span>
            </div>

            <Link
              to="/payment"
              className="lg:ml-auto flex lg:mt-0 mt-6 justify-end md:w-auto"
            >
              <img className="w-[50%]" src={paymentMethod} alt="" />
            </Link>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2024 byLoop Corp All Rights Reserved
            </p>
            <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer> */}
      <div className="bg-primary-01">
        <div className=" flex flex-col gap-8 lg:flex-row w-full xl:w-[1280px] px-4 py-5 justify-between mx-auto">
          <div className="w-3/5 lg:w-[30%] mx-auto p-4 lg:lg-10 bg-white flex flex-col gap-3 rounded-lg">
            <div className="flex gap-4 items-center border-b-2 pb-2 border-b-primary-01 min-h-20">
              <GlobeAmericasIcon className="w-16 h-16 text-primary-01" />
              <p className="text-uppercase text-3xl font-extrabold text-primary-01">
                Find Us
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <MapPinIcon className="w-5 h-5 text-primary-01" />
              <p>17 Duy Tan, Cau Giay, Ha Noi</p>
            </div>
            <div className="flex gap-3 items-center">
              <PhoneIcon className="w-5 h-5 text-primary-01" />
              <p>0123-456-789</p>
            </div>
            <div className="flex gap-3 items-center">
              <ChatBubbleLeftIcon className="w-5 h-5 text-primary-01" />
              <p className="break-words">Sales@Company.com</p>
            </div>
          </div>
          <div className="w-3/5 lg:w-[30%] mx-auto p-4 bg-white flex flex-col gap-3 rounded-lg">
            <div className="flex gap-4 items-center border-b-2 pb-2 border-b-primary-01 min-h-20">
              <EnvelopeIcon className="w-16 h-16 text-primary-01" />
              <p className="text-uppercase text-3xl font-extrabold text-primary-01 w-fit">
                Daily Updates
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-wrap">Sign Up And Get A Voucher Up To $250</p>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full border-2 border-primary-01 px-2 py-1 rounded-lg focus:outline-none focus:border-primary-02"
                />
                <button>
                  <PaperAirplaneIcon className="w-5 h-5 text-primary-01 hover:text-primary-02" />
                </button>
              </div>
            </div>
          </div>
          <div className="w-3/5 lg:w-[30%] mx-auto p-4 gap-3 bg-white flex flex-col rounded-lg">
            <div className="flex gap-4 items-center border-b-2 pb-2 border-b-primary-01">
              <MegaphoneIcon className="w-16 h-16 text-primary-01" />
              <p className="text-uppercase text-3xl font-extrabold text-primary-01 w-fit">
                Best Offers
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="flex mx-auto gap-4">
                <GiftIcon className="w-8 h-8 text-red-600" />
                <GiftIcon className="w-8 h-8 text-primary-03" />
                <GiftIcon className="w-8 h-8 text-primary-02" />
              </div>
              <p className="text-wrap">
                Some of the best offer around the year just for you!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-wrap xl:w-[1280px] px-4 py-5 mx-auto">
        {Array.from({ length: footerInfo.length }, (_, index) => (
          <div
            key={index}
            className="w-1/2 lg:w-1/4 px-3 [&:nth-child(2n+1)]:border-r-2 lg:[&:not(:nth-last-child(-n+1))]:border-r-[2px] mb-4"
          >
            <p className="font-extrabold text-2xl">{footerInfo[index].name}</p>
            <div className="py-3 flex flex-col gap-2">
              {footerInfo[index].lists.map((item, index) => (
                <p key={index} className="font-italic">
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="bg-secondary-03">
        <div className="flex flex-col lg:flex-row gap-8 justify-between w-full xl:w-[1280px] mx-auto px-4 py-5 items-center relative">
          <div className="flex text-white">
            <a
              href="/"
              className="flex items-center justify-center text-primary-01 hover:text-white h-8 rounded-full hover:bg-primary-01 w-8"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="/"
              className="flex items-center justify-center text-primary-01 hover:text-white h-8 rounded-full hover:bg-primary-01 w-8"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="/"
              className="flex items-center justify-center text-primary-01 hover:text-white h-8 rounded-full hover:bg-primary-01 w-8"
            >
              <i className="fas fa-rss"></i>
            </a>
            <a
              href="/"
              className="flex items-center justify-center text-primary-01 hover:text-white h-8 rounded-full hover:bg-primary-01 w-8"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="/"
              className="flex items-center justify-center text-primary-01 hover:text-white h-8 rounded-full hover:bg-primary-01 w-8"
            >
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a
              href="/"
              className="flex items-center justify-center text-primary-01 hover:text-white h-8 rounded-full hover:bg-primary-01 w-8"
            >
              <i className="fab fa-pinterest-p"></i>
            </a>
            <a
              href="/"
              className="flex items-center justify-center text-primary-01 hover:text-white h-8 rounded-full hover:bg-primary-01 w-8"
            >
              <i className="fab fa-vimeo-v"></i>
            </a>
            <a
              href="/"
              className="flex items-center justify-center text-primary-01 hover:text-white h-8 rounded-full hover:bg-primary-01 w-8"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <img src={Logo} alt="/" className="" />
          <div className="grid grid-rows-1 grid-cols-4 gap-6">
            <img
              className="object-cover w-12"
              src="https://prestashop.templatemela.com/PRS08/PRS080183/img/cms/American.png"
              alt="/"
            />
            <img
              className="object-cover w-12"
              src="https://prestashop.templatemela.com/PRS08/PRS080183/img/cms/master_card.png"
              alt="/"
            />
            <img
              className="object-cover w-12"
              src="https://prestashop.templatemela.com/PRS08/PRS080183/img/cms/paypal.png"
              alt="/"
            />
            <img
              className="object-cover w-12"
              src="https://prestashop.templatemela.com/PRS08/PRS080183/img/cms/visa.png"
              alt="/"
            />
          </div>
        </div>
      </div>
      <div className="p-4 w-full xl:w-[1280px] text-center mx-auto">
        <a href="/" className="block hover:text-primary-02">
          &copy; 2024 - Ecommerce software by TheTeam<sup>TM</sup>
        </a>
      </div>
    </Fragment>
  );
};

export default Footer;
