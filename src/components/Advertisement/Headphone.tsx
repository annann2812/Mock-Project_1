import { Link } from "react-router-dom";
import AdsImg1 from "../../assets/image/left-banner-home.jpeg";

import { Fragment } from "react";

const Headphone = () => {
  return (
    // <Advertisement>
    //     <AdsDetail>
    //         <AdsImage src={AdsImg1}></AdsImage>
    //         <AdsInfo>
    //             <span>abc</span>
    //             <span>abc</span>
    //             <AdsButton to="/best-sellers">SHOP NOW</AdsButton>
    //         </AdsInfo>
    //     </AdsDetail>
    // </Advertisement>
    <Fragment>
      <div className="w-fit text-center">
        <div className="relative overflow-hidden block">
          <img src={AdsImg1} alt="" className="align-middle" />
          <div className="absolute left-0 right-0 bottom-6 text-center z-10 text-white flex flex-col">
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

export default Headphone;
