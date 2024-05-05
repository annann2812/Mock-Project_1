import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdsWatchesSale = () => {
  const [countdown, setCountdown] = useState(12000);
  const [dealEnded, setDealEnded] = useState(false);

    // useEffect(() => {
    //   const timer = setInterval(() => {
    //     setCountdown((prevCountdown) => {
    //       if (prevCountdown > 0) {
    //         return prevCountdown - 1;
    //       } else {
    //         clearInterval(timer);
    //         setDealEnded(true);
    //         return 0;
    //       }
    //     });
    //   }, 1000);

    //   return () => clearInterval(timer);
    // }, []);

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours < 10 ? "0" : ""}${hours} : ${
      minutes < 10 ? "0" : ""
    }${minutes} : ${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="w-1/2 relative">
      <div className="relative">
        <div className="absolute inset-0 bg-primary-01 opacity-50 rounded-xl"></div>
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/189828127423765.6141abb1ec816.jpg"
          alt="Apple Watch"
          className="rounded-xl"
        />
        {dealEnded ? (
          <div className="absolute top-[40%] text-4xl right-[25%] text-[#FC6736] font-thin">
            Deal has ended
          </div>
        ) : (
          <div className="absolute text-center top-[10%] right-[20%] text-[#EEF7FF]">
            <h2 className="text-3xl mb-16 font-medium tracking-wide">
              Apple Watch Series 7
            </h2>
            <h2 className="uppercase text-6xl font-thin">Pre - order</h2>
            <p className="mt-3 text-3xl tracking-wider">
              {formatTime(countdown)}
            </p>
            <Link
              to="/products/12"
              className="bg-primary-01 block text-[#EEF7FF] rounded-md py-2 w-[40%] hover:bg-[#FC6736] transition-all duration-300 mx-auto tracking-wider mt-3 text-xl capitalize font-thin"
            >
              See more
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdsWatchesSale;
