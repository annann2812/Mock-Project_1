import React from "react";

const Newsletter = () => {
  return (
    <div>
      <div className="bg-[#FC6736]">
        <div className="w-full lg:w-[90%] flex px-5 py-2 justify-between font-extralight text-white mx-auto transition-all duration-300">
          <p className="text-md text-white">
            <span className="hidden md:inline-block">Welcome - </span> Sign Up
            Now & Get 25% Off
          </p>
          <p className="text-md text-white">
            <a href="tel: +123456789" className="hover:text-white">
              Call <span className="hidden md:inline-block">The Expert -</span>
              <span className="inline-block md:hidden">Us:</span> 123 456 789
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
