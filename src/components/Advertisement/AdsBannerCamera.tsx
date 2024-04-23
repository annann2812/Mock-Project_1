import { Link } from "react-router-dom";
import { Fragment } from "react";
import AdsImg4 from "../../assets/image/sub-banner-home-2.jpeg";
import flashSaleBanner from "../../assets/image/BannerSale_2.jpeg";

const AdsBannerCamera = () => {
  return (
    <Fragment>
      <div className="lg:w-1/2 text-center shadow-xl border-2 border-secondary-01">
        <div className="relative overflow-hidden">
          <img src={AdsImg4} className="w-full object-cover" alt="/" />
          <div className="absolute right-5 top-1/2 -translate-y-1/2 text-right z-10 text-black flex flex-col gap-10">
            <div className="flex flex-col gap-1">
              <p className="text-xl text-primary-02 font-extrabold font-italic tracking-wider">
                Perfect Camera Cell
              </p>
              <p className="text-sm tracking-wider font-italic">Make stylish</p>
            </div>
            <Link
              to={"/best-sellers"}
              className="hover:no-underline text-black border-[1px] border-black bg-white rounded-md py-2 px-4 block text-center ml-auto hover:text-primary-02"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AdsBannerCamera;
