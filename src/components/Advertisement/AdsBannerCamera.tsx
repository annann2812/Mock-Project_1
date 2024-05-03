import { Link } from "react-router-dom";
import { Fragment } from "react";
import flashSaleBanner from "../../assets/image/BannerSale_2.jpeg";

const AdsBannerCamera = () => {
  return (
    <Fragment>
      <div className="w-1/2 text-center shadow-xl border-2 border-secondary-01">
        <Link
          className="relative flex items-center justify-center min-h-full"
          to="/new-arrivals"
        >
          <img
            src={flashSaleBanner}
            className="object-contain h-full"
            alt="/"
          />
        </Link>
      </div>
    </Fragment>
  );
};

export default AdsBannerCamera;
