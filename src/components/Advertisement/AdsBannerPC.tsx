import { Link } from "react-router-dom";
import { Fragment } from "react";

const AdsBannerPC = () => {
  return (
    <Fragment>
      <Link to="/products/7" className="block w-[22%] max-sm:hidden transition hover:scale-110">
        <img
          className="w-full"
          src="https://www.ringke.com/site/data/file/item/default/1601946104_7yepfQgb"
          alt=""
        />
      </Link>
    </Fragment>
  );
};

export default AdsBannerPC;
