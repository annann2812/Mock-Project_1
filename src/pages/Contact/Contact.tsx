import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Header_Footer/Footer";

const Contact: React.FC = () => {
  return (
    <div>
      <NavBar/>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-10 mx-auto flex">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              title="map"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=17+Duy+Tan,+Cau+Giay,+Ha+Noi&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              style={{
                filter: "contrast(1.2) opacity(0.6)",
                border: "none",
                overflow: "hidden",
              }}
            ></iframe>
            <div className="bg-white absolute flex flex-wrap py-6 m-10 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Photo booth tattooed prism, portland taiyaki hoodie neutra
                  typewriter
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-500 leading-relaxed">
                  example@email.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Feedback
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <div className="relative mb-4">
              <label id="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label id="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label id="message" className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-[#76558B] focus:border-gray-300 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-white bg-[#76885B] border-0 py-2 px-6 focus:outline-none hover:bg-opacity-90 rounded text-lg">
              Send Feedback
            </button>
            <p className="text-xs text-center text-gray-500 mt-3">
              Thank you for your feedback. Have a nice day!
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Contact;
