import { Link } from "react-router-dom";
import { Fragment } from "react";
import AdsImg4 from "../../assets/image/sub-banner-home-2.jpeg";
import flashSaleBanner from "../../assets/image/BannerSale_2.jpeg";

const AdsBannerCamera = () => {
  return (
    <Fragment>
      <div className="w-1/2 text-center shadow-xl">
        <div className="relative overflow-hidden block">
          <img
            src="https://m.media-amazon.com/images/I/712zRxY86JL._AC_SY395_.jpg"
            className="w-full"
            alt="/"
          />
          <div className="absolute right-5 top-[10px] text-right z-10 text-black flex flex-col">
            <span>Wingtip Shoes</span>
            <Link
              to={"/best-sellers"}
              className="hover:no-underline text-black border-[1px] border-black bg-white rounded-[10px] p-2 block w-fit text-center m-auto"
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
