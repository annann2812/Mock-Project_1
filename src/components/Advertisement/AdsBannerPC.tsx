import { Link } from "react-router-dom";
import { Fragment } from "react";
import flashSaleBanner2 from "../../assets/image/BannerSale_3.jpeg";

const AdsBannerPC = () => {
  return (
    <Fragment>
      <div className="w-1/2 text-center shadow-xl border-2 border-secondary-01">
        <Link
          className="relative flex items-center justify-center"
          to="/best-sellers"
        >
          <img
            src={flashSaleBanner2}
            alt="/"
            className="object-contain w-full"
          />
        </Link>
      </div>
    </Fragment>
  );
};

export default AdsBannerPC;
