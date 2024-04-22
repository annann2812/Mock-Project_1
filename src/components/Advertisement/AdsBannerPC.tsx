import { Link } from "react-router-dom";
import { Fragment } from "react";
import saleOffer from "../../assets/image/BannerSale_3.jpeg";

const AdsBannerPC = () => {
  return (
    <Fragment>
      <div className="w-1/2 text-center shadow-xl">
        <div className="relative overflow-hidden block">
          <img
            src="https://m.media-amazon.com/images/I/71hIhrcYztL._AC_SX395_.jpg"
            alt="/"
            className="w-full"
          />
          <div className="absolute right-5 top-[10px] text-right z-10 text-black flex flex-col">
            <span>Chelsea Sneakers</span>
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
