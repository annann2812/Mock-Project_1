import { Link } from "react-router-dom";
import { Fragment } from "react";
import flashSaleBanner from "../../assets/image/BannerSale_2.jpeg";

const AdsBannerCamera = () => {
  return (
    <Fragment>
      <Link to="/products/33" className="block w-[22%] max-sm:hidden  transition hover:scale-110">
        <img
          className="w-full"
          src="https://www.ringke.com/site/data/file/item/default/1601946038_1PVQgEhu"
          alt=""
        />
      </Link>
    </Fragment>
  );
};

export default AdsBannerCamera;
