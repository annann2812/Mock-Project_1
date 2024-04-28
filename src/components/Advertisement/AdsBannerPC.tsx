import { Link } from "react-router-dom";
import { Fragment } from "react";
import AdsImg3 from "../../assets/image/BannerSale_3.jpeg";

const AdsBannerPC = () => {
  return (
    <Fragment>
      <div className="w-1/2 min-h-full text-center shadow-xl border-2 border-secondary-01 overflow-hidden">
        <Link
          className="relative overflow-hidden flex items-center justify-center w-full h-full"
          to="/best-sellers"
        >
          <img src={AdsImg3} alt="/" className="object-cover w-full h-full" />
          {/* <div className="absolute left-5 top-1/2 -translate-y-1/2 text-left z-10 text-black flex flex-col gap-10">
            <div className="flex flex-col gap-1">
              <p className="text-xl text-primary-02 font-extrabold font-italic tracking-wider">
                Smart System PC
              </p>
              <p className="text-sm tracking-wider font-italic">Make stylish</p>
            </div>
            <Link
              to={"/best-sellers"}
              className="hover:no-underline text-black border-[1px] border-secondary-01 bg-white hover:bg-primary-03 rounded-md py-2 px-4 block text-center mr-auto hover:text-primary-02"
            >
              SHOP NOW
            </Link>
          </div> */}
        </Link>
      </div>
    </Fragment>
  );
};

export default AdsBannerPC;
