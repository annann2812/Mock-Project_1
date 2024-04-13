import { Link } from "react-router-dom";
import { Fragment } from "react";
import AdsImg3 from "../../assets/image/sub-banner-home-1.jpeg";

const AdsBannerPC = () => {
  return (
    <Fragment>
      <div className="w-fit text-center">
        <div className="relative overflow-hidden block">
          <img src={AdsImg3} alt="" className="align-middle" />
          <div className="absolute right-5 top-[10px] text-right z-10 text-black flex flex-col">
            <span>abcabc</span>
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

export default AdsBannerPC;
